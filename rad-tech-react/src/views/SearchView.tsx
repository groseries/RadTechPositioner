import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, ChevronRight } from 'lucide-react';
import { allBodyRegions, bodyRegionColors } from '../types';
import { bodyPartsForRegion } from '../data/bodyPartData';
import { searchPositions, positionById } from '../data/positionDatabase';
import { bodyPartById } from '../data/bodyPartData';
import { useFavorites } from '../context/useFavorites';

export default function SearchView() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { recentIds, isFavorite } = useFavorites();

  const results = query ? searchPositions(query) : [];
  const recentPositions = recentIds.map(id => positionById(id)).filter(Boolean);

  return (
    <>
      <div className="page-title">Search</div>
      <div className="search-bar">
        <div className="search-wrapper">
          <Search size={16} />
          <input
            className="search-input"
            type="text"
            placeholder="Positions, projections, body parts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {!query ? (
        <div style={{ padding: '8px 0' }}>
          {recentPositions.length > 0 && (
            <div className="grouped-section">
              <div className="grouped-section-header">Recent</div>
              <div className="grouped-section-content">
                {recentPositions.map(pos => pos && (
                  <div key={pos.id} className="list-row" onClick={() => navigate(`/position/${pos.id}`)}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span className="fw-600 text-sm">{pos.name}</span>
                        {isFavorite(pos.id) && <Star size={10} fill="var(--yellow)" color="var(--yellow)" />}
                      </div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 3, alignItems: 'center' }}>
                        <span className={`badge ${pos.isStandard ? 'badge-blue' : 'badge-orange'}`}>
                          {pos.projection}
                        </span>
                        {(() => {
                          const bp = bodyPartById(pos.bodyPartId);
                          return bp ? <span className="text-xs text-secondary">{bp.name}</span> : null;
                        })()}
                      </div>
                    </div>
                    <ChevronRight size={14} className="chevron" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grouped-section">
            <div className="grouped-section-header">Browse by Region</div>
            <div className="grouped-section-content">
              {allBodyRegions.map(region => (
                <div
                  key={region}
                  className="list-row"
                  onClick={() => navigate(`/body-map/${encodeURIComponent(region)}`)}
                >
                  <span style={{
                    width: 28, height: 28, borderRadius: 7,
                    background: `${bodyRegionColors[region]}10`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 600, color: bodyRegionColors[region]
                  }}>
                    {bodyPartsForRegion(region).length}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div className="text-sm" style={{ letterSpacing: '-0.01em' }}>{region}</div>
                  </div>
                  <ChevronRight size={14} className="chevron" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="empty-state">
          <Search size={36} />
          <div className="es-title">No Results</div>
          <div className="es-sub">Try "AP", "lateral", "chest", or "wrist"</div>
        </div>
      ) : (
        <div className="grouped-section" style={{ marginTop: 8 }}>
          <div className="grouped-section-header">{results.length} Results</div>
          <div className="grouped-section-content">
            {results.map(pos => (
              <div key={pos.id} className="list-row" onClick={() => navigate(`/position/${pos.id}`)}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span className="fw-600 text-sm">{pos.name}</span>
                    {isFavorite(pos.id) && <Star size={10} fill="var(--yellow)" color="var(--yellow)" />}
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 3, alignItems: 'center' }}>
                    <span className={`badge ${pos.isStandard ? 'badge-blue' : 'badge-orange'}`}>
                      {pos.projection}
                    </span>
                    {(() => {
                      const bp = bodyPartById(pos.bodyPartId);
                      return bp ? <span className="text-xs text-secondary">{bp.name}</span> : null;
                    })()}
                    {!pos.isStandard && <span className="text-xxs" style={{ color: 'var(--orange)' }}>Alt</span>}
                  </div>
                </div>
                <ChevronRight size={14} className="chevron" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
