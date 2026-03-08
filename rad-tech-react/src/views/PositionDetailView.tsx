import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ChevronLeft, Star, CheckCircle, XCircle, Lightbulb, AlertTriangle, HelpCircle, Target, Ruler, RectangleHorizontal, Grid3x3, Scissors, MapPin, Shield, Wind, ListOrdered } from 'lucide-react';
import { positionById } from '../data/positionDatabase';
import { useFavorites } from '../context/useFavorites';
import type { Position, AlternateContext, TechniqueSuggestion } from '../types';

export default function PositionDetailView() {
  const { positionId } = useParams<{ positionId: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, addToRecent } = useFavorites();

  const position = positionById(positionId || '');

  useEffect(() => {
    if (position) addToRecent(position.id);
  }, [position, addToRecent]);

  if (!position) {
    return (
      <>
        <div className="nav-bar">
          <button className="nav-back" onClick={() => navigate(-1)}><ChevronLeft size={18} /> Back</button>
          <h1>Not Found</h1>
        </div>
        <div className="empty-state">
          <div className="es-title">Position not found</div>
        </div>
      </>
    );
  }

  const fav = isFavorite(position.id);

  return (
    <>
      <div className="nav-bar">
        <button className="nav-back" onClick={() => navigate(-1)}>
          <ChevronLeft size={18} /> Back
        </button>
        <h1 style={{ fontSize: 14, maxWidth: '55%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {position.name}
        </h1>
        <button className="nav-action" onClick={() => toggleFavorite(position.id)}>
          <Star size={18} fill={fav ? 'var(--yellow)' : 'none'} color={fav ? 'var(--yellow)' : 'var(--text-tertiary)'} />
        </button>
      </div>

      <div className="page" style={{ paddingTop: 12 }}>
        <HeaderCard position={position} />
        <QuickReference position={position} />
        <StepsSection position={position} />
        {position.techniqueSuggestion && <TechniqueCard technique={position.techniqueSuggestion} />}
        <CriteriaSection items={position.evaluationCriteria} />
        {position.commonErrors.length > 0 && <ErrorsSection items={position.commonErrors} />}
        {position.tipsAndTricks.length > 0 && <TipsSection items={position.tipsAndTricks} />}
        {position.alternateContext && <AlternateSection context={position.alternateContext} />}
      </div>
    </>
  );
}

function HeaderCard({ position }: { position: Position }) {
  return (
    <div className="detail-header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>{position.projection}</span>
        {position.isStandard ? (
          <span className="badge badge-green">Standard</span>
        ) : (
          <span className="badge badge-orange">Alternate</span>
        )}
      </div>
      <div className="text-sm text-secondary">{position.patientPosition}</div>
    </div>
  );
}

function QuickReference({ position }: { position: Position }) {
  const rows = [
    { icon: <Target size={13} />, label: 'Central Ray', value: position.centralRay },
    { icon: <Ruler size={13} />, label: 'SID', value: position.sid },
    { icon: <RectangleHorizontal size={13} />, label: 'IR Size', value: position.imageReceptorSize },
    { icon: <RectangleHorizontal size={13} />, label: 'Orient.', value: position.orientation },
    { icon: <Grid3x3 size={13} />, label: 'Grid', value: position.grid },
    { icon: <Scissors size={13} />, label: 'Collim.', value: position.collimation },
    { icon: <MapPin size={13} />, label: 'Markers', value: position.markers },
    { icon: <Shield size={13} />, label: 'Shield', value: position.shielding },
    { icon: <Wind size={13} />, label: 'Resp.', value: position.respiration },
  ];

  return (
    <div className="detail-section">
      <div className="fw-600 mb-8" style={{ fontSize: 14, letterSpacing: '-0.01em' }}>Quick Reference</div>
      {rows.map((r, i) => (
        <div className="qr-row" key={i}>
          <span style={{ color: 'var(--blue)', flexShrink: 0, width: 16, marginTop: 1, opacity: 0.7 }}>{r.icon}</span>
          <span className="qr-label">{r.label}</span>
          <span className="qr-value">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function StepsSection({ position }: { position: Position }) {
  return (
    <div className="detail-section">
      <div className="fw-600 mb-8" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '-0.01em' }}>
        <ListOrdered size={15} style={{ opacity: 0.6 }} /> Positioning Steps
      </div>
      {position.positioningSteps.map((step, i) => (
        <div className="step-row" key={i}>
          <span className="step-number">{i + 1}</span>
          <span className="step-text">{step}</span>
        </div>
      ))}
    </div>
  );
}

function TechniqueCard({ technique }: { technique: TechniqueSuggestion }) {
  return (
    <div className="detail-section">
      <div className="fw-600 mb-8" style={{ fontSize: 14, letterSpacing: '-0.01em' }}>Technique Chart</div>
      <div className="technique-grid">
        {[
          { label: 'Small', kvp: technique.smallKvp, mas: technique.smallMas, color: 'var(--green)' },
          { label: 'Medium', kvp: technique.mediumKvp, mas: technique.mediumMas, color: 'var(--blue)' },
          { label: 'Large', kvp: technique.largeKvp, mas: technique.largeMas, color: 'var(--purple)' },
        ].map(col => (
          <div className="technique-col" key={col.label}>
            <div style={{ fontSize: 10, fontWeight: 600, color: col.color, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{col.label}</div>
            <div>
              <div className="technique-value">{col.kvp}</div>
              <div className="technique-unit">kVp</div>
            </div>
            <div style={{ marginTop: 4 }}>
              <div className="technique-value">{col.mas.toFixed(1)}</div>
              <div className="technique-unit">mAs</div>
            </div>
          </div>
        ))}
      </div>
      {technique.notes && (
        <div className="text-xs text-secondary mt-8" style={{ lineHeight: 1.4 }}>
          {technique.notes}
        </div>
      )}
    </div>
  );
}

function CriteriaSection({ items }: { items: string[] }) {
  return (
    <div className="detail-section">
      <div className="fw-600 mb-8" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '-0.01em' }}>
        <CheckCircle size={15} color="var(--green)" style={{ opacity: 0.7 }} /> Evaluation Criteria
      </div>
      {items.map((item, i) => (
        <div className="check-row" key={i}>
          <CheckCircle size={13} color="var(--green)" className="icon" style={{ opacity: 0.6 }} />
          <span className="text">{item}</span>
        </div>
      ))}
    </div>
  );
}

function ErrorsSection({ items }: { items: string[] }) {
  return (
    <div className="detail-section error-section">
      <div className="fw-600 mb-8" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '-0.01em' }}>
        <AlertTriangle size={15} color="var(--red)" style={{ opacity: 0.7 }} /> Common Errors
      </div>
      {items.map((item, i) => (
        <div className="check-row" key={i}>
          <XCircle size={13} color="var(--red)" className="icon" style={{ opacity: 0.6 }} />
          <span className="text">{item}</span>
        </div>
      ))}
    </div>
  );
}

function TipsSection({ items }: { items: string[] }) {
  return (
    <div className="detail-section tips-section">
      <div className="fw-600 mb-8" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '-0.01em' }}>
        <Lightbulb size={15} color="var(--yellow)" style={{ opacity: 0.7 }} /> Tips
      </div>
      {items.map((item, i) => (
        <div className="check-row" key={i}>
          <Star size={11} fill="var(--yellow)" color="var(--yellow)" className="icon" style={{ opacity: 0.5 }} />
          <span className="text">{item}</span>
        </div>
      ))}
    </div>
  );
}

function AlternateSection({ context }: { context: AlternateContext }) {
  return (
    <div className="detail-section alternate-section">
      <div className="fw-600 mb-8" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--orange)', letterSpacing: '-0.01em' }}>
        <HelpCircle size={15} /> When to Use
      </div>
      <div className="text-sm mb-8">{context.reason}</div>

      {context.patientFactors.length > 0 && (
        <>
          <div className="text-xxs fw-600 text-secondary mt-8 mb-4" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>Best for</div>
          <div className="flow-layout">
            {context.patientFactors.map(f => (
              <span className="flow-tag" key={f}>{f}</span>
            ))}
          </div>
        </>
      )}

      <div className="text-xxs fw-600 text-secondary mt-8 mb-4" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>Advantages</div>
      <div className="text-sm">{context.advantagesOverStandard}</div>
    </div>
  );
}
