import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Check, ShieldCheck, QrCode, CreditCard, Smartphone, Banknote, AlertCircle, Copy, CheckCircle2, Lock } from 'lucide-react';
import { DeliveryDetails, CartItem, AddonItem, PaymentMethod } from '../types/flower';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  isOpen: boolean;
  onBack: () => void;
  onClose: () => void;
  deliveryDetails: DeliveryDetails;
  cartItems: CartItem[];
  addons: AddonItem[];
  onPaymentSuccess: (paymentMethod: PaymentMethod, orderId: string) => void;
}

export const PaymentStep: React.FC<Props> = ({
  isOpen,
  onBack,
  onClose,
  deliveryDetails,
  cartItems,
  addons,
  onPaymentSuccess,
}) => {
  const { lang, t } = useLanguage();
  if (!isOpen) return null;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mbank_qr');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Card form states
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');
  const [cardHolder, setCardHolder] = useState<string>('');
  const [show3DSecure, setShow3DSecure] = useState<boolean>(false);
  const [smsOtp, setSmsOtp] = useState<string>('');

  // MBank phone push
  const [mbankPhone, setMbankPhone] = useState<string>(deliveryDetails.senderPhone || '+996 ');

  // Calculate order sums
  const itemsSubtotal = cartItems.reduce(
    (sum, item) => sum + item.selectedSize.price * item.quantity,
    0
  );
  const addonsSubtotal = addons.reduce((sum, a) => sum + a.price, 0);
  const totalAmount = itemsSubtotal + addonsSubtotal + deliveryDetails.deliveryCost;

  // Generate consistent order ID
  const [orderId] = useState<string>(
    () => `KG-${new Date().getFullYear().toString().slice(-2)}${Math.floor(1000 + Math.random() * 9000)}`
  );

  // QR Payment code for Bishkek ELQR / MBank
  const paymentCode = `MB-${orderId}-${totalAmount}`;

  // Card brand detection
  const getCardBrand = (num: string) => {
    const cleaned = num.replace(/\s+/g, '');
    if (cleaned.startsWith('4')) return 'VISA';
    if (cleaned.startsWith('5') || cleaned.startsWith('2')) return 'Mastercard';
    if (cleaned.startsWith('9')) return 'Элкарт';
    return null;
  };

  const handleCardNumberChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  const handleExpiryChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 2) {
      setCardExpiry(`${digits.slice(0, 2)}/${digits.slice(2)}`);
    } else {
      setCardExpiry(digits);
    }
  };

  const copyPaymentCode = () => {
    navigator.clipboard.writeText(paymentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleTriggerPayment = () => {
    setPaymentError(null);

    if (paymentMethod === 'card') {
      if (cardNumber.replace(/\s/g, '').length < 16) {
        setPaymentError('Введите 16-значный номер банковской карты');
        return;
      }
      if (cardExpiry.length < 5) {
        setPaymentError('Укажите срок действия карты (ММ/ГГ)');
        return;
      }
      if (cardCvc.length < 3) {
        setPaymentError('Укажите CVC/CVV код');
        return;
      }
      // Trigger 3D Secure simulation
      setShow3DSecure(true);
      return;
    }

    if (paymentMethod === 'cash_on_delivery') {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        onPaymentSuccess('cash_on_delivery', orderId);
      }, 1000);
      return;
    }

    // MBank / ELQR simulation
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess(paymentMethod, orderId);
    }, 1200);
  };

  const handleConfirm3DSecure = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShow3DSecure(false);
      onPaymentSuccess('card', orderId);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1.5 rounded-full hover:bg-stone-200/60 text-stone-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider font-medium">
                <span>{t.payment.stepTitle}</span>
                <span>·</span>
                <span>Бишкек</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900">
                {t.payment.orderPaymentTitle} {orderId}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors border border-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Order Summary Strip */}
          <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <p className="font-semibold text-stone-900 text-sm">
                {t.payment.deliveryDetailsTitle}
              </p>
              <p className="text-stone-500">
                {t.payment.date}: <strong className="text-stone-700">{deliveryDetails.deliveryDate}</strong> ({deliveryDetails.deliveryTimeSlot})
              </p>
              <p className="text-stone-500 truncate max-w-md">
                {t.payment.address}: <strong className="text-stone-700">{deliveryDetails.address}</strong> ({deliveryDetails.district.split('(')[0].trim()})
              </p>
            </div>

            <div className="text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto">
              <span className="text-[11px] text-stone-400">{t.payment.amountToPay}:</span>
              <p className="font-serif text-2xl font-bold text-stone-900 tabular-nums">
                {totalAmount.toLocaleString()} <span className="text-xs font-sans font-normal text-stone-600">{lang === 'en' ? 'KGS' : 'сом'}</span>
              </p>
            </div>
          </div>

          {/* Payment Method Selector Tabs */}
          <div>
            <label className="block text-xs font-semibold text-stone-800 mb-3">
              {t.payment.chooseMethod}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              
              {/* MBank QR */}
              <button
                type="button"
                onClick={() => setPaymentMethod('mbank_qr')}
                className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  paymentMethod === 'mbank_qr'
                    ? 'border-[#2C3E2D] bg-[#F6F8F6] ring-2 ring-[#2C3E2D]/20 shadow-2xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#E22B32] text-white flex items-center justify-center font-bold text-xs">
                    M
                  </div>
                  {paymentMethod === 'mbank_qr' && <Check className="w-4 h-4 text-[#2C3E2D]" />}
                </div>
                <div className="mt-3">
                  <p className="text-xs font-bold text-stone-900">{t.payment.mbankQr}</p>
                  <p className="text-[10px] text-stone-500">{t.payment.mbankQrDesc}</p>
                </div>
              </button>

              {/* MBank Push */}
              <button
                type="button"
                onClick={() => setPaymentMethod('mbank_push')}
                className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  paymentMethod === 'mbank_push'
                    ? 'border-[#2C3E2D] bg-[#F6F8F6] ring-2 ring-[#2C3E2D]/20 shadow-2xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#E22B32] text-white flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  {paymentMethod === 'mbank_push' && <Check className="w-4 h-4 text-[#2C3E2D]" />}
                </div>
                <div className="mt-3">
                  <p className="text-xs font-bold text-stone-900">{t.payment.mbankPush}</p>
                  <p className="text-[10px] text-stone-500">{t.payment.mbankPushDesc}</p>
                </div>
              </button>

              {/* Bank Card */}
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#2C3E2D] bg-[#F6F8F6] ring-2 ring-[#2C3E2D]/20 shadow-2xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-stone-800 text-white flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  {paymentMethod === 'card' && <Check className="w-4 h-4 text-[#2C3E2D]" />}
                </div>
                <div className="mt-3">
                  <p className="text-xs font-bold text-stone-900">{t.payment.card}</p>
                  <p className="text-[10px] text-stone-500">{t.payment.cardDesc}</p>
                </div>
              </button>

              {/* Cash / Terminal on Delivery */}
              <button
                type="button"
                onClick={() => setPaymentMethod('cash_on_delivery')}
                className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                  paymentMethod === 'cash_on_delivery'
                    ? 'border-[#2C3E2D] bg-[#F6F8F6] ring-2 ring-[#2C3E2D]/20 shadow-2xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-stone-200 text-stone-700 flex items-center justify-center">
                    <Banknote className="w-4 h-4" />
                  </div>
                  {paymentMethod === 'cash_on_delivery' && <Check className="w-4 h-4 text-[#2C3E2D]" />}
                </div>
                <div className="mt-3">
                  <p className="text-xs font-bold text-stone-900">{t.payment.cod}</p>
                  <p className="text-[10px] text-stone-500">{t.payment.codDesc}</p>
                </div>
              </button>

            </div>
          </div>

          {/* Active Payment View */}
          <div className="border border-stone-200 rounded-2xl p-5 bg-white space-y-4">
            
            {/* 1. MBank QR Code Gateway */}
            {paymentMethod === 'mbank_qr' && (
              <div className="space-y-4 text-center">
                <div className="max-w-sm mx-auto space-y-1">
                  <p className="text-sm font-semibold text-stone-900">
                    {t.payment.scanQrNotice}
                  </p>
                  <p className="text-xs text-stone-500">
                    {t.payment.openMbankSteps}
                  </p>
                </div>

                {/* Bishkek ELQR / MBank Visual QR box */}
                <div className="mx-auto w-56 h-56 bg-white p-3 rounded-2xl border-2 border-stone-800 shadow-md flex flex-col items-center justify-center relative">
                  {/* Realistic SVG QR Pattern */}
                  <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
                    {/* Corner Position Targets */}
                    <rect x="10" y="10" width="40" height="40" stroke="#1C1917" strokeWidth="6" fill="none" rx="4" />
                    <rect x="22" y="22" width="16" height="16" fill="#E22B32" rx="2" />

                    <rect x="110" y="10" width="40" height="40" stroke="#1C1917" strokeWidth="6" fill="none" rx="4" />
                    <rect x="122" y="22" width="16" height="16" fill="#1C1917" rx="2" />

                    <rect x="10" y="110" width="40" height="40" stroke="#1C1917" strokeWidth="6" fill="none" rx="4" />
                    <rect x="22" y="122" width="16" height="16" fill="#1C1917" rx="2" />

                    {/* Data Matrix Dots */}
                    {[
                      [60, 15], [75, 15], [90, 20], [60, 35], [80, 40],
                      [15, 60], [30, 65], [45, 60], [15, 85], [35, 90],
                      [60, 60], [70, 70], [80, 60], [90, 75], [100, 65],
                      [115, 60], [130, 70], [145, 60], [120, 85], [140, 90],
                      [60, 95], [75, 105], [90, 95], [60, 120], [80, 130],
                      [110, 115], [125, 125], [140, 115], [115, 140], [135, 145]
                    ].map(([cx, cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="4" fill="#1C1917" />
                    ))}

                    {/* Center Bank Logo */}
                    <circle cx="80" cy="80" r="16" fill="#FFFFFF" stroke="#E22B32" strokeWidth="2" />
                    <text x="80" y="85" textAnchor="middle" fill="#E22B32" fontSize="13" fontWeight="bold">M</text>
                  </svg>

                  <div className="absolute -bottom-2 bg-stone-900 text-white text-[10px] px-2.5 py-0.5 rounded-full font-mono">
                    ELQR · {totalAmount} KGS
                  </div>
                </div>

                {/* Payment invoice details */}
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 max-w-sm mx-auto flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[11px] text-stone-400">Код платежа:</span>
                    <p className="font-mono font-semibold text-stone-800">{paymentCode}</p>
                  </div>
                  <button
                    onClick={copyPaymentCode}
                    className="p-1.5 text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1 text-[11px]"
                  >
                    {copiedCode ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Копировать</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-stone-400">
                  Получатель: ОсОО «Гюльшат Фловерс» (Р/с: 1030120019283748 в MBank Кыргызстан)
                </p>
              </div>
            )}

            {/* 2. MBank Push by Phone */}
            {paymentMethod === 'mbank_push' && (
              <div className="space-y-4 max-w-sm mx-auto text-left">
                <div className="text-center space-y-1">
                  <p className="text-sm font-semibold text-stone-900">
                    {lang === 'ky' ? 'MBank тиркемесине эсеп чыгаруу' : lang === 'en' ? 'Invoice to MBank app' : 'Выставить счет в приложение MBank'}
                  </p>
                  <p className="text-xs text-stone-500">
                    {lang === 'ky' ? `Сиздин MBank'ке ${totalAmount} сом так суммасына билдирүү келет` : lang === 'en' ? `We will send a push invoice of ${totalAmount} KGS to your MBank` : `Мы отправим push-уведомление в ваш MBank с точной суммой ${totalAmount} сом`}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {t.payment.pushPhoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={mbankPhone}
                    onChange={(e) => setMbankPhone(e.target.value)}
                    placeholder="+996 555 123 456"
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-mono focus:ring-2 focus:ring-[#2C3E2D]/20 focus:outline-none"
                  />
                </div>

                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
                  <p className="font-medium text-stone-800">{t.payment.pushHowItWorks}:</p>
                  <p>{t.payment.pushStep1}</p>
                  <p>{t.payment.pushStep2}</p>
                  <p>{t.payment.pushStep3}</p>
                </div>
              </div>
            )}

            {/* 3. Bank Card Form (Visa / Mastercard / Elkart) */}
            {paymentMethod === 'card' && (
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-2">
                  <div className="flex items-center gap-1.5 text-stone-800 font-medium">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.payment.sslSecurity}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="font-bold text-blue-700">VISA</span>
                    <span className="font-bold text-orange-600">Mastercard</span>
                    <span className="font-bold text-emerald-700">Элкарт</span>
                  </div>
                </div>

                {paymentError && (
                  <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{paymentError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {t.payment.cardNumber}:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => handleCardNumberChange(e.target.value)}
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-mono focus:ring-2 focus:ring-[#2C3E2D]/20 focus:outline-none"
                    />
                    {getCardBrand(cardNumber) && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        {getCardBrand(cardNumber)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {t.payment.expiryDate}:
                    </label>
                    <input
                      type="text"
                      placeholder="ММ/ГГ"
                      value={cardExpiry}
                      onChange={(e) => handleExpiryChange(e.target.value)}
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-mono focus:ring-2 focus:ring-[#2C3E2D]/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {t.payment.cvc}:
                    </label>
                    <input
                      type="password"
                      maxLength={3}
                      placeholder="•••"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-mono focus:ring-2 focus:ring-[#2C3E2D]/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {t.payment.cardHolderName}:
                  </label>
                  <input
                    type="text"
                    placeholder="AIZHAN ASANOVA"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs uppercase focus:ring-2 focus:ring-[#2C3E2D]/20 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* 4. Cash on delivery info */}
            {paymentMethod === 'cash_on_delivery' && (
              <div className="space-y-3 max-w-sm mx-auto text-center py-2">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-700">
                  <Banknote className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-base font-semibold text-stone-900">
                  {t.payment.codTitle}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {t.payment.codText}
                </p>
                <div className="bg-amber-50 border border-amber-200/80 p-2.5 rounded-xl text-[11px] text-amber-800">
                  {t.payment.codTip}
                </div>
              </div>
            )}

          </div>

          {/* Action Button & Payment Simulation Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2C3E2D]" />
                {t.payment.receiptNotice}
              </span>
            </div>

            <button
              type="button"
              disabled={isProcessing}
              onClick={handleTriggerPayment}
              className={`w-full sm:w-auto py-3.5 px-8 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                paymentMethod === 'mbank_qr' || paymentMethod === 'mbank_push'
                  ? 'bg-[#E22B32] hover:bg-[#C92229] text-white active:scale-98'
                  : 'bg-[#2C3E2D] hover:bg-[#1E2B1F] text-white active:scale-98'
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{t.payment.btnProcessing}</span>
                </>
              ) : paymentMethod === 'mbank_qr' ? (
                <>
                  <QrCode className="w-4 h-4" />
                  <span>{t.payment.btnConfirmMbank} ({totalAmount} {lang === 'en' ? 'KGS' : 'с.'})</span>
                </>
              ) : paymentMethod === 'mbank_push' ? (
                <>
                  <Smartphone className="w-4 h-4" />
                  <span>{t.payment.btnSendPush}</span>
                </>
              ) : paymentMethod === 'card' ? (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>{t.payment.btnPayCard.replace('{amount}', totalAmount.toString())}</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.payment.btnConfirmCod}</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* 3D-Secure SMS Simulation Modal */}
        {show3DSecure && (
          <div className="fixed inset-0 z-60 bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-stone-200 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-bold text-xs tracking-wider text-blue-700">
                  {getCardBrand(cardNumber) || 'VISA'} 3D-Secure
                </span>
                <span className="text-xs font-mono text-stone-500">Банк Кыргызстана</span>
              </div>

              <div className="space-y-1 text-center">
                <p className="text-sm font-semibold text-stone-900">{t.payment.secure3DTitle}</p>
                <p className="text-xs text-stone-500">
                  {t.payment.amountToPay}: <strong className="text-stone-800">{totalAmount} {lang === 'en' ? 'KGS' : 'сом'}</strong>
                </p>
                <p className="text-[11px] text-stone-400">
                  {t.payment.secure3DText}
                </p>
              </div>

              <form onSubmit={handleConfirm3DSecure} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 text-center">
                    {t.payment.smsPlaceholder} (7492):
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={smsOtp}
                    onChange={(e) => setSmsOtp(e.target.value)}
                    placeholder="7492"
                    className="w-full p-3 text-center text-lg font-mono tracking-widest border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#2C3E2D]/20 focus:outline-none"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShow3DSecure(false)}
                    className="flex-1 py-2.5 rounded-xl border border-stone-300 text-xs font-medium text-stone-600 hover:bg-stone-50"
                  >
                    {t.payment.btnCancel}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#2C3E2D] text-white text-xs font-medium hover:bg-[#1E2B1F]"
                  >
                    {t.payment.btnConfirm}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
