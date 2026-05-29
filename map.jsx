// Japan map with animated transport routes
// Simplified abstract Japan silhouette + hubs + route lines

// Coordinates detected from japan_dots_spot.png (1908×2026px) via pixel scan
// SVG mapping: scale=0.306, x_offset=148
const HUBS = [
  { id: 'tomakomai', name: '苫小牧', en: 'Tomakomai', x: 605, y: 113 },
  { id: 'sendai',    name: '仙台',   en: 'Sendai',    x: 583, y: 295 },
  { id: 'oarai',     name: '大洗',   en: 'Oarai',     x: 562, y: 386 },
  { id: 'yokohama',  name: '横浜',   en: 'Yokohama',  x: 538, y: 415, primary: true },
  { id: 'nagoya',    name: '名古屋', en: 'Nagoya',    x: 451, y: 436 },
  { id: 'osaka',     name: '大阪',   en: 'Osaka',     x: 411, y: 446 },
  { id: 'hakata',    name: '博多',   en: 'Hakata',    x: 253, y: 496 },
  { id: 'naha',      name: '那覇',   en: 'Naha',      x: 183, y: 598 },
];

const ROUTES = [
  { id: 'r1', label: '横浜 → 苫小牧', from: 'yokohama', to: 'tomakomai', km: 900  },
  { id: 'r2', label: '横浜 → 仙台',   from: 'yokohama', to: 'sendai',    km: 350  },
  { id: 'r2b', label: '横浜 → 大洗',  from: 'yokohama', to: 'oarai',     km: 120  },
  { id: 'r3', label: '横浜 → 名古屋', from: 'yokohama', to: 'nagoya',    km: 370  },
  { id: 'r4', label: '横浜 → 大阪',   from: 'yokohama', to: 'osaka',     km: 600  },
  { id: 'r5', label: '横浜 → 博多',   from: 'yokohama', to: 'hakata',    km: 1100 },
  { id: 'r6', label: '横浜 → 那覇',   from: 'yokohama', to: 'naha',      km: 1650 },
];


function MapJapan({ activeRoute, onRouteHover }) {
  const hubMap = React.useMemo(() => Object.fromEntries(HUBS.map(h => [h.id, h])), []);
  const [imgKey] = React.useState(() => Date.now());

  return (
    <svg viewBox="0 0 880 620" preserveAspectRatio="xMidYMid meet"
      style={{display: 'block', width: '100%', height: '100%'}}
      role="img" aria-label="日本地図と輸送ルート">
      <rect width="880" height="620" fill="#1e3a5f" />
      <image key={imgKey} href="japan_dots_spot.png" x="0" y="0" width="880" height="620" preserveAspectRatio="xMidYMid meet" opacity="0.9" />

      {/* Routes */}
      <g>
        {ROUTES.map((r, i) => {
          const a = hubMap[r.from], b = hubMap[r.to];
          if (!a || !b) return null;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.18 - 30;
          const d = `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
          const isActive = activeRoute === r.id;
          return (
            <g key={r.id}>
              <path
                d={d}
                className={`map-canvas__route ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => onRouteHover && onRouteHover(r.id)}
              />
              {isActive && (
                <circle r="4" className="map-canvas__truck">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path={d} />
                </circle>
              )}
            </g>
          );
        })}
      </g>

      {/* Hubs */}
      <g>
        {HUBS.map(h => (
          <g key={h.id}>
            <circle cx={h.x} cy={h.y} r={h.primary ? 18 : 10} className="map-canvas__hub-glow">
              <animate attributeName="r" values={`${h.primary ? 18 : 10};${h.primary ? 28 : 18};${h.primary ? 18 : 10}`} dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle cx={h.x} cy={h.y} r={h.primary ? 4 : 2.5} className="map-canvas__hub" />
          </g>
        ))}
      </g>
    </svg>
  );
}

window.MapJapan = MapJapan;
window.HUBS = HUBS;
window.ROUTES = ROUTES;
