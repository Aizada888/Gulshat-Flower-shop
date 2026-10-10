import React from 'react';
import { Sparkles, ShieldCheck, Camera, Clock, ArrowDown } from 'lucide-react';
import { BotanicalIllustration } from './BotanicalIllustration';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  onExploreCatalog: () => void;
  onSelectOccasion: (occ: string) => void;
}

export const Hero: React.FC<Props> = ({ onExploreCatalog, onSelectOccasion }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EE] via-[#FAF8F5] to-[#FAF8F5] pt-8 pb-16 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet text kicker with typographic separator (NO pills) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C3E2D] font-medium">
              <span>{t.hero.kicker}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1] font-semibold text-balance">
              {t.hero.title}
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-7 py-3.5 bg-[#2C3E2D] text-white text-sm font-medium rounded-full hover:bg-[#1E2C1F] active:scale-98 transition-all shadow-md shadow-stone-800/10 flex items-center gap-2"
              >
                <span>{t.hero.btnCatalog}</span>
                <ArrowDown className="w-4 h-4 text-[#A3B899]" />
              </button>

              <button
                onClick={() => {
                  onSelectOccasion('birthday');
                  onExploreCatalog();
                }}
                className="px-6 py-3.5 bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-sm font-medium rounded-full border border-stone-300/60 transition-colors"
              >
                {t.hero.btnOccasion}
              </button>
            </div>

            {/* High-trust badges / Guarantees with zero-pill discipline */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2C3E2D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">{t.hero.badgeDelivery}</p>
                  <p className="text-stone-500 text-[11px]">{t.hero.badgeDeliverySub}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Camera className="w-4 h-4 text-[#2C3E2D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">{t.hero.badgePhoto}</p>
                  <p className="text-stone-500 text-[11px]">{t.hero.badgePhotoSub}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2C3E2D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">{t.hero.badgeChrysal}</p>
                  <p className="text-stone-500 text-[11px]">{t.hero.badgeChrysalSub}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Botanical Visual Card */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FDF1EB] via-[#F8E2D7] to-[#E9CEBF] p-6 shadow-xl border border-stone-300/40 flex flex-col justify-between">
                
                {/* Visual Top tag */}
                <div className="flex items-center justify-between z-10">
                  <div className="bg-white/85 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-serif italic text-stone-800 tracking-wide">
                    {t.hero.atelierCollection}
                  </div>
                  <div className="bg-[#2C3E2D] text-[#E5EAE3] px-3 py-1 rounded-full text-xs font-medium">
                    {t.hero.onlinePayment}
                  </div>
                </div>

                {/* Real High-End Bouquet Photography with Botanical depth */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85"
                    alt="Signature Bouquet"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Bottom Card Spotlight Info */}
                <div className="relative z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-stone-900">
                      {t.filters.peonies}
                    </h3>
                    <p className="text-xs text-stone-500">Sarah Bernhardt · Cappuccino</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-stone-900 tabular-nums">4 900 {t.productCard.som}</p>
                    <span className="text-[11px] text-emerald-700 font-medium">{t.hero.inStockToday}</span>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Corner Note */}
              <div className="absolute -bottom-4 -left-4 bg-[#FAF8F5] p-3.5 rounded-2xl shadow-lg border border-stone-200/90 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-8 h-8 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#2C3E2D] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-medium text-stone-900">{t.hero.exactDateChoice}</p>
                  <p className="text-stone-500">{t.hero.exactDateSub}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
