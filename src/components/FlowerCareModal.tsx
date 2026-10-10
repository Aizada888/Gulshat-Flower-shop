import React from 'react';
import { X, Droplets, Scissors, Sparkles, ThermometerSun } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FlowerCareModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider font-medium">
              <span>{t.careModal.kicker}</span>
              <span>·</span>
              <span>Gülshat Atelier</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mt-0.5">
              {t.careModal.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors border border-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-xs text-stone-600">
          
          <div className="flex items-start gap-3.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 text-xs">{t.careModal.step1Title}</h4>
              <p className="mt-0.5 leading-relaxed">
                {t.careModal.step1Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 text-xs">{t.careModal.step2Title}</h4>
              <p className="mt-0.5 leading-relaxed">
                {t.careModal.step2Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 text-xs">{t.careModal.step3Title}</h4>
              <p className="mt-0.5 leading-relaxed">
                {t.careModal.step3Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
              <ThermometerSun className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 text-xs">{t.careModal.step4Title}</h4>
              <p className="mt-0.5 leading-relaxed">
                {t.careModal.step4Desc}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#2C3E2D] text-white font-medium text-xs hover:bg-[#1E2B1F] transition-colors"
          >
            {t.careModal.btnGotIt}
          </button>

        </div>
      </div>
    </div>
  );
};
