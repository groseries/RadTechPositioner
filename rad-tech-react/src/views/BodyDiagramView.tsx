import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BodyRegion, allBodyRegions, bodyRegionColors, bodyRegionHitRegions } from '../types';

const regionLabels: { region: BodyRegion; x: number; y: number }[] = [
  { region: BodyRegion.Head, x: 145, y: 25 },
  { region: BodyRegion.CervicalSpine, x: 145, y: 75 },
  { region: BodyRegion.Shoulder, x: 80, y: 105 },
  { region: BodyRegion.Chest, x: 145, y: 140 },
  { region: BodyRegion.ThoracicSpine, x: 200, y: 150 },
  { region: BodyRegion.UpperExtremity, x: 55, y: 200 },
  { region: BodyRegion.LumbarSpine, x: 200, y: 180 },
  { region: BodyRegion.Abdomen, x: 145, y: 195 },
  { region: BodyRegion.Pelvis, x: 145, y: 240 },
  { region: BodyRegion.Hip, x: 100, y: 250 },
  { region: BodyRegion.LowerExtremity, x: 145, y: 280 },
];

// Skeleton SVG - new grid-based design
function SkeletonSVG() {
  return (
    <g>
      <path
        d="M145.035,0 c-13.288,0-23.875,11.404-23.875,25s10.587,25,23.875,25c13.288,0,23.875-11.404,23.875-25S158.322,0,145.035,0z M145.035,10 c7.561,0,13.875,6.505,13.875,15s-6.314,15-13.875,15c-7.561,0-13.875-6.505-13.875-15S137.473,10,145.035,10z M144.959,59.93 c-2.759,0.042-4.963,2.311-4.924,5.07v5h-10c-2.761-0.039-5.032,2.168-5.071,4.929c-0.039,2.761,2.168,5.032,4.929,5.071 c0.047,0.001,0.094,0.001,0.141,0h10v10h-25c-2.761-0.039-5.032,2.168-5.071,4.929s2.168,5.032,4.929,5.071 c0.047,0.001,0.094,0.001,0.141,0h25v10h-25c-2.761-0.039-5.032,2.168-5.071,4.929s2.168,5.032,4.929,5.071 c0.047,0.001,0.094,0.001,0.141,0h25v10h-5c-2.761-0.039-5.032,2.168-5.071,4.929c-0.039,2.761,2.168,5.032,4.929,5.071 c0.047,0.001,0.094,0.001,0.141,0h5v10h-5c-2.761-0.039-5.032,2.168-5.071,4.929c-0.039,2.761,2.168,5.032,4.929,5.071 c0.047,0.001,0.094,0.001,0.141,0h5v5c-0.039,2.761,2.168,5.032,4.929,5.071c2.761,0.039,5.032-2.168,5.071-4.929 c0.001-0.047,0.001-0.094,0-0.141v-5h5c2.761,0.039,5.032-2.168,5.071-4.929c0.039-2.761-2.168-5.032-4.929-5.071 c-0.047-0.001-0.094-0.001-0.141,0h-5v-10h5c2.761,0.039,5.032-2.168,5.071-4.929c0.039-2.761-2.168-5.032-4.929-5.071 c-0.047-0.001-0.094-0.001-0.141,0h-5v-10h25c2.761,0.039,5.032-2.168,5.071-4.929c0.039-2.761-2.168-5.032-4.929-5.071 c-0.047-0.001-0.094-0.001-0.141,0h-25v-10h25c2.761,0.039,5.032-2.168,5.071-4.929c0.039-2.761-2.168-5.032-4.929-5.071 c-0.047-0.001-0.094-0.001-0.141,0h-25V80h10c2.761,0.039,5.032-2.168,5.071-4.929c0.039-2.761-2.168-5.032-4.929-5.071 c-0.047-0.001-0.094-0.001-0.141,0h-10v-5c0.039-2.761-2.168-5.031-4.93-5.07C145.056,59.929,145.007,59.929,144.959,59.93z M115.058,59.969c-0.787,0.006-1.561,0.198-2.26,0.56l-20,10c-2.491,1.192-3.544,4.178-2.352,6.669 c1.192,2.491,4.178,3.544,6.669,2.352c0.052-0.025,0.104-0.051,0.155-0.078l20-10c2.487-1.2,3.531-4.19,2.33-6.677 C118.761,61.054,116.992,59.953,115.058,59.969z M174.861,59.969c-2.761,0.062-4.949,2.35-4.887,5.112 c0.042,1.878,1.133,3.574,2.824,4.391l20,10c2.448,1.278,5.469,0.329,6.747-2.119c1.278-2.448,0.329-5.469-2.119-6.747 c-0.051-0.027-0.103-0.053-0.155-0.078l-20-10C176.527,60.142,175.698,59.95,174.861,59.969z M94.959,89.928 c-2.759,0.042-4.963,2.311-4.924,5.07v40c-0.039,2.761,2.168,5.032,4.929,5.071s5.032-2.168,5.071-4.929 c0.001-0.047,0.001-0.094,0-0.141v-40c0.039-2.761-2.168-5.031-4.93-5.07C95.056,89.927,95.007,89.927,94.959,89.928z M194.959,89.928c-2.759,0.042-4.963,2.311-4.924,5.07v40c-0.039,2.761,2.168,5.032,4.929,5.071 c2.761,0.039,5.032-2.168,5.071-4.929c0.001-0.047,0.001-0.094,0-0.141v-40c0.039-2.761-2.168-5.031-4.93-5.07 C195.056,89.927,195.007,89.927,194.959,89.928z M95.035,150c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S97.796,150,95.035,150z M195.035,150c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S197.796,150,195.035,150z M114.986,159.959 c-2.762-0.005-5.004,2.23-5.009,4.992c-0.003,1.7,0.858,3.284,2.285,4.208l30,20c1.932,1.327,4.526,1.135,6.24-0.463l29.307-19.537 c4.256-2.751,2.19-9.36-2.875-9.197c-0.956,0.031-1.883,0.335-2.672,0.877l-27.227,18.15l-27.227-18.15 C116.977,160.267,115.994,159.961,114.986,159.959L114.986,159.959z M114.959,179.928c-2.759,0.042-4.963,2.311-4.924,5.07v40 c-0.039,2.761,2.168,5.032,4.929,5.071s5.032-2.168,5.071-4.929c0.001-0.047,0.001-0.094,0-0.141v-40 c0.039-2.761-2.168-5.031-4.93-5.07C115.057,179.927,115.008,179.927,114.959,179.928z M174.959,179.928 c-2.759,0.042-4.963,2.311-4.924,5.07v40c-0.039,2.761,2.168,5.032,4.929,5.071c2.761,0.039,5.032-2.168,5.071-4.929 c0.001-0.047,0.001-0.094,0-0.141v-40c0.039-2.761-2.168-5.031-4.93-5.07C175.057,179.927,175.008,179.927,174.959,179.928z M114.959,239.928c-2.759,0.042-4.963,2.311-4.924,5.07v40c-0.039,2.761,2.168,5.032,4.929,5.071s5.032-2.168,5.071-4.929 c0.001-0.047,0.001-0.094,0-0.141v-40c0.039-2.761-2.168-5.031-4.93-5.07C115.057,239.927,115.008,239.927,114.959,239.928 L114.959,239.928z M174.959,239.928c-2.759,0.042-4.963,2.311-4.924,5.07v40c-0.039,2.761,2.168,5.032,4.929,5.071 c2.761,0.039,5.032-2.168,5.071-4.929c0.001-0.047,0.001-0.094,0-0.141v-40c0.039-2.761-2.168-5.031-4.93-5.07 C175.057,239.927,175.008,239.927,174.959,239.928L174.959,239.928z"
        fill="currentColor"
        opacity="0.5"
      />
    </g>
  );
}

