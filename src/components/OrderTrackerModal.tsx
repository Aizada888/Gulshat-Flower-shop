import React, { useState } from 'react';
import { X, Search, CheckCircle2, Truck, Flower2, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { OrderRecord } from '../types/flower';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  orders: OrderRecord[];
  initialOrderId?: string;
}

export const OrderTrackerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  orders,
  initialOrderId = '',
}) => {
  const { lang, t } = useLanguage();
  if (!isOpen) return null;

  const [searchId, setSearchId] = useState<string>(initialOrderId || (orders[0]?.orderId || ''));

  // Find the selected or matched order
  const matchedOrder = orders.find(
    (o) => o.orderId.toLowerCase() === searchId.trim().toLowerCase()
  ) || orders[0];

  const steps = [
    {
      id: 'confirmed',
      title: t.tracker.step1Title,
      desc: t.tracker.step1Desc,
      icon: CheckCircle2,
    },
    {
      id: 'assembling',
      title: t.tracker.step2Title,
      desc: t.tracker.step2Desc,
      icon: Flower2,
    },
    {
      id: 'photo_ready',
      title: t.tracker.step3Title,
      desc: t.tracker.step3Desc,
      icon: Sparkles,
    },
    {
      id: 'in_transit',
      title: t.tracker.step4Title,
      desc: t.tracker.step4Desc,
      icon: Truck,
    },
    {
      id: 'delivered',
      title: t.tracker.step5Title,
      desc: t.tracker.step5Desc,
      icon: CheckCircle2,
    },
  ];

  // Map order status to active step index
  const statusToStepIndex = (status?: string) => {
    switch (status) {
      case 'confirmed': return 1;
      case 'assembling': return 2;
      case 'photo_ready': return 3;
      case 'in_transit': return 4;
      case 'delivered': return 5;
      default: return 2;
    }
  };

  const currentStepIndex = matchedOrder ? statusToStepIndex(matchedOrder.status) : 2;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider font-medium">
              <span>{t.tracker.titleKicker}</span>
              <span>·</span>
              <span>Бишкек</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mt-0.5">
              {t.tracker.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors border border-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Search bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder={t.tracker.searchPlaceholder}
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20 focus:bg-white"
              />
            </div>
          </div>

          {matchedOrder ? (
            <>
              {/* Order quick overview */}
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
                <div>
                  <span className="text-stone-400">{t.tracker.orderLabel}:</span>
                  <p className="font-mono text-base font-bold text-stone-900">{matchedOrder.orderId}</p>
                  <p className="text-stone-500 mt-0.5">
                    {t.orderSuccess.recipient}: {matchedOrder.delivery.recipientName} ({matchedOrder.delivery.district.split('(')[0]})
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-stone-400">{t.tracker.deliveryDateLabel}:</span>
                  <p className="font-semibold text-stone-900">
                    {matchedOrder.delivery.deliveryDate}
                  </p>
                  <p className="text-stone-500">{matchedOrder.delivery.deliveryTimeSlot}</p>
                </div>
              </div>

              {/* Progress timeline */}
              <div className="space-y-4 py-2">
                <p className="text-xs font-semibold text-stone-800">{t.tracker.stagesTitle}</p>
                <div className="space-y-4">
                  {steps.map((st, idx) => {
                    const isDone = idx < currentStepIndex;
                    const isCurrent = idx === currentStepIndex - 1;
                    const Icon = st.icon;

                    return (
                      <div key={st.id} className="flex items-start gap-3.5 relative">
                        {/* Connecting line */}
                        {idx !== steps.length - 1 && (
                          <div
                            className={`absolute left-4 top-8 bottom-0 w-0.5 -mb-2 ${
                              idx < currentStepIndex - 1 ? 'bg-[#2C3E2D]' : 'bg-stone-200'
                            }`}
                          />
                        )}

                        {/* Step Icon circle */}
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${
                            isDone
                              ? 'bg-[#2C3E2D] text-white shadow-xs'
                              : isCurrent
                              ? 'bg-[#EBF3EC] border-2 border-[#2C3E2D] text-[#2C3E2D]'
                              : 'bg-stone-100 text-stone-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 pt-0.5">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`text-xs font-semibold ${
                                isDone || isCurrent ? 'text-stone-900' : 'text-stone-400'
                              }`}
                            >
                              {st.title}
                            </h4>
                            {isCurrent && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full">
                                {t.tracker.currentStatus}
                              </span>
                            )}
                          </div>
                          <p
                            className={`text-[11px] mt-0.5 ${
                              isDone || isCurrent ? 'text-stone-500' : 'text-stone-400'
                            }`}
                          >
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Courier support contacts */}
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-semibold text-stone-900">{t.tracker.urgentSupport}</p>
                  <p className="text-stone-500 text-[11px]">
                    {t.tracker.urgentSupportDesc}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/996555123456"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-emerald-700 text-white rounded-full font-medium flex items-center gap-1.5 hover:bg-emerald-800 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+996555123456"
                    className="px-3.5 py-2 bg-white border border-stone-300 text-stone-800 rounded-full font-medium flex items-center gap-1.5 hover:bg-stone-50 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{lang === 'ky' ? 'Чалуу' : lang === 'en' ? 'Call' : 'Позвонить'}</span>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 space-y-2">
              <p className="text-sm font-semibold text-stone-800">{t.tracker.notFoundTitle}</p>
              <p className="text-xs text-stone-500">
                {t.tracker.notFoundDesc}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
