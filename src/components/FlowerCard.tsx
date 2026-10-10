import React, { useState } from 'react';
import { Eye, ShoppingBag, Check } from 'lucide-react';
import { FlowerProduct, FlowerSizeVariant } from '../types/flower';
import { BotanicalIllustration } from './BotanicalIllustration';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedProduct } from '../data/catalog';

interface Props {
  product: FlowerProduct;
  onQuickView: (product: FlowerProduct) => void;
  onAddToCart: (product: FlowerProduct, sizeVariant: FlowerSizeVariant) => void;
}

export const FlowerCard: React.FC<Props> = ({ product, onQuickView, onAddToCart }) => {
  const { lang, t } = useLanguage();
  const localized = getLocalizedProduct(product, lang);

  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(1); // Default to 'M' (standard)
  const [isAddedFeedback, setIsAddedFeedback] = useState<boolean>(false);

  const activeVariant = localized.variants[selectedSizeIndex] || localized.variants[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(localized, activeVariant);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 1600);
  };

  return (
    <article
      onClick={() => onQuickView(localized)}
      className="group flex flex-col bg-white rounded-2xl border border-stone-200/90 overflow-hidden hover:shadow-md hover:border-stone-300 transition-all duration-200 cursor-pointer"
    >
      {/* Visual Product Showcase Container (65-75% of visual lead) */}
      <div
        className={`relative aspect-[4/3] w-full bg-gradient-to-br ${localized.gradientBg} overflow-hidden flex items-center justify-center`}
      >
        {/* Subtle Badge (Max 1 subtle text label) */}
        {localized.badge && (
          <span className="absolute top-3 left-3 z-10 text-[11px] font-medium tracking-wide bg-white/90 backdrop-blur-sm text-stone-800 px-2.5 py-0.5 rounded shadow-xs">
            {localized.badge}
          </span>
        )}

        {/* Product Photograph (Real Flowers) with Botanical Illustration fallback */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Always rendered underneath as solid fallback */}
          <div className="absolute inset-0 flex items-center justify-center">
            <BotanicalIllustration
              flowerType={localized.flowerType}
              accentColor={localized.accentColor}
              className="w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {localized.imageUrl && (
            <img
              src={localized.imageUrl}
              alt={localized.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="relative z-1 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // If remote image fails to load, gracefully hide img layer so botanical illustration shows
                (e.target as HTMLElement).style.opacity = '0';
              }}
            />
          )}
        </div>

        {/* Quick View Hover Overlay Button */}
        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <span className="bg-white/95 text-stone-900 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5" />
            {t.productCard.quickView}
          </span>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        {/* Unboxed Metadata (NO pills) */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <span>{localized.stemsCount}</span>
            <span aria-hidden="true">·</span>
            <span>{localized.palette}</span>
            <span aria-hidden="true">·</span>
            <span>{localized.durabilityDays}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-semibold text-stone-900 group-hover:text-[#2C3E2D] transition-colors leading-snug">
            {localized.title}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-1">
            {localized.subtitle}
          </p>
        </div>

        {/* Size Selection segmented mini buttons */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-stone-200/70"
        >
          {localized.variants.map((v, idx) => (
            <button
              key={v.size}
              type="button"
              onClick={() => setSelectedSizeIndex(idx)}
              className={`flex-1 py-1 text-[11px] font-medium rounded transition-all whitespace-nowrap ${
                selectedSizeIndex === idx
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/80 font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {v.size}
            </button>
          ))}
        </div>

        {/* Price and Add CTA Row */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-semibold text-stone-900 tabular-nums">
              {activeVariant.price.toLocaleString('ru-RU')} <span className="text-xs font-normal text-stone-600">{t.productCard.som}</span>
            </span>
            {localized.oldPrice && selectedSizeIndex === 1 && (
              <span className="text-xs text-stone-400 line-through tabular-nums">
                {localized.oldPrice.toLocaleString('ru-RU')} {t.productCard.som}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95 ${
              isAddedFeedback
                ? 'bg-emerald-700 text-white'
                : 'bg-[#2C3E2D] text-white hover:bg-[#1E2B1F]'
            }`}
          >
            {isAddedFeedback ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t.productCard.added}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#A3B899]" />
                <span>{t.productCard.addToCart}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </article>
  );
};
