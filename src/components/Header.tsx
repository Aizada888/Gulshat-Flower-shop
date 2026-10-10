import React from 'react';
import { ShoppingBag, Search, Clock, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  cartCount: number;
  onOpenCart: () => void;
  onOpenTracker: () => void;
  onOpenCare: () => void;
  onOpenChat: () => void;
  onSelectCategory: (cat: string) => void;
  activeCategory: string;
}

export const Header: React.FC<Props> = ({
  cartCount,
  onOpenCart,
  onOpenTracker,
  onOpenCare,
  onOpenChat,
  onSelectCategory,
  activeCategory,
}) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80">
      {/* Top micro announcement bar */}
      <div className="bg-[#2C3E2D] text-[#EBE3D5] text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-light">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A3B899]" />
              {t.announcement.address}
            </span>
            <span className="hidden sm:inline text-stone-400">·</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A3B899]" />
              {t.announcement.deliveryTime}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            {/* Multilingual Switcher in top bar */}
            <div className="bg-white/10 p-0.5 rounded-full flex items-center text-[11px]">
              <button
                type="button"
                onClick={() => setLang('ru')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'ru'
                    ? 'bg-white text-stone-900 font-bold shadow-2xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang('ky')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'ky'
                    ? 'bg-white text-stone-900 font-bold shadow-2xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                KG
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-white text-stone-900 font-bold shadow-2xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={onOpenTracker}
              className="text-[#E2D6CB] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {t.announcement.trackOrder}
            </button>

            <a
              href="tel:+996555123456"
              className="hidden md:flex items-center gap-1.5 text-stone-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#A3B899]" />
              +996 (555) 12-34-56
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: 3-Zone Contract */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-2xl sm:text-3xl tracking-wider text-stone-900 font-semibold uppercase hover:text-[#2C3E2D] transition-colors"
        >
          Gülshat Atelier
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-stone-700">
          <button
            onClick={() => {
              onSelectCategory('all');
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors hover:text-stone-950 ${activeCategory === 'all' ? 'text-[#2C3E2D] font-semibold border-b-2 border-[#2C3E2D] pb-0.5' : ''}`}
          >
            {t.nav.catalog}
          </button>
          <button
            onClick={() => {
              onSelectCategory('peonies');
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors hover:text-stone-950 ${activeCategory === 'peonies' ? 'text-[#2C3E2D] font-semibold border-b-2 border-[#2C3E2D] pb-0.5' : ''}`}
          >
            {t.nav.peonies}
          </button>
          <button
            onClick={() => {
              onSelectCategory('roses');
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors hover:text-stone-950 ${activeCategory === 'roses' ? 'text-[#2C3E2D] font-semibold border-b-2 border-[#2C3E2D] pb-0.5' : ''}`}
          >
            {t.nav.roses}
          </button>
          <button
            onClick={() => {
              onSelectCategory('boxes');
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors hover:text-stone-950 ${activeCategory === 'boxes' ? 'text-[#2C3E2D] font-semibold border-b-2 border-[#2C3E2D] pb-0.5' : ''}`}
          >
            {t.nav.boxes}
          </button>
          <button
            onClick={() => {
              document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transition-colors hover:text-stone-950 flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-red-600 fill-red-600 inline-block" />
            <span>{t.nav.mapAddress}</span>
          </button>
          <button
            onClick={() => {
              document.getElementById('delivery-info')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transition-colors hover:text-stone-950"
          >
            {t.nav.delivery}
          </button>
          <button
            onClick={onOpenCare}
            className="transition-colors hover:text-stone-950"
          >
            {t.nav.care}
          </button>
          <button
            onClick={onOpenChat}
            className="transition-colors hover:text-stone-950 flex items-center gap-1.5 text-[#2C3E2D] font-medium"
          >
            <span>{t.nav.chatbot}</span>
            <span className="text-[10px] bg-[#EBF3EC] text-emerald-800 px-1.5 py-0.5 rounded font-mono uppercase">
              {lang}
            </span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              document.getElementById('catalog-search')?.focus();
            }}
            className="p-2 text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-200/50"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium bg-[#2C3E2D] text-white rounded-full hover:bg-[#202E21] active:scale-95 transition-all shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-[#A3B899]" />
            <span className="hidden sm:inline">{t.nav.cart}</span>
            {cartCount > 0 ? (
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E57A68] text-white text-xs font-semibold tabular-nums">
                {cartCount}
              </span>
            ) : (
              <span className="text-xs text-stone-300 tabular-nums">0</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
