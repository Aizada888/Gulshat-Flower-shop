import React, { useState } from 'react';
import { CheckCircle2, Calendar, Clock, MapPin, Printer, MessageCircle, ArrowRight, Heart, Copy } from 'lucide-react';
import { OrderRecord } from '../types/flower';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  order: OrderRecord | null;
  onClose: () => void;
  onOpenTracker: (orderId: string) => void;
}

export const OrderSuccessModal: React.FC<Props> = ({ order, onClose, onOpenTracker }) => {
  const { lang, t } = useLanguage();
  if (!order) return null;

  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(order.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Banner */}
        <div className="bg-[#2C3E2D] text-white p-6 sm:p-8 text-center space-y-3 relative overflow-hidden">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto text-[#A3B899] ring-8 ring-white/5">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold">
              {t.orderSuccess.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-md mx-auto font-light">
              {t.orderSuccess.subtitle}
            </p>
          </div>
        </div>

        {/* Receipt Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* Order ID & Status bar */}
          <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-stone-400">{t.orderSuccess.orderIdLabel}:</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-base font-bold text-stone-900">{order.orderId}</span>
                <button
                  onClick={handleCopyId}
                  className="text-[11px] text-[#2C3E2D] hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? (lang === 'ky' ? 'Көчүрүлдү' : lang === 'en' ? 'Copied' : 'Скопирован') : (lang === 'ky' ? 'Көчүрүү' : lang === 'en' ? 'Copy' : 'Копировать')}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                {order.paymentStatus === 'paid' ? t.orderSuccess.paidOnline : t.orderSuccess.paidCod}
              </span>
            </div>
          </div>

          {/* Delivery Coordinates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                <Calendar className="w-4 h-4 text-[#2C3E2D]" />
                <span>{t.orderSuccess.dateTimeLabel}:</span>
              </div>
              <p className="text-stone-700 font-medium">
                {new Date(order.delivery.deliveryDate).toLocaleDateString(lang === 'en' ? 'en-US' : 'ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  weekday: 'short',
                })}
              </p>
              <p className="text-stone-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {order.delivery.deliveryTimeSlot}
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                <MapPin className="w-4 h-4 text-[#2C3E2D]" />
                <span>{t.orderSuccess.whereToDeliver}:</span>
              </div>
              <p className="text-stone-700 font-medium truncate">
                {order.delivery.address}
              </p>
              <p className="text-stone-500">
                {t.orderSuccess.recipient}: {order.delivery.recipientName} ({order.delivery.recipientPhone})
              </p>
            </div>
          </div>

          {/* Card Note Preview if present */}
          {order.delivery.cardText && (
            <div className="bg-[#FFFDFB] p-4 rounded-xl border border-[#E8DFD8] text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-stone-500 font-medium">
                <Heart className="w-3.5 h-3.5 text-[#C47768]" />
                <span>{t.orderSuccess.cardLabel}:</span>
              </div>
              <p className="font-serif italic text-stone-800 text-sm">
                «{order.delivery.cardText}»
              </p>
            </div>
          )}

          {/* Itemized Receipt Table */}
          <div className="border border-stone-200 rounded-2xl overflow-hidden">
            <div className="bg-stone-100/60 px-4 py-2.5 text-xs font-semibold text-stone-700 flex justify-between">
              <span>{t.orderSuccess.itemsComposition}</span>
              <span>{t.orderSuccess.total}</span>
            </div>
            <div className="divide-y divide-stone-100 p-2">
              {order.items.map((it, idx) => (
                <div key={idx} className="px-3 py-2 flex justify-between text-xs items-center">
                  <div>
                    <p className="font-semibold text-stone-800">{it.title} × {it.quantity}</p>
                    <span className="text-[11px] text-stone-400">{it.sizeLabel}</span>
                  </div>
                  <span className="font-medium text-stone-900 tabular-nums">
                    {(it.price * it.quantity).toLocaleString()} {lang === 'en' ? 'KGS' : 'сом'}
                  </span>
                </div>
              ))}

              {order.addons.map((ad, idx) => (
                <div key={idx} className="px-3 py-2 flex justify-between text-xs items-center">
                  <span className="text-stone-600">{ad.title}</span>
                  <span className="font-medium text-stone-900 tabular-nums">
                    {ad.price === 0 ? t.orderSuccess.free : `+${ad.price} ${lang === 'en' ? 'KGS' : 'сом'}`}
                  </span>
                </div>
              ))}

              <div className="px-3 py-2 flex justify-between text-xs items-center">
                <span className="text-stone-600">{t.orderSuccess.deliveryCostLabel}</span>
                <span className="font-medium text-stone-900 tabular-nums">
                  {order.deliveryCost === 0 ? t.orderSuccess.free : `${order.deliveryCost} ${lang === 'en' ? 'KGS' : 'сом'}`}
                </span>
              </div>
            </div>

            <div className="bg-[#FAF8F5] px-4 py-3 border-t border-stone-200 flex justify-between items-center text-sm font-bold text-stone-900">
              <span>{t.orderSuccess.total}:</span>
              <span className="font-serif text-lg tabular-nums">
                {order.totalAmount.toLocaleString()} {lang === 'en' ? 'KGS' : 'сом'}
              </span>
            </div>
          </div>

          {/* What happens next? */}
          <div className="bg-[#EBF3EC] p-4 rounded-2xl border border-[#CCE2CF] text-xs text-[#204024] space-y-1.5">
            <p className="font-semibold text-sm">{t.orderSuccess.whatNextTitle}</p>
            <p>1. {t.orderSuccess.whatNext1}</p>
            <p>2. {order.delivery.requestPhotoBeforeDelivery ? t.orderSuccess.whatNext2Photo : t.orderSuccess.whatNext2Aqua}</p>
            <p>3. {t.orderSuccess.whatNext3.replace('{time}', order.delivery.deliveryTimeSlot)}</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => onOpenTracker(order.orderId)}
              className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#2C3E2D] text-white text-xs font-semibold hover:bg-[#1E2B1F] flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>{t.orderSuccess.btnTrack}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/996555123456"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-full border border-stone-300 text-stone-800 text-xs font-medium hover:bg-stone-50 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>{t.orderSuccess.btnWhatsApp}</span>
            </a>

            <button
              onClick={handlePrint}
              className="w-full sm:w-auto py-3 px-4 rounded-full border border-stone-200 text-stone-600 text-xs hover:bg-stone-50 flex items-center justify-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{t.orderSuccess.btnPrint}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
