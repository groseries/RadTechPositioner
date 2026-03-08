import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Brain, Smile, Eye, Wind, AlertCircle, Grid3X3, Circle, ArrowUpDown, Zap, Grid, Triangle, Hand, HandGrab, ThumbsUp, Droplet, User, Wrench, AlertTriangle } from 'lucide-react';
import { BodyRegion, bodyRegionColors } from '../types';
import { bodyPartsForRegion } from '../data/bodyPartData';
import { standardPositions, alternatePositions } from '../data/positionDatabase';

const systemImageToIcon = (iconName: string, color: string) => {
  const props = { size: 20, color };
  switch (iconName) {
    case "brain.head.profile": return <Brain {...props} />;
    case "face.smiling": return <Smile {...props} />;
    case "nose": return <AlertCircle {...props} />;
    case "eye": return <Eye {...props} />;
    case "wind": return <Wind {...props} />;
    case "mouth": return <AlertCircle {...props} />;
    case "circle.grid.cross": return <Grid3X3 {...props} />;
    case "triangle": return <Triangle {...props} />;
    case "ear": return <AlertCircle {...props} />;
    case "circle.bottomhalf.filled": return <Circle {...props} />;
    case "arrow.up.and.down": return <ArrowUpDown {...props} />;
    case "circle.and.line.horizontal": return <Circle {...props} />;
    case "arrow.up.and.down.circle": return <Circle {...props} />;
    case "lungs": return <AlertCircle {...props} />;
    case "rectangle.split.3x1": return <Grid {...props} />;
    case "rectangle": return <Grid {...props} />;
    case "circle.grid.2x2": return <Grid {...props} />;
    case "circle.circle": return <Circle {...props} />;
    case "line.diagonal": return <AlertCircle {...props} />;
    case "triangle.fill": return <Triangle {...props} />;
    case "point.topleft.down.to.point.bottomright.curvepath": return <AlertCircle {...props} />;
    case "rectangle.portrait": return <Grid {...props} />;
    case "angle": return <AlertCircle {...props} />;
    case "rectangle.split.1x2": return <Grid {...props} />;
    case "hand.point.up": return <Hand {...props} />;
    case "hand.raised": return <HandGrab {...props} />;
    case "hand.point.right": return <Hand {...props} />;
    case "hand.thumbsup": return <ThumbsUp {...props} />;
    case "oval": return <Circle {...props} />;
    case "arrow.down.circle": return <Circle {...props} />;
    case "triangle.bottomhalf.filled": return <Triangle {...props} />;
    case "rectangle.split.2x1": return <Grid {...props} />;
    case "s.circle": return <Circle {...props} />;
    case "rectangle.portrait.fill": return <Grid {...props} />;
    case "exclamationmark.triangle": return <AlertTriangle {...props} />;
    case "drop": return <Droplet {...props} />;
    case "figure.stand": return <User {...props} />;
    case "arrow.up.arrow.down": return <ArrowUpDown {...props} />;
    case "staroflife": return <Zap {...props} />;
    case "wrench": return <Wrench {...props} />;
    case "oval.portrait": return <Circle {...props} />;
    case "foot": return <AlertCircle {...props} />;
    case "smallcircle.filled.circle": return <Circle {...props} />;
    default: return <Circle {...props} />;
  }
};

export default function BodyPartListView() {
  const { region } = useParams<{ region: string }>();
  const navigate = useNavigate();

  const bodyRegion = region as BodyRegion;
  const parts = bodyPartsForRegion(bodyRegion);
  const color = bodyRegionColors[bodyRegion] || 'var(--blue)';

  return (
    <>
      <div className="nav-bar">
        <button className="nav-back" onClick={() => navigate('/body-map')}>
          <ChevronLeft size={18} /> Back
        </button>
        <h1>{bodyRegion}</h1>
      </div>

      <div className="card-grid" style={{ paddingTop: 16 }}>
        {parts.map(part => {
          const stdCount = standardPositions(part.id).length;
          const altCount = alternatePositions(part.id).length;

          return (
            <div
              key={part.id}
              className="body-part-card"
              onClick={() => navigate(`/body-map/${encodeURIComponent(bodyRegion)}/${part.id}`)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div>
                  {systemImageToIcon(part.systemImage, color)}
                </div>
                {altCount > 0 && (
                  <span style={{ fontSize: 11, color: 'var(--orange)', fontWeight: 600 }}>{altCount}</span>
                )}
              </div>
              <div className="fw-600" style={{ fontSize: 14, letterSpacing: '-0.01em' }}>{part.name}</div>
              <div className="text-xs text-secondary" style={{ lineHeight: 1.3 }}>{part.description}</div>
              {(stdCount > 0 || altCount > 0) && (
                <div style={{ display: 'flex', gap: 8, fontSize: 10, marginTop: 2 }}>
                  <span style={{ color: 'var(--green)' }}>{stdCount} std</span>
                  {altCount > 0 && <span style={{ color: 'var(--orange)' }}>{altCount} alt</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
