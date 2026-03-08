import { useNavigate } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { positionById } from '../data/positionDatabase';
import { bodyPartById } from '../data/bodyPartData';
import { useFavorites } from '../context/useFavorites';

export default function FavoritesView() {
  const navigate = useNavigate();
  const { favoriteIds, recentIds, isFavorite } = useFavorites();

  const favoritePositions = [...favoriteIds]
    .map(id => positionById(id))
    .filter(Boolean)
    .sort((a, b) => a!.name.localeCompare(b!.name));

  const recentPositions = recentIds
    .map(id => positionById(id))
    .filter(Boolean);

  if (favoritePositions.length === 0 && recentPositions.length === 0) {
    return (
      <>
        <div className="page-title">Favorites</div>
        <div className="empty-state">
          <Star size={36} />
          <div className="es-title">No Favorites</div>
          <div className="es-sub">Tap the star on any position to save it here</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="page-title">Favorites</div>

      {favoritePositions.length > 0 && (
        <div className="grouped-section">
          <div className="grouped-section-header">Saved</div>
          <div className="grouped-section-content">
            {favoritePositions.map(pos => pos && (
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
    </>
  );
}
