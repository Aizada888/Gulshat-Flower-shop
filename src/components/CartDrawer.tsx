import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Gift, Check } from 'lucide-react';
import { CartItem, AddonItem } from '../types/flower';
import { COMPLIMENTARY_ADDONS, PAID_ADDONS, getLocalizedProduct, getLocalizedAddon } from '../data/catalog';
import { BotanicalIllustration } from './BotanicalIllustration';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  addons: AddonItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onToggleAddon: (addon: AddonItem) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  items,
  addons,
  onUpdateQuantity,
  onRemoveItem,
  onToggleAddon,
  onProceedToCheckout,
}) => {
  const { lang, t } = useLanguage();
  if (!isOpen) return null;

  const itemsSubtotal = items.reduce(
    (sum, item) => sum + item.selectedSize.price * item.quantity,
    0
  );

  const addonsSubtotal = addons.reduce((sum, ad) => sum + ad.price, 0);
  const total = itemsSubtotal + addonsSubtotal;

  const freeDeliveryThreshold = 3000;
  const progressToFree = Math.min(100, (total / freeDeliveryThreshold) * 100);
  const amountToFree = Math.max(0, freeDeliveryThreshold - total);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/50 backdrop-blur-xs flex justify-end">
      <div
        className="relative w-full max-w-md bg-[#FAF8F5] h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-250 border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2C3E2D]" />
            <h2 className="font-serif text-xl font-semibold text-stone-900">{t.cart.title}</h2>
            <span className="text-xs text-stone-400 tabular-nums">({items.length})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Meter */}
        <div className="px-5 py-3 bg-[#F4EFEA] border-b border-stone-200/80 text-xs">
          {amountToFree === 0 ? (
            <div className="text-emerald-800 font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{t.cart.freeMeterUnlocked}</span>
            </div>
          ) : (
            <div className="space-y-1.5">
              <p className="text-stone-600">
                {t.cart.freeMeterNeeded.replace('{amount}', amountToFree.toLocaleString('ru-RU'))}
              </p>
              <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2C3E2D] rounded-full transition-all duration-300"
                  style={{ width: `${progressToFree}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-serif text-lg text-stone-800">{t.cart.emptyTitle}</p>
              <p className="text-xs text-stone-500 max-w-xs">
                {t.cart.emptySubtitle}
              </p>
              <button
                onClick={onClose}
                className="mt-2 text-xs font-medium text-[#2C3E2D] underline underline-offset-4"
              >
                {t.cart.backToCatalog}
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => {
                const localizedProd = getLocalizedProduct(item.product, lang);
                return (
                  <div
                    key={item.cartItemId}
                    className="bg-white p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs flex gap-3.5 items-center"
                  >
                    {/* Miniature Floral Photo / Artwork */}
                    <div
                      className={`w-18 h-18 rounded-xl bg-gradient-to-br ${localizedProd.gradientBg} shrink-0 overflow-hidden flex items-center justify-center border border-stone-200/50`}
                    >
                      {localizedProd.imageUrl ? (
                        <img
                          src={localizedProd.imageUrl}
                          alt={localizedProd.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <BotanicalIllustration
                          flowerType={localizedProd.flowerType}
                          accentColor={localizedProd.accentColor}
                          className="w-full h-full"
                        />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-stone-900 truncate">
                        {localizedProd.title}
                      </h4>
                      <p className="text-[11px] text-stone-500">
                        {item.selectedSize.label} · {item.selectedSize.stemsCount}
                      </p>
                      <p className="text-xs font-semibold text-stone-900 mt-1 tabular-nums">
                        {(item.selectedSize.price * item.quantity).toLocaleString('ru-RU')} {t.productCard.som}
                      </p>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-1.5 bg-stone-100 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                        className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-950 transition-colors"
                      >
                        {item.quantity === 1 ? <Trash2 className="w-3 h-3 text-rose-600" /> : <Minus className="w-3 h-3" />}
                      </button>
                      <span className="text-xs font-medium text-stone-900 w-4 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                        className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-950 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Addons Section */}
              <div className="pt-4 border-t border-stone-200/80 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800">
                  <Gift className="w-4 h-4 text-[#C47768]" />
                  <span>{t.cart.addonsTitle}</span>
                </div>

                <div className="space-y-2">
                  {/* Complimentary ones */}
                  {COMPLIMENTARY_ADDONS.map((ad) => {
                    const localizedAd = getLocalizedAddon(ad, lang);
                    const isSelected = addons.some((a) => a.id === ad.id);
                    return (
                      <div
                        key={ad.id}
                        onClick={() => onToggleAddon(ad)}
                        className={`p-2.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-emerald-50/60 border-emerald-300 text-emerald-900'
                            : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        <div className="pr-2">
                          <p className="font-medium text-[11px] leading-tight">{localizedAd.title}</p>
                          <span className="text-[10px] text-emerald-700 font-medium">{t.cart.free}</span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border ${
                            isSelected ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    );
                  })}

                  {/* Paid Addons */}
                  {PAID_ADDONS.map((ad) => {
                    const localizedAd = getLocalizedAddon(ad, lang);
                    const isSelected = addons.some((a) => a.id === ad.id);
                    return (
                      <div
                        key={ad.id}
                        onClick={() => onToggleAddon(ad)}
                        className={`p-2.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#F9F4F0] border-[#C47768] text-stone-900'
                            : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        <div className="pr-2">
                          <p className="font-medium text-[11px] leading-tight">{localizedAd.title}</p>
                          <span className="text-[11px] font-semibold text-stone-900 tabular-nums">
                            +{ad.price} {t.productCard.som}
                          </span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border ${
                            isSelected ? 'bg-[#2C3E2D] border-[#2C3E2D] text-white' : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Bar */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-white space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-500">
                <span>{t.cart.subtotalFlowers} ({items.reduce((s, i) => s + i.quantity, 0)}):</span>
                <span className="tabular-nums">{itemsSubtotal.toLocaleString('ru-RU')} {t.productCard.som}</span>
              </div>
              {addonsSubtotal > 0 && (
                <div className="flex justify-between text-stone-500">
                  <span>{t.cart.subtotalAddons}</span>
                  <span className="tabular-nums">+{addonsSubtotal.toLocaleString('ru-RU')} {t.productCard.som}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-semibold text-stone-900 pt-1 border-t border-stone-100">
                <span>{t.cart.total}</span>
                <span className="font-serif text-lg tabular-nums">
                  {total.toLocaleString('ru-RU')} {t.productCard.som}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#2C3E2D] text-white font-medium text-sm hover:bg-[#1E2B1F] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{t.cart.btnCheckout}</span>
              <ArrowRight className="w-4 h-4 text-[#A3B899]" />
            </button>

            <p className="text-[11px] text-center text-stone-400">
              {t.cart.checkoutHint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
