import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, ChevronUp, SlidersHorizontal, Star, Info } from 'lucide-react';
import { PatientFactor, allPatientFactors } from '../types';
import { bodyPartById } from '../data/bodyPartData';
import { standardPositions, alternatePositions, alternatePositionsWithFactors } from '../data/positionDatabase';
import { useFavorites } from '../context/useFavorites';

export default function PositionListView() {
  const { region, bodyPartId } = useParams<{ region: string; bodyPartId: string }>();
  const navigate = useNavigate();
  const { isFavorite } = useFavorites();

  const bodyPart = bodyPartById(bodyPartId || '');
  const stdPositions = standardPositions(bodyPartId || '');
  const allAlts = alternatePositions(bodyPartId || '');

  const [showFilter, setShowFilter] = useState(false);
  const [selectedFactors, setSelectedFactors] = useState<Set<PatientFactor>>(new Set());

  const filteredAlts = alternatePositionsWithFactors(bodyPartId || '', selectedFactors);

  const toggleFactor = (f: PatientFactor) => {
    setSelectedFactors(prev => {
      const next = new Set(prev);
      if (next.has(f)) next.delete(f); else next.add(f);
      return next;
    });
  };

  return (
    <>
      <div className="nav-bar">
        <button className="nav-back" onClick={() => navigate(`/body-map/${encodeURIComponent(region || '')}`)}>
          <ChevronLeft size={18} /> Back
        </button>
        <h1>{bodyPart?.name || bodyPartId}</h1>
      </div>

      <div className="page">
        {stdPositions.length > 0 && (
          <>
            <div className="section-header" style={{ marginTop: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--green)', display: 'inline-block' }} />
              Standard
            </div>
            <div className="card-grid" style={{ padding: 0, marginBottom: 20 }}>
              {stdPositions.map(pos => (
                <div
                  key={pos.id}
                  className="position-card"
                  onClick={() => navigate(`/position/${pos.id}`)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="badge badge-blue">{pos.projection}</span>
                    <span style={{ flex: 1 }} />
                    {isFavorite(pos.id) && <Star size={11} fill="var(--yellow)" color="var(--yellow)" />}
                  </div>
                  <div className="fw-600" style={{ fontSize: 13, letterSpacing: '-0.01em' }}>{pos.name}</div>
                  <div className="text-xxs text-secondary" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {pos.patientPosition}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {allAlts.length > 0 && (
          <>
            <div style={{ borderTop: '0.5px solid var(--separator)', margin: '0 0 16px' }} />
            <div className="section-header">
              <span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--orange)', display: 'inline-block' }} />
              Alternate
            </div>

            <button
              className={`filter-bar${selectedFactors.size > 0 ? ' active' : ''}`}
              onClick={() => setShowFilter(!showFilter)}
              style={{ width: '100%', marginBottom: 12 }}
            >
              <SlidersHorizontal size={14} />
              <span style={{ flex: 1, textAlign: 'left' }}>
                {selectedFactors.size === 0
                  ? 'Filter by Patient Factors'
                  : `${selectedFactors.size} Factor${selectedFactors.size === 1 ? '' : 's'}`}
              </span>
              {showFilter ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showFilter && (
              <div style={{ background: 'var(--bg-tertiary)', borderRadius: 12, padding: 12, marginBottom: 12 }}>
                <div className="text-xs text-secondary mb-8">Select patient conditions:</div>
                <div className="factor-grid">
                  {allPatientFactors.map(f => (
                    <button
                      key={f}
                      className={`factor-chip${selectedFactors.has(f) ? ' selected' : ''}`}
                      onClick={() => toggleFactor(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                {selectedFactors.size > 0 && (
                  <button
                    className="text-xs mt-8"
                    style={{ color: 'var(--red)', background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => setSelectedFactors(new Set())}
                  >
                    Clear All
                  </button>
                )}
              </div>
            )}

            {filteredAlts.length === 0 && selectedFactors.size > 0 ? (
              <div style={{ padding: 20, textAlign: 'center', color: 'var(--text-secondary)', fontSize: 13, background: 'var(--bg-tertiary)', borderRadius: 12 }}>
                No alternate positions match the selected factors.
              </div>
            ) : (
              <div className="card-grid" style={{ padding: 0 }}>
                {filteredAlts.map(pos => (
                  <div
                    key={pos.id}
                    className="position-card alternate"
                    onClick={() => navigate(`/position/${pos.id}`)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span className="badge badge-orange">{pos.projection}</span>
                      <span style={{ flex: 1 }} />
                      {isFavorite(pos.id) && <Star size={11} fill="var(--yellow)" color="var(--yellow)" />}
                    </div>
                    <div className="fw-600" style={{ fontSize: 13, letterSpacing: '-0.01em' }}>{pos.name}</div>
                    <div className="text-xxs text-secondary" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {pos.patientPosition}
                    </div>
                    {pos.alternateContext && (
                      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-start', color: 'var(--orange)', fontSize: 10, marginTop: 2 }}>
                        <Info size={10} style={{ flexShrink: 0, marginTop: 1 }} />
                        <span style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {pos.alternateContext.reason}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
