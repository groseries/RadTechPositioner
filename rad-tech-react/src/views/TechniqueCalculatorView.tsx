import { useState, useMemo } from 'react';
import { BodyRegion, allBodyRegions } from '../types';
import { bodyPartsForRegion } from '../data/bodyPartData';
import { positionsForBodyPart, positionById } from '../data/positionDatabase';

type PatientSize = 'Small' | 'Medium/Average' | 'Large' | 'Pediatric';
const patientSizes: PatientSize[] = ['Small', 'Medium/Average', 'Large', 'Pediatric'];

export default function TechniqueCalculatorView() {
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion>(BodyRegion.Chest);
  const [selectedBodyPartId, setSelectedBodyPartId] = useState('chest_routine');
  const [selectedPositionId, setSelectedPositionId] = useState('chest-pa-upright');
  const [patientSize, setPatientSize] = useState<PatientSize>('Medium/Average');
  const [gridUsed, setGridUsed] = useState(true);
  const [thicknessCm, setThicknessCm] = useState(22);

  const bodyParts = useMemo(() => bodyPartsForRegion(selectedRegion), [selectedRegion]);
  const positions = useMemo(() => positionsForBodyPart(selectedBodyPartId), [selectedBodyPartId]);

  const selectedPosition = useMemo(() => positionById(selectedPositionId), [selectedPositionId]);

  const technique = selectedPosition?.techniqueSuggestion;

  const calculated = useMemo(() => {
    if (!technique) return null;

    let kvp: number, mas: number;
    switch (patientSize) {
      case 'Small': kvp = technique.smallKvp; mas = technique.smallMas; break;
      case 'Medium/Average': kvp = technique.mediumKvp; mas = technique.mediumMas; break;
      case 'Large': kvp = technique.largeKvp; mas = technique.largeMas; break;
      case 'Pediatric': kvp = technique.smallKvp - 10; mas = technique.smallMas * 0.5; break;
    }

    const baseThickness = patientSize === 'Small' ? 16 : patientSize === 'Medium/Average' ? 22 : patientSize === 'Large' ? 28 : 10;
    const diff = thicknessCm - baseThickness;
    if (Math.abs(diff) > 2) {
      kvp += Math.floor(diff / 4) * 8;
    }

    if (!gridUsed) {
      mas = mas / 3.5;
    }

    kvp = Math.max(40, Math.min(150, kvp));
    mas = Math.max(0.5, mas);

    return { kvp, mas };
  }, [technique, patientSize, thicknessCm, gridUsed]);

  return (
    <>
      <div className="page-title">Technique</div>

      <div className="grouped-section">
        <div className="grouped-section-header">Exam</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          <div className="mb-8">
            <label className="form-label">Region</label>
            <select
              className="form-select"
              value={selectedRegion}
              onChange={e => {
                const r = e.target.value as BodyRegion;
                setSelectedRegion(r);
                const parts = bodyPartsForRegion(r);
                if (parts.length > 0) setSelectedBodyPartId(parts[0].id);
              }}
            >
              {allBodyRegions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div className="mb-8">
            <label className="form-label">Body Part</label>
            <select
              className="form-select"
              value={selectedBodyPartId}
              onChange={e => {
                setSelectedBodyPartId(e.target.value);
                const pos = positionsForBodyPart(e.target.value);
                if (pos.length > 0) setSelectedPositionId(pos[0].id);
              }}
            >
              {bodyParts.map(bp => <option key={bp.id} value={bp.id}>{bp.name}</option>)}
            </select>
          </div>

          {positions.length > 0 && (
            <div>
              <label className="form-label">Position</label>
              <select
                className="form-select"
                value={selectedPositionId}
                onChange={e => setSelectedPositionId(e.target.value)}
              >
                {positions.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="grouped-section">
        <div className="grouped-section-header">Patient</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          <div className="mb-8">
            <label className="form-label">Size</label>
            <select
              className="form-select"
              value={patientSize}
              onChange={e => setPatientSize(e.target.value as PatientSize)}
            >
              {patientSizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="mb-8">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <label className="form-label">Thickness</label>
              <span className="text-sm" style={{ color: 'var(--blue)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{thicknessCm} cm</span>
            </div>
            <input
              type="range"
              className="form-range"
              min={5} max={45} step={1}
              value={thicknessCm}
              onChange={e => setThicknessCm(Number(e.target.value))}
            />
          </div>

          <div className="form-toggle">
            <span>Grid</span>
            <button
              className={`toggle-switch${gridUsed ? ' on' : ''}`}
              onClick={() => setGridUsed(!gridUsed)}
            >
              <div className="toggle-knob" />
            </button>
          </div>
        </div>
      </div>

      {technique && calculated && (
        <>
          <div className="grouped-section">
            <div className="grouped-section-header">Result</div>
            <div className="grouped-section-content" style={{ padding: 16 }}>
              <div className="calc-display">
                <div className="calc-value">
                  <div className="number" style={{ color: 'var(--blue)' }}>{calculated.kvp}</div>
                  <div className="unit">kVp</div>
                </div>
                <div className="calc-divider" />
                <div className="calc-value">
                  <div className="number" style={{ color: 'var(--green)' }}>{calculated.mas.toFixed(1)}</div>
                  <div className="unit">mAs</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 4 }}>
                <TechLabel label="S" kvp={technique.smallKvp} mas={technique.smallMas} color="var(--green)" />
                <TechLabel label="M" kvp={technique.mediumKvp} mas={technique.mediumMas} color="var(--blue)" />
                <TechLabel label="L" kvp={technique.largeKvp} mas={technique.largeMas} color="var(--purple)" />
              </div>

              {technique.notes && (
                <div className="text-xs text-secondary mt-8" style={{ lineHeight: 1.4 }}>{technique.notes}</div>
              )}
            </div>
          </div>

          <div className="grouped-section">
            <div className="grouped-section-header">Adjustments</div>
            <div className="grouped-section-content" style={{ padding: '0 16px' }}>
              <AdjRow label="Size" value={patientSize} />
              <AdjRow label="Grid" value={gridUsed ? 'Yes' : 'No (tabletop)'} />
              <AdjRow label="Thickness" value={`${thicknessCm} cm`} />
            </div>
          </div>

          <div className="grouped-section">
            <div className="grouped-section-header">Rules</div>
            <div className="grouped-section-content" style={{ padding: 16 }}>
              <RuleRow title="4 cm Rule" desc="Every 4 cm increase: +8 kVp or 2x mAs" />
              <RuleRow title="15% Rule" desc="+15% kVp = 2x mAs effect" />
              <RuleRow title="Grid Factor" desc="Adding grid: 3-4x mAs" />
              <RuleRow title="Distance" desc="new mAs = old mAs x (new SID / old SID)^2" />
              <RuleRow title="Pediatric" desc="Reduce 25-50% from adult" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

function TechLabel({ label, kvp, mas, color }: { label: string; kvp: number; mas: number; color: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 10, fontWeight: 600, color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      <div className="text-xxs text-secondary">{kvp}/{mas.toFixed(1)}</div>
    </div>
  );
}

function AdjRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-row" style={{ fontSize: 13 }}>
      <span>{label}</span>
      <span className="text-secondary">{value}</span>
    </div>
  );
}

function RuleRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ padding: '5px 0' }}>
      <div className="fw-600 text-sm">{title}</div>
      <div className="text-xs text-secondary" style={{ lineHeight: 1.4 }}>{desc}</div>
    </div>
  );
}
