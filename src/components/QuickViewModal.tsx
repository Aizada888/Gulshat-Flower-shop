import React, { useState } from 'react';
import { X, ShoppingBag, Check, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { FlowerProduct, FlowerSizeVariant } from '../types/flower';
import { BotanicalIllustration } from './BotanicalIllustration';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedProduct } from '../data/catalog';

interface Props {
  product: FlowerProduct | null;
  onClose: () => void;
  onAddToCart: (product: FlowerProduct, sizeVariant: FlowerSizeVariant) => void;
}

export const QuickViewModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  const { lang, t } = useLanguage();
  if (!product) return null;

  const localized = getLocalizedProduct(product, lang);

  const [selectedSize, setSelectedSize] = useState<FlowerSizeVariant>(
    localized.variants[1] || localized.variants[0]
  );
  const [activePhoto, setActivePhoto] = useState<string>(localized.imageUrl || '');
  const [added, setAdded] = useState(false);

  // Sync active photo when product changes
  React.useEffect(() => {
    setActivePhoto(localized.imageUrl || '');
  }, [localized.imageUrl]);

  const handleAdd = () => {
    onAddToCart(localized, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-600 hover:text-stone-950 flex items-center justify-center transition-all shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Artwork & Photo Showcase */}
          <div
            className={`relative min-h-[340px] md:min-h-full bg-gradient-to-br ${localized.gradientBg} flex flex-col items-center justify-between overflow-hidden`}
          >
            {/* Main Photo or Botanical Illustration */}
            <div className="relative w-full flex-1 flex items-center justify-center min-h-[260px] overflow-hidden">
              {/* Fallback illustration always rendered underneath */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <BotanicalIllustration
                  flowerType={localized.flowerType}
                  accentColor={localized.accentColor}
                  className="w-full h-full max-h-[320px]"
                />
              </div>

              {activePhoto && (
                <img
                  src={activePhoto}
                  alt={localized.title}
                  referrerPolicy="no-referrer"
                  className="relative z-1 w-full h-full object-cover max-h-[380px] transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.opacity = '0';
                  }}
                />
              )}

              {localized.badge && (
                <span className="absolute top-4 left-4 z-10 text-xs font-medium bg-white/95 backdrop-blur-sm text-stone-800 px-3 py-1 rounded-full shadow-xs">
                  {localized.badge}
                </span>
              )}
            </div>

            {/* Photo Gallery Thumbnails (if multiple images available) */}
            {localized.gallery && localized.gallery.length > 1 && (
              <div className="w-full p-3 bg-white/70 backdrop-blur-md flex items-center justify-center gap-2 border-t border-stone-200/60 z-10">
                {localized.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActivePhoto(imgUrl)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      activePhoto === imgUrl
                        ? 'border-[#2C3E2D] scale-105 shadow-xs'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`${localized.title} - ${i + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Detailed Purchase Module */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5">
            
            <div className="space-y-3">
              {/* Metadata */}
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span>{selectedSize.stemsCount}</span>
                <span aria-hidden="true">·</span>
                <span>{t.quickView.stemsDiameter} {selectedSize.diameter}</span>
                <span aria-hidden="true">·</span>
                <span>{localized.durabilityDays}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-stone-900">
                {localized.title}
              </h2>

              <p className="text-xs text-stone-600 leading-relaxed">
                {localized.description}
              </p>

              {/* Composition */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-stone-700 mb-1.5">{t.quickView.compositionLabel}</p>
                <div className="flex flex-wrap gap-1.5">
                  {localized.composition.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-2">
                  <span>{t.quickView.sizeLabel}</span>
                  <span className="text-stone-500 font-normal">{selectedSize.stemsCount}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {localized.variants.map((v) => {
                    const isSelected = selectedSize.size === v.size;
                    return (
                      <button
                        key={v.size}
                        type="button"
                        onClick={() => setSelectedSize(v)}
                        className={`p-2.5 rounded-xl text-left border transition-all ${
                          isSelected
                            ? 'border-[#2C3E2D] bg-[#F7F9F7] text-stone-900 ring-1 ring-[#2C3E2D]'
                            : 'border-stone-200 hover:border-stone-300 text-stone-600'
                        }`}
                      >
                        <div className="flex justify-between items-center text-xs font-medium">
                          <span>{v.label}</span>
                          <span className="font-semibold text-stone-900 tabular-nums">
                            {v.price.toLocaleString('ru-RU')} {t.productCard.som}
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-400 mt-0.5">{v.diameter}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/80 text-[11px] text-stone-600 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-800 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#C47768]" />
                {t.quickView.includedFree}
              </div>
              <p>{t.quickView.freeCard}</p>
              <p>{t.quickView.aquaBox}</p>
              <p>{t.quickView.chrysal}</p>
            </div>

            {/* Price & Action Button */}
            <div className="pt-2 border-t border-stone-200 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-stone-400">{t.quickView.totalCost}</p>
                <p className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
                  {selectedSize.price.toLocaleString('ru-RU')} <span className="text-sm font-sans font-normal text-stone-600">{t.productCard.som}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3 px-6 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  added
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#2C3E2D] text-white hover:bg-[#1E2B1F]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t.quickView.btnAdded}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#A3B899]" />
                    <span>{t.quickView.btnAddToCart}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
