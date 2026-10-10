import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Layers, ZoomIn, ZoomOut, Maximize2, Minimize2, Compass } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  className?: string;
  showCard?: boolean;
}

const BISHKEK_CENTER: [number, number] = [42.8687, 74.6074]; // Erkindik 35, Bishkek

export const BishkekInteractiveMap: React.FC<Props> = ({
  className = '',
  showCard = true,
}) => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showDeliveryZones, setShowDeliveryZones] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const zonesLayerGroupRef = useRef<L.LayerGroup | null>(null);

  const addressText = lang === 'ky'
    ? 'Бишкек ш., Эркиндик бул. 35 (Бөкөнбаев көчөсү)'
    : lang === 'en'
    ? 'Bishkek, 35 Erkindik Blvd (corner Bokonbaev)'
    : 'г. Бишкек, бул. Эркиндик 35 (угол ул. Боконбаева)';

  const coordinates = '42.8687, 74.6074';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Initialize and maintain the full Leaflet map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Clean up any existing map if re-mounting
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize full interactive Leaflet map
    const map = L.map(mapContainerRef.current, {
      center: BISHKEK_CENTER,
      zoom: 15,
      zoomControl: false, // We supply custom styled buttons
      scrollWheelZoom: true,
      attributionControl: false,
    });

    mapInstanceRef.current = map;

    // Add high-res OpenStreetMap cartography tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 11,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Create custom Red Droplet Pin Marker (Капелька) as requested
    const dropletIcon = L.divIcon({
      className: 'custom-droplet-pin-marker',
      html: `
        <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); pointer-events: auto; cursor: pointer;">
          <div style="background: rgba(28,25,23,0.95); color: #FFFFFF; padding: 4px 10px; border-radius: 10px; font-size: 11px; font-weight: 600; white-space: nowrap; margin-bottom: 5px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 14px rgba(0,0,0,0.35); display: flex; align-items: center; gap: 6px; backdrop-filter: blur(4px);">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: #EF4444; display: inline-block;"></span>
            <span>Gülshat Atelier · бул. Эркиндик 35</span>
          </div>
          <svg viewBox="0 0 32 42" style="width: 34px; height: 44px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.35)); transition: transform 0.2s;" fill="none">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 11.5 14.5 24.8 15.1 25.4.5.4 1.3.4 1.8 0C17.5 40.8 32 27.5 32 16 32 7.163 24.837 0 16 0z" fill="#DC2626"/>
            <path d="M16 2C8.268 2 2 8.268 2 16c0 1.2.14 2.37.4 3.5C4 11 9.5 5 16 5c2.5 0 4.8.8 6.7 2.2C20.8 3.6 18.5 2 16 2z" fill="#EF4444" opacity="0.6"/>
            <circle cx="16" cy="15" r="5.5" fill="#FFFFFF"/>
          </svg>
          <div style="width: 14px; height: 5px; border-radius: 50%; background: rgba(0,0,0,0.35); filter: blur(1.5px); margin-top: 1px;"></div>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    const marker = L.marker(BISHKEK_CENTER, { icon: dropletIcon }).addTo(map);
    markerRef.current = marker;

    marker.bindPopup(`
      <div style="font-family: inherit; padding: 4px 2px; font-size: 12px; color: #1c1917; min-width: 180px;">
        <div style="font-weight: 700; font-size: 13px; color: #2C3E2D; margin-bottom: 3px;">
          Gülshat Atelier 🌸
        </div>
        <p style="margin: 0; color: #57534e; font-size: 11px;">
          ${addressText}
        </p>
        <div style="margin-top: 6px; padding-top: 6px; border-top: 1px solid #e7e5e4; display: flex; items-center; justify-content: space-between; font-size: 11px;">
          <span style="color: #059669; font-weight: 600;">08:30 – 22:00</span>
          <span style="color: #78716c;">Күн сайын / Ежедневно</span>
        </div>
      </div>
    `);

    // Layer group for delivery zones
    const zonesGroup = L.layerGroup().addTo(map);
    zonesLayerGroupRef.current = zonesGroup;

    // Critical fix: invalidateSize prevents the "half-map" rendering bug
    const triggerInvalidate = () => {
      map.invalidateSize();
    };

    const timer1 = setTimeout(triggerInvalidate, 80);
    const timer2 = setTimeout(triggerInvalidate, 350);
    const timer3 = setTimeout(triggerInvalidate, 800);

    const resizeObserver = new ResizeObserver(() => {
      triggerInvalidate();
    });
    resizeObserver.observe(mapContainerRef.current);

    window.addEventListener('resize', triggerInvalidate);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      resizeObserver.disconnect();
      window.removeEventListener('resize', triggerInvalidate);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [addressText]);

  // Update delivery zones layer when toggle changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const zonesGroup = zonesLayerGroupRef.current;
    if (!map || !zonesGroup) return;

    zonesGroup.clearLayers();

    if (showDeliveryZones) {
      // Zone 1: Golden Square / Center (Radius ~1.7km)
      const centerCircle = L.circle(BISHKEK_CENTER, {
        radius: 1700,
        color: '#059669',
        fillColor: '#10B981',
        fillOpacity: 0.14,
        weight: 2,
        dashArray: '6, 6',
      }).addTo(zonesGroup);

      centerCircle.bindTooltip(
        lang === 'ky'
          ? 'Борбор (Алтын квадрат): 3 000 с. жогору БЕКЕР'
          : lang === 'en'
          ? 'Golden Square Center: Free from 3,000 KGS'
          : 'Золотой Квадрат: Бесплатно от 3 000 с.',
        { permanent: true, direction: 'top', className: 'delivery-zone-tooltip' }
      );

      // Zone 2: Greater Bishkek limits (Radius ~4.6km)
      const outerCircle = L.circle(BISHKEK_CENTER, {
        radius: 4600,
        color: '#78716C',
        fillColor: '#A8A29E',
        fillOpacity: 0.08,
        weight: 1.5,
        dashArray: '4, 4',
      }).addTo(zonesGroup);

      outerCircle.bindTooltip(
        lang === 'ky'
          ? 'Түштүк к/р, Жал, Туңгуч, Асанбай: 250–280 с.'
          : lang === 'en'
          ? 'South dist, Jal, Tunguch, Asanbay: 250–280 KGS'
          : 'Южные мкр, Джал, Тунгуч, Асанбай: 250–280 с.',
        { permanent: false, direction: 'bottom' }
      );
    }
  }, [showDeliveryZones, lang]);

  // Handle container resizing / expand toggle
  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setTimeout(() => {
      mapInstanceRef.current?.invalidateSize();
    }, 200);
  };

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleFocusShop = () => {
    mapInstanceRef.current?.flyTo(BISHKEK_CENTER, 16, { duration: 1.2 });
    markerRef.current?.openPopup();
  };

  const handleFocusFullCity = () => {
    mapInstanceRef.current?.flyTo(BISHKEK_CENTER, 12, { duration: 1.2 });
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-white transition-all duration-300 ${className}`}>
      
      {/* Top Map Action Bar */}
      <div className="bg-[#FAF8F5] px-4 py-3 border-b border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
          <span className="font-semibold text-stone-900">
            {addressText}
          </span>
          <span className="hidden sm:inline text-stone-400">·</span>
          <span className="hidden sm:inline font-mono text-[11px] text-stone-500">
            {coordinates}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Quick Focus: Shop vs Full City of Bishkek */}
          <div className="bg-stone-200/80 p-0.5 rounded-lg flex items-center text-[11px]">
            <button
              onClick={handleFocusShop}
              className="px-2.5 py-1 rounded-md font-medium text-stone-800 hover:bg-white hover:shadow-2xs transition-all flex items-center gap-1"
              title={lang === 'ky' ? 'Дүкөндү көрсөтүү' : lang === 'en' ? 'Center on Boutique' : 'В бутик'}
            >
              <Compass className="w-3 h-3 text-[#2C3E2D]" />
              <span>{lang === 'ky' ? 'Бутикке' : lang === 'en' ? 'Boutique' : 'В бутик'}</span>
            </button>
            <button
              onClick={handleFocusFullCity}
              className="px-2.5 py-1 rounded-md font-medium text-stone-800 hover:bg-white hover:shadow-2xs transition-all flex items-center gap-1"
              title={lang === 'ky' ? 'Бардык Бишкекти көрсөтүү' : lang === 'en' ? 'Full Bishkek overview' : 'Весь Бишкек'}
            >
              <span>{lang === 'ky' ? 'Толук Бишкек' : lang === 'en' ? 'Full Bishkek' : 'Весь Бишкек'}</span>
            </button>
          </div>

          {/* Toggle Delivery Zones */}
          <button
            onClick={() => setShowDeliveryZones(!showDeliveryZones)}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors flex items-center gap-1 ${
              showDeliveryZones
                ? 'bg-[#2C3E2D] text-white border-[#2C3E2D]'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>{t.mapSection.deliveryZones}</span>
          </button>

          {/* Toggle Expand Size */}
          <button
            onClick={handleToggleExpand}
            className="p-1 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 transition-colors hidden sm:flex items-center justify-center"
            title={isExpanded ? 'Свернуть' : 'Развернуть карту'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Map Viewport — Guarantees 100% full coverage of Bishkek with zero half-screen gaps */}
      <div
        className={`relative w-full bg-[#EBF0E8] overflow-hidden transition-all duration-300 ${
          !showCard
            ? 'h-[280px] sm:h-[320px]'
            : isExpanded
            ? 'h-[600px] sm:h-[680px]'
            : 'h-[460px] sm:h-[520px]'
        }`}
      >
        {/* Real Leaflet OpenStreetMap Container */}
        <div
          ref={mapContainerRef}
          className="w-full h-full z-0 outline-none select-none"
          tabIndex={0}
        />

        {/* Floating Custom Zoom & Recenter Controls in Top-Right */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 shadow-md">
          <button
            onClick={handleZoomIn}
            className="w-8 h-8 rounded-lg bg-white/95 hover:bg-white text-stone-800 flex items-center justify-center border border-stone-200 transition-all active:scale-95 shadow-xs"
            title="Приблизить"
          >
            <ZoomIn className="w-4 h-4 text-stone-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-8 h-8 rounded-lg bg-white/95 hover:bg-white text-stone-800 flex items-center justify-center border border-stone-200 transition-all active:scale-95 shadow-xs"
            title="Отдалить"
          >
            <ZoomOut className="w-4 h-4 text-stone-700" />
          </button>
          <button
            onClick={handleFocusShop}
            className="w-8 h-8 rounded-lg bg-[#2C3E2D] hover:bg-[#1E2B1F] text-white flex items-center justify-center border border-[#2C3E2D] transition-all active:scale-95 shadow-xs"
            title="Найти бутик на карте"
          >
            <MapPin className="w-4 h-4 text-[#A3B899]" />
          </button>
        </div>

        {/* Map Legend Overlay in bottom-left */}
        <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-stone-200/90 shadow-md text-[11px] text-stone-700 space-y-1 max-w-[280px]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 inline-flex items-center justify-center ring-2 ring-red-200">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
            <span className="font-semibold text-stone-900">
              {lang === 'ky' ? 'Дарек: Эркиндик бул. 35' : lang === 'en' ? 'Address: 35 Erkindik Blvd' : 'Адрес: бул. Эркиндик 35'}
            </span>
          </div>
          <p className="text-stone-500 text-[10px] leading-tight">
            {lang === 'ky'
              ? 'Бөкөнбаев көчөсү менен кесилишет · Кире бериш бульвар тараптан'
              : lang === 'en'
              ? 'Intersection with Bokonbaev St · Entrance from boulevard'
              : 'Пересекает ул. Боконбаева · Вход с бульвара'}
          </p>
          <div className="pt-1 text-[10px] text-emerald-700 font-medium flex items-center gap-1 border-t border-stone-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>{lang === 'ky' ? 'Шоурум ачык: 08:30 – 22:00' : lang === 'en' ? 'Showroom open: 08:30 – 22:00' : 'Шоурум открыт: 08:30 – 22:00'}</span>
          </div>
        </div>

        {/* Quick Navigator / External Map Buttons in bottom-right */}
        <div className="absolute bottom-3 right-3 z-10 flex flex-wrap gap-1.5">
          <a
            href="https://2gis.kg/bishkek/search/%D0%AD%D1%80%D0%BA%D0%B8%D0%BD%D0%B4%D0%B8%D0%BA%2035"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-white/95 hover:bg-white text-stone-800 text-[11px] font-medium rounded-lg shadow-sm border border-stone-200 flex items-center gap-1 transition-all hover:border-emerald-600"
          >
            <span className="text-emerald-700 font-bold text-xs">2ГИС</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>

          <a
            href="https://yandex.ru/maps/?text=%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA+%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80+%D0%AD%D1%80%D0%BA%D0%B8%D0%BD%D0%B4%D0%B8%D0%BA+35"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-white/95 hover:bg-white text-stone-800 text-[11px] font-medium rounded-lg shadow-sm border border-stone-200 flex items-center gap-1 transition-all hover:border-red-600"
          >
            <span className="text-red-600 font-bold text-xs">Яндекс</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
        </div>

      </div>

      {/* Bottom Information Card */}
      {showCard && (
        <div className="p-4 sm:p-5 bg-white border-t border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900 text-sm">
                {t.mapSection.flagshipShowroom}
              </span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-medium">
                {t.mapSection.openToday}
              </span>
            </div>
            <p className="text-stone-500">
              {t.mapSection.parkingNotice}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyAddress}
              className="flex-1 sm:flex-none px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{lang === 'ky' ? 'Көчүрүлдү' : lang === 'en' ? 'Copied' : 'Скопировано'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>{t.mapSection.btnCopyAddress}</span>
                </>
              )}
            </button>

            <a
              href="https://2gis.kg/bishkek/search/%D0%AD%D1%80%D0%BA%D0%B8%D0%BD%D0%B4%D0%B8%D0%BA%2035"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 bg-[#2C3E2D] hover:bg-[#1E2B1F] text-white rounded-xl font-medium flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5 text-[#A3B899]" />
              <span>{t.mapSection.btnRoute}</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
};
