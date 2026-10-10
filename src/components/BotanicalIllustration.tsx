import React from 'react';

interface Props {
  flowerType: 'peony' | 'rose' | 'hydrangea' | 'tulip' | 'mix' | 'box' | 'eustoma' | 'gift';
  accentColor?: string;
  className?: string;
}

export const BotanicalIllustration: React.FC<Props> = ({
  flowerType,
  accentColor = '#C47768',
  className = 'w-full h-full',
}) => {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden select-none ${className}`}>
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Dynamic SVG botanical illustration */}
      {flowerType === 'peony' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Leaves */}
          <path d="M50 150 C30 140 20 110 35 95 C45 110 60 135 70 145 Z" fill="#6A8068" opacity="0.85" />
          <path d="M150 150 C170 140 180 110 165 95 C155 110 140 135 130 145 Z" fill="#5E755C" opacity="0.85" />
          <path d="M85 180 C80 200 70 215 65 220 C75 205 90 195 95 180 Z" fill="#4B634A" />
          {/* Peony Stems wrapped */}
          <path d="M96 130 Q92 185 88 220" stroke="#4B634A" strokeWidth="5" strokeLinecap="round" />
          <path d="M104 130 Q106 185 110 220" stroke="#5E755C" strokeWidth="4.5" strokeLinecap="round" />
          {/* Kraft wrapper */}
          <path d="M60 150 L140 150 L125 215 L75 215 Z" fill="#E4D5C8" stroke="#D3C1B2" strokeWidth="1.5" />
          <path d="M50 140 L150 140 L120 180 L80 180 Z" fill="#EFE3D8" opacity="0.9" />
          {/* Satin ribbon bow */}
          <path d="M85 165 C75 160 70 175 88 172 C98 170 102 170 112 172 C130 175 125 160 115 165" stroke={accentColor} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="100" cy="168" r="4" fill={accentColor} />
          {/* Lush Peony Petals Layer 1 (Outer) */}
          <path d="M70 105 C50 85 60 55 85 60 C90 40 120 40 125 60 C145 55 155 85 135 105 C145 120 125 135 100 132 C75 135 55 120 70 105 Z" fill="#F8D6CF" />
          {/* Layer 2 */}
          <path d="M78 98 C65 80 75 62 92 68 C100 52 118 52 122 68 C138 62 145 80 132 98 C138 112 120 122 102 120 C82 122 72 112 78 98 Z" fill="#F3BAC0" />
          {/* Layer 3 */}
          <path d="M85 92 C76 80 84 70 96 75 C102 65 112 65 116 75 C126 70 132 80 124 92 C126 102 114 110 102 108 C88 110 82 102 85 92 Z" fill="#E896A1" />
          {/* Center core frills */}
          <path d="M92 88 C90 80 96 76 102 78 C108 76 114 80 112 88 C110 94 94 94 92 88 Z" fill="#D36B78" />
          <circle cx="102" cy="85" r="2.5" fill="#FFE58F" />
          <circle cx="98" cy="87" r="1.5" fill="#FFE58F" />
          <circle cx="106" cy="87" r="1.5" fill="#FFE58F" />
          {/* Small companion buds */}
          <circle cx="58" cy="115" r="9" fill="#F5C6CC" opacity="0.9" />
          <circle cx="144" cy="112" r="10" fill="#F8CCD3" opacity="0.9" />
          <circle cx="132" cy="62" r="7" fill="#ECAEB7" opacity="0.8" />
        </svg>
      )}

      {flowerType === 'rose' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Leaves */}
          <path d="M45 130 C30 115 35 90 55 90 C65 105 60 120 45 130 Z" fill="#4B634A" />
          <path d="M155 130 C170 115 165 90 145 90 C135 105 140 120 155 130 Z" fill="#5E755C" />
          {/* Stems */}
          <path d="M95 120 Q92 170 85 220" stroke="#3D523C" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M105 120 Q108 170 115 220" stroke="#4B634A" strokeWidth="4.5" strokeLinecap="round" />
          {/* Thorns */}
          <path d="M89 160 L84 158 L89 164 Z" fill="#3D523C" />
          <path d="M110 185 L115 183 L110 189 Z" fill="#4B634A" />
          {/* Designer Wrap */}
          <path d="M65 135 L135 135 L120 215 L80 215 Z" fill="#292625" opacity="0.95" />
          <path d="M55 125 L145 125 L115 160 L85 160 Z" fill="#3A3635" opacity="0.8" />
          {/* Golden Ribbon */}
          <path d="M82 155 Q100 162 118 155" stroke="#D4AF37" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="100" cy="158" r="3.5" fill="#D4AF37" />
          {/* Rose Petals - Outer Spirals */}
          <path d="M68 95 C62 70 80 50 100 50 C120 50 138 70 132 95 C130 115 118 128 100 128 C82 128 70 115 68 95 Z" fill={accentColor} />
          {/* Inner Petal Layers */}
          <path d="M75 90 C72 72 85 58 100 58 C115 58 128 72 125 90 C122 108 112 118 100 118 C88 118 78 108 75 90 Z" fill="#A53545" opacity="0.9" />
          {/* Petal fold curve */}
          <path d="M85 85 C82 72 92 65 100 65 C108 65 118 72 115 85 C112 98 106 106 100 106 C94 106 88 98 85 85 Z" fill="#7E1C2B" />
          <path d="M92 82 C90 74 96 70 100 70 C104 70 110 74 108 82 C106 90 94 90 92 82 Z" fill="#580D19" />
          {/* Companion roses */}
          <circle cx="62" cy="110" r="14" fill={accentColor} opacity="0.85" />
          <circle cx="138" cy="108" r="15" fill={accentColor} opacity="0.85" />
          <circle cx="100" cy="48" r="10" fill="#B33E4E" opacity="0.7" />
        </svg>
      )}

      {flowerType === 'hydrangea' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Leaves */}
          <path d="M40 140 C20 120 30 90 60 95 C65 115 55 135 40 140 Z" fill="#4D6B52" />
          <path d="M160 140 C180 120 170 90 140 95 C135 115 145 135 160 140 Z" fill="#3E5743" />
          {/* Stems */}
          <path d="M98 135 L96 215" stroke="#3E5743" strokeWidth="5" strokeLinecap="round" />
          {/* Modern Frost Paper */}
          <path d="M60 145 L140 145 L125 215 L75 215 Z" fill="#F0F4F8" stroke="#D3DFEC" strokeWidth="1.5" />
          {/* Hydrangea Florets Cloud */}
          <circle cx="100" cy="85" r="48" fill="#D6E8FA" />
          <circle cx="80" cy="75" r="30" fill="#BFDCF8" />
          <circle cx="120" cy="75" r="30" fill="#ADCFF4" />
          <circle cx="100" cy="60" r="26" fill="#BFDCF8" />
          {/* Detailed 4-petal florets */}
          {[
            { cx: 80, cy: 65, color: '#689FD2' },
            { cx: 100, cy: 55, color: '#4F87BF' },
            { cx: 120, cy: 65, color: '#5B93CC' },
            { cx: 70, cy: 90, color: '#7BAFE2' },
            { cx: 95, cy: 85, color: '#3F7BB7' },
            { cx: 115, cy: 92, color: '#689FD2' },
            { cx: 130, cy: 80, color: '#538BC5' },
            { cx: 88, cy: 110, color: '#7BAFE2' },
            { cx: 110, cy: 112, color: '#689FD2' },
          ].map((f, i) => (
            <g key={i} transform={`translate(${f.cx}, ${f.cy})`}>
              <ellipse cx="0" cy="-6" rx="4" ry="5.5" fill={f.color} />
              <ellipse cx="0" cy="6" rx="4" ry="5.5" fill={f.color} />
              <ellipse cx="-6" cy="0" rx="5.5" ry="4" fill={f.color} />
              <ellipse cx="6" cy="0" rx="5.5" ry="4" fill={f.color} />
              <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
            </g>
          ))}
        </svg>
      )}

      {flowerType === 'box' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Round Hat Box Base */}
          <rect x="52" y="115" width="96" height="90" rx="6" fill="#FDFBF9" stroke="#E2D6CB" strokeWidth="2" />
          {/* Box Gold Brand Emblem */}
          <circle cx="100" cy="155" r="14" fill="#F6EDE3" stroke="#C59B63" strokeWidth="1.5" />
          <text x="100" y="159" textAnchor="middle" fill="#A47B45" fontSize="10" fontFamily="serif" fontWeight="bold">G</text>
          {/* Box Ribbon */}
          <path d="M52 135 H148" stroke="#C8576C" strokeWidth="5" />
          <path d="M92 135 C85 125 75 145 95 140 C100 138 105 138 110 140 C125 145 115 125 108 135" stroke="#C8576C" strokeWidth="3" fill="none" />
          {/* Flowers blooming out of box */}
          {/* Leaf sprigs */}
          <path d="M45 110 C35 95 50 85 62 98 Z" fill="#607D63" />
          <path d="M155 110 C165 95 150 85 138 98 Z" fill="#607D63" />
          {/* Tulips / Blossoms */}
          <path d="M68 95 C62 75 75 60 85 65 C95 60 108 75 102 95 Z" fill="#E8627D" />
          <path d="M98 95 C92 75 105 60 115 65 C125 60 138 75 132 95 Z" fill="#F27993" />
          <path d="M82 85 C76 65 89 50 100 55 C110 50 124 65 118 85 Z" fill="#C84561" />
          <circle cx="70" cy="110" r="10" fill="#FAD1D9" />
          <circle cx="130" cy="110" r="10" fill="#FAD1D9" />
          <circle cx="100" cy="105" r="12" fill="#E65876" />
        </svg>
      )}

      {flowerType === 'tulip' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Stems */}
          <path d="M85 110 Q80 165 75 220" stroke="#5E8357" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M100 105 Q100 165 100 220" stroke="#4C7045" strokeWidth="5" strokeLinecap="round" />
          <path d="M115 110 Q120 165 125 220" stroke="#5E8357" strokeWidth="4.5" strokeLinecap="round" />
          {/* Broad tulip leaves */}
          <path d="M75 160 C50 130 60 90 75 120 Z" fill="#6A9463" opacity="0.9" />
          <path d="M125 160 C150 130 140 90 125 120 Z" fill="#587F52" opacity="0.9" />
          {/* Natural kraft wrapper */}
          <path d="M60 145 L140 145 L120 215 L80 215 Z" fill="#E8DDD3" stroke="#D3C3B5" strokeWidth="1.5" />
          {/* Tulip cups */}
          {/* Left Tulip */}
          <path d="M72 105 C60 90 65 70 78 72 C80 62 90 62 92 72 C105 70 110 90 98 105 Z" fill="#F06A80" />
          {/* Center Tulip */}
          <path d="M88 95 C75 80 82 55 98 58 C100 48 112 48 114 58 C130 55 137 80 124 95 Z" fill="#E04C64" />
          {/* Right Tulip */}
          <path d="M106 105 C96 90 101 70 114 72 C116 62 126 62 128 72 C141 70 146 90 134 105 Z" fill="#F28597" />
        </svg>
      )}

      {flowerType === 'eustoma' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Delicate Stems */}
          <path d="M96 110 Q94 165 90 220" stroke="#547558" strokeWidth="4" strokeLinecap="round" />
          <path d="M104 110 Q106 165 110 220" stroke="#658A6A" strokeWidth="4" strokeLinecap="round" />
          {/* Eucalyptus / foliage */}
          <circle cx="65" cy="115" r="10" fill="#8AA88F" opacity="0.8" />
          <circle cx="135" cy="115" r="10" fill="#8AA88F" opacity="0.8" />
          <circle cx="55" cy="95" r="8" fill="#75947B" opacity="0.8" />
          <circle cx="145" cy="95" r="8" fill="#75947B" opacity="0.8" />
          {/* Wrapping */}
          <path d="M62 145 L138 145 L122 215 L78 215 Z" fill="#E8EAE8" stroke="#CCD1CC" strokeWidth="1.5" />
          {/* White / Mint Eustoma ruffled flowers */}
          <path d="M75 100 C62 82 72 65 88 70 C94 56 110 56 116 70 C132 65 142 82 129 100 C135 115 115 125 102 122 C85 125 70 115 75 100 Z" fill="#FFFFFF" stroke="#E0E6E1" strokeWidth="1.5" />
          <path d="M85 95 C78 82 86 72 96 76 C102 68 110 68 114 76 C124 72 130 82 123 95 C124 105 112 112 104 110 C92 112 85 105 85 95 Z" fill="#F4F8F5" />
          <circle cx="102" cy="92" r="4" fill="#CDE0D1" />
          {/* Small buds */}
          <path d="M60 70 C55 60 62 55 68 62 Z" fill="#7FA485" />
          <path d="M140 70 C145 60 138 55 132 62 Z" fill="#7FA485" />
        </svg>
      )}

      {flowerType === 'mix' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Multi-flower foliage */}
          <path d="M40 130 C25 110 35 80 60 90 Z" fill="#4B634A" />
          <path d="M160 130 C175 110 165 80 140 90 Z" fill="#5E755C" />
          <path d="M96 125 Q92 170 85 220" stroke="#3D523C" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M104 125 Q108 170 115 220" stroke="#4B634A" strokeWidth="4.5" strokeLinecap="round" />
          {/* Korean style double wrap */}
          <path d="M55 135 L145 135 L125 215 L75 215 Z" fill="#F4EBE3" stroke="#DFCFC2" strokeWidth="1.5" />
          <path d="M48 125 L152 125 L118 165 L82 165 Z" fill="#FAF5F0" opacity="0.9" />
          <circle cx="100" cy="155" r="3.5" fill="#C47768" />
          {/* Mix of Rose, Ranunculus, Chamomile & Craspedia */}
          {/* Sunflower or Golden Ranunculus */}
          <circle cx="100" cy="80" r="26" fill="#F7B742" />
          <circle cx="100" cy="80" r="14" fill="#6B411D" />
          {/* Petals around center */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <ellipse key={i} cx="100" cy="80" rx="6" ry="18" fill="#FFC952" transform={`rotate(${deg} 100 80)`} />
          ))}
          <circle cx="100" cy="80" r="12" fill="#543015" />
          {/* Accent flowers */}
          <circle cx="68" cy="100" r="15" fill="#E896A1" />
          <circle cx="132" cy="100" r="14" fill="#C47768" />
          <circle cx="70" cy="65" r="9" fill="#F7DC6F" />
          <circle cx="130" cy="65" r="9" fill="#F7DC6F" />
          {/* Little Chamomiles */}
          <circle cx="100" cy="115" r="5" fill="#F7DC6F" />
          <circle cx="95" cy="115" r="3" fill="#FFFFFF" />
          <circle cx="105" cy="115" r="3" fill="#FFFFFF" />
        </svg>
      )}

      {flowerType === 'gift' && (
        <svg viewBox="0 0 200 220" className="w-[82%] h-[82%] drop-shadow-md" fill="none">
          {/* Gift Box / Vase / Sweets */}
          <rect x="60" y="90" width="80" height="95" rx="8" fill="#F8F3ED" stroke="#DBCFBF" strokeWidth="2" />
          <rect x="55" y="80" width="90" height="20" rx="4" fill="#EBE0D3" stroke="#D4C4B1" strokeWidth="2" />
          <path d="M100 80 V185" stroke="#C47768" strokeWidth="6" />
          <path d="M60 135 H140" stroke="#C47768" strokeWidth="6" />
          {/* Bow on top */}
          <path d="M100 80 C85 65 75 75 92 80 Z" fill="#C47768" />
          <path d="M100 80 C115 65 125 75 108 80 Z" fill="#C47768" />
          <circle cx="100" cy="80" r="4" fill="#A85749" />
          {/* Sprig of greenery */}
          <path d="M108 65 Q125 50 140 55" stroke="#5E8357" strokeWidth="3" fill="none" />
          <circle cx="140" cy="55" r="4" fill="#DC7185" />
        </svg>
      )}
    </div>
  );
};
