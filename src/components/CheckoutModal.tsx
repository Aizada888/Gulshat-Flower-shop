import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Heart, ArrowRight, Camera, User } from 'lucide-react';
import { CartItem, AddonItem, DeliveryDetails } from '../types/flower';
import { BISHKEK_DISTRICTS, TIME_SLOTS_DATA, getLocalizedDistrictName, getLocalizedDistrictTime } from '../data/catalog';
import { BishkekInteractiveMap } from './BishkekInteractiveMap';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  addons: AddonItem[];
  onProceedToPayment: (details: DeliveryDetails) => void;
}

export const CheckoutModal: React.FC<Props> = ({
  isOpen,
  onClose,
  cartItems,
  addons,
  onProceedToPayment,
}) => {
  const { lang, t } = useLanguage();
  if (!isOpen) return null;

  const currentSlots = TIME_SLOTS_DATA[lang] || TIME_SLOTS_DATA.ru;

  // Compute today's date in YYYY-MM-DD
  const today = new Date();
  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 2);

  // State
  const [recipientType, setRecipientType] = useState<'myself' | 'other'>('other');
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('+996 ');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('+996 ');

  const [selectedDate, setSelectedDate] = useState<string>(formatDate(today));
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(currentSlots[0]);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('center');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [askAddressFromRecipient, setAskAddressFromRecipient] = useState<boolean>(false);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [cardText, setCardText] = useState<string>(
    lang === 'ky'
      ? 'Чын жүрөктөн сүйүү жана жылуулук менен!'
      : lang === 'en'
      ? 'With all my love and warmth!'
      : 'С любовью и теплом в сердце!'
  );
  const [cardFont, setCardFont] = useState<'calligraphy' | 'minimal' | 'romantic'>('calligraphy');
  const [orderComment, setOrderComment] = useState<string>('');
  const [requestPhoto, setRequestPhoto] = useState<boolean>(true);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // Calculate items total
  const itemsSubtotal = cartItems.reduce(
    (sum, item) => sum + item.selectedSize.price * item.quantity,
    0
  );
  const addonsSubtotal = addons.reduce((sum, a) => sum + a.price, 0);
  const subtotal = itemsSubtotal + addonsSubtotal;

  // Delivery cost calculation
  const currentDistrict = BISHKEK_DISTRICTS.find((d) => d.id === selectedDistrictId) || BISHKEK_DISTRICTS[0];
  let deliveryCost = currentDistrict.cost;
  if (currentDistrict.id === 'center') {
    deliveryCost = subtotal >= (currentDistrict.minFreeOrder || 3000) ? 0 : (currentDistrict.standardCost || 200);
  }
  if (selectedTimeSlot.includes('точному') || selectedTimeSlot.includes('так мүнөткө') || selectedTimeSlot.includes('exact time')) {
    deliveryCost += 300;
  }

  const grandTotal = subtotal + deliveryCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    if (!senderPhone || senderPhone.trim().length < 8) {
      errors.push(
        lang === 'ky'
          ? 'Байланыш телефонуңузду көрсөтүңүз'
          : lang === 'en'
          ? 'Please enter your phone number'
          : 'Пожалуйста, укажите ваш контактный телефон'
      );
    }

    if (recipientType === 'other') {
      if (!recipientName.trim()) {
        errors.push(
          lang === 'ky'
            ? 'Алуучунун атын жазыңыз'
            : lang === 'en'
            ? 'Please enter the recipient name'
            : 'Укажите имя получателя букета'
        );
      }
      if (!recipientPhone || recipientPhone.trim().length < 8) {
        errors.push(
          lang === 'ky'
            ? 'Алуучунун телефонун көрсөтүңүз'
            : lang === 'en'
            ? 'Please enter recipient phone for courier'
            : 'Укажите телефон получателя для курьера'
        );
      }
    }

    if (!askAddressFromRecipient && selectedDistrictId !== 'pickup' && !address.trim()) {
      errors.push(
        lang === 'ky'
          ? 'Жеткирүү дарегин көрсөтүңүз (көчө жана үй)'
          : lang === 'en'
          ? 'Please specify street and building in Bishkek'
          : 'Укажите адрес доставки (улицу и дом в Бишкеке)'
      );
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);

    const details: DeliveryDetails = {
      recipientType,
      recipientName: recipientType === 'myself' ? senderName : recipientName,
      recipientPhone: recipientType === 'myself' ? senderPhone : recipientPhone,
      senderName,
      senderPhone,
      district: getLocalizedDistrictName(currentDistrict, lang),
      address: selectedDistrictId === 'pickup' ? (lang === 'ky' ? 'Өзү алып кетүү: Эркиндик бул. 35' : lang === 'en' ? 'Self-pickup: 35 Erkindik Blvd' : 'Самовывоз: бул. Эркиндик 35') : address,
      apartment,
      askAddressFromRecipient,
      isAnonymous,
      deliveryDate: selectedDate,
      deliveryTimeSlot: selectedTimeSlot,
      deliveryCost,
      orderComment,
      cardText,
      cardFont,
      requestPhotoBeforeDelivery: requestPhoto,
    };

    onProceedToPayment(details);
  };

  const getDistrictDisplay = (dist: typeof BISHKEK_DISTRICTS[0]) => {
    const dName = getLocalizedDistrictName(dist, lang);
    const dTime = getLocalizedDistrictTime(dist, lang);
    const costStr = dist.cost === 0
      ? (lang === 'ky' ? 'Акысыз' : lang === 'en' ? 'Free' : 'Бесплатно')
      : `${dist.cost} ${lang === 'en' ? 'KGS' : 'сом'}`;
    return `${dName} — ${costStr} (${dTime})`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider font-medium">
              <span>{t.checkout.stepTitle}</span>
              <span>·</span>
              <span>Бишкек</span>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mt-0.5">
              {t.checkout.mainTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors border border-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-7">
          
          {/* Error Summary */}
          {formErrors.length > 0 && (
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl text-xs text-rose-800 space-y-1">
              <p className="font-semibold">{t.checkout.errorHeader}</p>
              {formErrors.map((err, i) => (
                <p key={i}>• {err}</p>
              ))}
            </div>
          )}

          {/* 1. Date & Time Selection (MANDATORY REQUIREMENT) */}
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
              <Calendar className="w-4 h-4 text-[#2C3E2D]" />
              <span>{t.checkout.step1Title}</span>
            </div>

            {/* Quick Date Chips */}
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-2">
                {t.checkout.dateLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDate(formatDate(today))}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedDate === formatDate(today)
                      ? 'bg-[#2C3E2D] text-white border-[#2C3E2D] shadow-xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <p className="text-xs font-semibold">{t.checkout.today}</p>
                  <p className="text-[11px] opacity-80 mt-0.5">
                    {today.toLocaleDateString(lang === 'en' ? 'en-US' : 'ru-RU', { day: 'numeric', month: 'short' })}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDate(formatDate(tomorrow))}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedDate === formatDate(tomorrow)
                      ? 'bg-[#2C3E2D] text-white border-[#2C3E2D] shadow-xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <p className="text-xs font-semibold">{t.checkout.tomorrow}</p>
                  <p className="text-[11px] opacity-80 mt-0.5">
                    {tomorrow.toLocaleDateString(lang === 'en' ? 'en-US' : 'ru-RU', { day: 'numeric', month: 'short' })}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDate(formatDate(dayAfter))}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedDate === formatDate(dayAfter)
                      ? 'bg-[#2C3E2D] text-white border-[#2C3E2D] shadow-xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <p className="text-xs font-semibold">{t.checkout.dayAfter}</p>
                  <p className="text-[11px] opacity-80 mt-0.5">
                    {dayAfter.toLocaleDateString(lang === 'en' ? 'en-US' : 'ru-RU', { day: 'numeric', month: 'short' })}
                  </p>
                </button>

                {/* Calendar Input for any future date */}
                <div className="relative">
                  <input
                    type="date"
                    min={formatDate(today)}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full h-full p-2.5 bg-white border border-stone-200 rounded-xl text-xs text-stone-800 font-medium focus:ring-2 focus:ring-[#2C3E2D]/20 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-500" />
                {t.checkout.timeSlotLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {currentSlots.map((slot) => {
                  const isSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                        isSelected
                          ? 'border-[#2C3E2D] bg-white ring-1 ring-[#2C3E2D] font-medium text-stone-900 shadow-2xs'
                          : 'border-stone-200 bg-white/70 hover:bg-white text-stone-600'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. Bishkek Delivery Address & District */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-[#2C3E2D]" />
              <span>{t.checkout.step2Title}</span>
            </div>

            {/* District select */}
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5">
                {t.checkout.districtLabel}
              </label>
              <select
                value={selectedDistrictId}
                onChange={(e) => setSelectedDistrictId(e.target.value)}
                className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20"
              >
                {BISHKEK_DISTRICTS.map((dist) => (
                  <option key={dist.id} value={dist.id}>
                    {getDistrictDisplay(dist)}
                  </option>
                ))}
              </select>
            </div>

            {selectedDistrictId === 'pickup' && (
              <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                    <span>{t.checkout.pickupMapTitle}</span>
                  </div>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    {lang === 'ky' ? 'Акысыз · 0 сом' : lang === 'en' ? 'Free · 0 KGS' : 'Бесплатно · 0 сом'}
                  </span>
                </div>
                <p className="text-[11px] text-stone-600">
                  {t.checkout.pickupMapDesc}
                </p>
                <div className="rounded-xl overflow-hidden border border-stone-200 shadow-2xs">
                  <BishkekInteractiveMap showCard={false} />
                </div>
              </div>
            )}

            {selectedDistrictId !== 'pickup' && (
              <div className="space-y-3">
                {/* Ask address from recipient option */}
                <label className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={askAddressFromRecipient}
                    onChange={(e) => setAskAddressFromRecipient(e.target.checked)}
                    className="w-4 h-4 text-[#2C3E2D] rounded border-stone-300 focus:ring-0"
                  />
                  <span>
                    {t.checkout.askAddressRecipient}
                  </span>
                </label>

                {!askAddressFromRecipient && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-stone-500 mb-1">
                        {t.checkout.streetHousePlaceholder} *
                      </label>
                      <input
                        type="text"
                        placeholder={lang === 'ky' ? 'Мисалы: Токтогул көчөсү 125/1, «Триумф»' : lang === 'en' ? 'e.g., 125/1 Toktogul St, Apt 42' : 'Например: ул. Токтогула 125/1, ЖК «Триумф»'}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-stone-500 mb-1">
                        {t.checkout.aptOfficePlaceholder}
                      </label>
                      <input
                        type="text"
                        placeholder="кв. 42, 6 этаж, код 42#"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                        className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 3. Recipient and Sender Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                <User className="w-4 h-4 text-[#2C3E2D]" />
                <span>{t.checkout.step3Title}</span>
              </div>
              
              <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setRecipientType('other')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    recipientType === 'other'
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {t.checkout.forOther}
                </button>
                <button
                  type="button"
                  onClick={() => setRecipientType('myself')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    recipientType === 'myself'
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {t.checkout.forMyself}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sender Info */}
              <div className="space-y-2 bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200/80">
                <p className="text-xs font-semibold text-stone-700">{t.checkout.senderTitle}</p>
                <div>
                  <label className="block text-[11px] text-stone-500 mb-0.5">{t.checkout.senderName}</label>
                  <input
                    type="text"
                    placeholder="Айбек / Елена"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-500 mb-0.5">{t.checkout.senderPhone} *</label>
                  <input
                    type="tel"
                    placeholder="+996 555 000 000"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Recipient Info (if gifting) */}
              {recipientType === 'other' ? (
                <div className="space-y-2 bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200/80">
                  <p className="text-xs font-semibold text-stone-700">{t.checkout.recipientTitle}</p>
                  <div>
                    <label className="block text-[11px] text-stone-500 mb-0.5">{t.checkout.recipientName} *</label>
                    <input
                      type="text"
                      placeholder="Айгүл / Алина"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone-500 mb-0.5">{t.checkout.recipientPhone} *</label>
                    <input
                      type="tel"
                      placeholder="+996 700 000 000"
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 text-xs text-stone-500 text-center">
                  {t.checkout.pickupSelfNotice}
                </div>
              )}
            </div>

            {/* Anonymous & Photo Checkboxes */}
            <div className="space-y-2 pt-1 text-xs">
              <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 text-[#2C3E2D] rounded border-stone-300 focus:ring-0"
                />
                <span>
                  {t.checkout.anonymousDelivery}
                </span>
              </label>

              <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={requestPhoto}
                  onChange={(e) => setRequestPhoto(e.target.checked)}
                  className="w-4 h-4 text-[#2C3E2D] rounded border-stone-300 focus:ring-0"
                />
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#2C3E2D]" />
                  <span>{t.checkout.photoBeforeDelivery}</span>
                </span>
              </label>
            </div>
          </div>

          {/* 4. Handwritten Card Text & Preview */}
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                <Heart className="w-4 h-4 text-[#C47768]" />
                <span>{t.checkout.step4Title}</span>
              </div>
              <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                {lang === 'ky' ? 'Акысыз' : lang === 'en' ? 'Free' : 'Бесплатно'}
              </span>
            </div>

            <textarea
              rows={2}
              value={cardText}
              onChange={(e) => setCardText(e.target.value)}
              placeholder={t.checkout.cardPlaceholder}
              className="w-full p-3 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20 resize-none"
            />

            {/* Handwritten Preview Card */}
            {cardText && (
              <div className="bg-[#FFFDFB] p-4 rounded-xl border border-[#E8DFD8] shadow-2xs">
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">
                  {t.checkout.cardPreview}
                </p>
                <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-snug">
                  «{cardText}»
                </p>
                <p className="text-[10px] text-stone-400 text-right mt-1 font-serif italic">
                  {isAnonymous ? t.checkout.anonymousSign : senderName ? `${t.checkout.fromSign} ${senderName}` : 'Gülshat Atelier'}
                </p>
              </div>
            )}
          </div>

          {/* Comment to florist / courier */}
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">
              {t.checkout.orderCommentLabel}
            </label>
            <input
              type="text"
              value={orderComment}
              onChange={(e) => setOrderComment(e.target.value)}
              placeholder={t.checkout.orderCommentPlaceholder}
              className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none"
            />
          </div>

          {/* Order Summary & Proceed Button */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full sm:w-auto">
              <div className="text-xs text-stone-500 space-y-0.5">
                <p>{t.checkout.summaryFlowers}: <span className="tabular-nums font-medium text-stone-800">{subtotal.toLocaleString()} {lang === 'en' ? 'KGS' : 'с.'}</span></p>
                <p>{t.checkout.summaryDelivery} ({getLocalizedDistrictName(currentDistrict, lang).split('(')[0].trim()}): <span className="tabular-nums font-medium text-stone-800">{deliveryCost === 0 ? t.checkout.freeDelivery : `${deliveryCost} ${lang === 'en' ? 'KGS' : 'с.'}`}</span></p>
              </div>
              <p className="text-xl font-serif font-bold text-stone-900 mt-1 tabular-nums">
                {t.checkout.toPay}: {grandTotal.toLocaleString()} <span className="text-xs font-sans font-normal text-stone-600">{lang === 'en' ? 'KGS' : 'сом'}</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#2C3E2D] text-white font-medium text-sm hover:bg-[#1E2B1F] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>{t.checkout.btnProceedPayment}</span>
              <ArrowRight className="w-4 h-4 text-[#A3B899]" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
