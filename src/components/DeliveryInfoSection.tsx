import React from 'react';
import { MapPin, Clock, Calendar, HeartHandshake, Sparkles } from 'lucide-react';
import { BISHKEK_DISTRICTS, getLocalizedDistrictName, getLocalizedDistrictTime } from '../data/catalog';
import { BishkekInteractiveMap } from './BishkekInteractiveMap';
import { useLanguage } from '../i18n/LanguageContext';

export const DeliveryInfoSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="delivery-info" className="py-16 bg-[#F4EFEA] border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#2C3E2D] font-medium">
            <span>{t.deliveryInfo.kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
            {t.deliveryInfo.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            {t.deliveryInfo.subtitle}
          </p>
        </div>

        {/* 3 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF3EC] text-[#2C3E2D] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-stone-900">
              {t.deliveryInfo.pillar1Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.deliveryInfo.pillar1Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDF1EB] text-[#C47768] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-stone-900">
              {t.deliveryInfo.pillar2Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.deliveryInfo.pillar2Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF3EC] text-[#2C3E2D] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-stone-900">
              {t.deliveryInfo.pillar3Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.deliveryInfo.pillar3Desc}
            </p>
          </div>
        </div>

        {/* --- MAP WITH ADDRESS AND PIN DROPLET (MANDATORY REQUIREMENT) --- */}
        <div id="map-section" className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C3E2D] font-medium">
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse" />
                <span>{t.mapSection.kicker}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                {t.mapSection.title}
              </h3>
            </div>
            <p className="text-xs text-stone-500 max-w-sm">
              {t.mapSection.subtitle}
            </p>
          </div>

          <BishkekInteractiveMap />
        </div>

        {/* Districts Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs">
          <h3 className="font-serif text-xl font-semibold text-stone-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#2C3E2D]" />
            <span>{t.deliveryInfo.tariffsTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BISHKEK_DISTRICTS.map((d) => (
              <div
                key={d.id}
                className="p-4 rounded-xl border border-stone-200/80 bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">{getLocalizedDistrictName(d, lang)}</h4>
                  <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {t.deliveryInfo.deliveryTimeLabel}: {getLocalizedDistrictTime(d, lang)}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-200/70 flex justify-between items-center text-xs">
                  <span className="text-stone-500">{t.deliveryInfo.costLabel}:</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    {d.cost === 0 ? (
                      <span className="text-emerald-700 font-bold">{lang === 'ky' ? 'Акысыз*' : lang === 'en' ? 'Free*' : 'Бесплатно*'}</span>
                    ) : (
                      `${d.cost} ${lang === 'en' ? 'KGS' : 'сом'}`
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-stone-400 mt-4 text-center">
            {t.deliveryInfo.freeCenterNote}
          </p>
        </div>

      </div>
    </section>
  );
};