// OLD: Skeleton SVG as a filled silhouette matching anatomical reference (kept for reference)
// function SkeletonSVGOld() {
//   const o = 0.3; // base opacity for bones
//   const fo = 0.25; // fill opacity
//
//   return (
//     <g>
//       SKULL - rounded cranium with facial features cut out
//       ... old skeleton code ...
//     </g>
//   );
// }

export default function BodyDiagramView() {
  const navigate = useNavigate();
  const [highlighted, setHighlighted] = useState<BodyRegion | null>(null);

  const handleRegionClick = (region: BodyRegion) => {
    setHighlighted(region);
    navigate(`/body-map/${encodeURIComponent(region)}`);
  };

  return (
    <div className="body-diagram-wrapper">
      <div className="body-diagram-header">
        <div className="page-title">Body Map</div>
        <p className="subtitle-text">Tap a region to explore positions</p>
      </div>

      <div className="body-diagram-container">
        <svg viewBox="0 0 290.069 290.069">
          <SkeletonSVG />

          {/* Hit regions */}
          {allBodyRegions.map(region => {
            const r = bodyRegionHitRegions[region];
            const isHl = highlighted === region;
            const color = bodyRegionColors[region];
            return (
              <rect
                key={region}
                x={r.x * 290.069} y={r.y * 290.069}
                width={r.w * 290.069} height={r.h * 290.069}
                rx={4}
                fill={isHl ? color : 'transparent'}
                fillOpacity={isHl ? 0.12 : 0}
                stroke={isHl ? color : 'transparent'}
                strokeWidth={isHl ? 1 : 0}
                strokeOpacity={0.4}
                className="body-hit-region"
                onClick={() => handleRegionClick(region)}
                onMouseEnter={() => setHighlighted(region)}
                onMouseLeave={() => setHighlighted(null)}
              />
            );
          })}

          {/* Labels - only show when highlighted */}
          {regionLabels.map(({ region, x, y }) => {
            const isHl = highlighted === region;
            return isHl ? (
              <text
                key={region}
                x={x} y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={9}
                fontWeight={600}
                fill={bodyRegionColors[region]}
                style={{ pointerEvents: 'none', transition: 'opacity 0.2s ease', letterSpacing: '-0.02em' }}
                opacity={1}
              >
                {region}
              </text>
            ) : null;
          })}
        </svg>
      </div>

      <div className="region-grid">
        {allBodyRegions.map(region => (
          <button
            key={region}
            className="region-btn"
            onClick={() => handleRegionClick(region)}
            onMouseEnter={() => setHighlighted(region)}
            onMouseLeave={() => setHighlighted(null)}
            style={{
              borderColor: highlighted === region ? bodyRegionColors[region] : undefined,
              background: highlighted === region ? `${bodyRegionColors[region]}08` : undefined,
            }}
          >
            <span className="region-icon" style={{ color: bodyRegionColors[region], opacity: 0.8 }}>
              {regionIcon(region)}
            </span>
            <span className="region-label">{region}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function regionIcon(region: BodyRegion): string {
  const icons: Record<BodyRegion, string> = {
    [BodyRegion.Head]: '\u25CB',
    [BodyRegion.CervicalSpine]: '\u2502',
    [BodyRegion.Chest]: '\u25A1',
    [BodyRegion.Shoulder]: '\u2190',
    [BodyRegion.UpperExtremity]: '\u2534',
    [BodyRegion.ThoracicSpine]: '\u2502',
    [BodyRegion.LumbarSpine]: '\u2502',
    [BodyRegion.Abdomen]: '\u25CB',
    [BodyRegion.Pelvis]: '\u2229',
    [BodyRegion.Hip]: '\u25C7',
    [BodyRegion.LowerExtremity]: '\u2193',
  };
  return icons[region];
}
