import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  onOpenCare: () => void;
  onOpenTracker: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenCare, onOpenTracker }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#243325] text-stone-300 pt-14 pb-10 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <span className="font-serif text-2xl text-white font-semibold tracking-wider uppercase block">
              Gülshat Atelier
            </span>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              {t.footer.aboutText}
            </p>
            <div className="flex items-center gap-3 pt-1 text-stone-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/996555123456"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bishkek Showroom */}
          <div className="space-y-2 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              {t.footer.showroomTitle}
            </h4>
            <div className="space-y-2 text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A3B899] shrink-0 mt-0.5" />
                <span>{t.footer.showroomAddress}</span>
              </p>
              <p>
                <a
                  href="#map-section"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A3B899] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block" />
                  <span>{t.footer.showOnMap}</span>
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#A3B899] shrink-0 mt-0.5" />
                <span>{t.footer.showroomHours}</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#A3B899] shrink-0 mt-0.5" />
                <span>+996 (555) 12-34-56</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              {t.footer.serviceTitle}
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={onOpenTracker}
                  className="hover:text-white transition-colors"
                >
                  {t.footer.trackStatus}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCare}
                  className="hover:text-white transition-colors"
                >
                  {t.footer.careGuide}
                </button>
              </li>
              <li>
                <a
                  href="#delivery-info"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.deliveryZones}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/996555123456"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.corporateOrders}
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Security */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              {t.footer.paymentTitle}
            </h4>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              {t.footer.paymentDesc}
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-stone-300">
              <span className="bg-stone-800/80 px-2 py-1 rounded border border-stone-700">MBank QR</span>
              <span className="bg-stone-800/80 px-2 py-1 rounded border border-stone-700">VISA</span>
              <span className="bg-stone-800/80 px-2 py-1 rounded border border-stone-700">MasterCard</span>
              <span className="bg-stone-800/80 px-2 py-1 rounded border border-stone-700">Элкарт</span>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>{t.footer.tagline}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
