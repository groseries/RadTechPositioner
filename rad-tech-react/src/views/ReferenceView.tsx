import { useState, type ReactElement } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { allBodyRegions } from '../types';
import { allBodyParts } from '../data/bodyPartData';
import { allPositions } from '../data/positionDatabase';

type SubView = null | 'exposure' | 'evaluation' | 'pathology' | 'landmarks' | 'grid' | 'contrast';

export default function ReferenceView() {
  const [subView, setSubView] = useState<SubView>(null);

  if (subView) {
    const views: Record<string, { title: string; component: ReactElement }> = {
      exposure: { title: 'Exposure Rules', component: <ExposureRules /> },
      evaluation: { title: 'Image Evaluation', component: <EvaluationChecklist /> },
      pathology: { title: 'Pathology', component: <PathologyGuide /> },
      landmarks: { title: 'Landmarks', component: <LandmarksGuide /> },
      grid: { title: 'Grid Selection', component: <GridGuide /> },
      contrast: { title: 'Contrast Media', component: <ContrastGuide /> },
    };
    const v = views[subView];
    return (
      <>
        <div className="nav-bar">
          <button className="nav-back" onClick={() => setSubView(null)}>
            <ChevronLeft size={18} /> Back
          </button>
          <h1>{v.title}</h1>
        </div>
        <div style={{ padding: '8px 0' }}>{v.component}</div>
      </>
    );
  }

  const totalPositions = allPositions.length;
  const standardCount = allPositions.filter(p => p.isStandard).length;

  return (
    <>
      <div className="page-title">Reference</div>

      <div className="grouped-section">
        <div className="grouped-section-header">Guides</div>
        <div className="grouped-section-content">
          {[
            { key: 'exposure', label: 'Exposure Rules & Formulas' },
            { key: 'evaluation', label: 'Image Evaluation Checklist' },
            { key: 'pathology', label: 'Common Pathology' },
            { key: 'landmarks', label: 'Surface Anatomy Landmarks' },
            { key: 'grid', label: 'Grid Selection Guide' },
            { key: 'contrast', label: 'Contrast Media' },
          ].map(item => (
            <div key={item.key} className="list-row" onClick={() => setSubView(item.key as SubView)}>
              <span className="text-sm" style={{ flex: 1 }}>{item.label}</span>
              <ChevronRight size={14} className="chevron" />
            </div>
          ))}
        </div>
      </div>

      <div className="grouped-section">
        <div className="grouped-section-header">Statistics</div>
        <div className="grouped-section-content" style={{ padding: '0 16px' }}>
          <div className="stat-row"><span className="text-sm">Body Parts</span><span className="stat-value">{allBodyParts.length}</span></div>
          <div className="stat-row"><span className="text-sm">Total Positions</span><span className="stat-value">{totalPositions}</span></div>
          <div className="stat-row"><span className="text-sm">Standard</span><span className="stat-value">{standardCount}</span></div>
          <div className="stat-row"><span className="text-sm">Alternate</span><span className="stat-value">{totalPositions - standardCount}</span></div>
          <div className="stat-row"><span className="text-sm">Regions</span><span className="stat-value">{allBodyRegions.length}</span></div>
        </div>
      </div>

      <div className="grouped-section">
        <div className="grouped-section-header">About</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span className="fw-600 text-sm">RadTech Positioner</span>
            <span className="text-xs text-secondary">v1.0.0</span>
          </div>
          <div className="text-xs text-secondary" style={{ lineHeight: 1.5, marginBottom: 12 }}>
            Radiographic positioning reference for study, clinical reference, and on-the-job problem solving.
          </div>
          <div className="text-xxs text-secondary" style={{ lineHeight: 1.4, opacity: 0.7 }}>
            This app is a reference tool and should not replace clinical judgment, department protocols, or radiologist guidance. Technique suggestions are guidelines only.
          </div>
        </div>
      </div>
    </>
  );
}

function ExposureRules() {
  return (
    <div className="grouped-section">
      <div className="grouped-section-header">Fundamental Rules</div>
      <div className="grouped-section-content" style={{ padding: 16 }}>
        <RuleCard title="15% Rule" formula="kVp x 1.15 = same density with half mAs" explanation="Increasing kVp by 15% has the same effect on image density as doubling mAs." />
        <RuleCard title="4 cm / 8 kVp Rule" formula="Every 4 cm increase, add 8 kVp" explanation="When body part thickness increases by 4 cm from baseline, increase kVp by 8." />
        <RuleCard title="Inverse Square Law" formula="I1/I2 = (D2)^2 / (D1)^2" explanation="Radiation intensity is inversely proportional to the square of the distance." />
        <RuleCard title="Density Maintenance" formula="new mAs = old mAs x (new SID / old SID)^2" explanation={'Example: 40" to 72" SID requires 3.24x the original mAs.'} />
        <RuleCard title="Reciprocity Law" formula="mAs = mA x Time" explanation="Any combo of mA and time producing the same mAs gives the same density." />
      </div>

      <div className="grouped-section-header" style={{ marginTop: 16 }}>Grid Conversion Factors</div>
      <div className="grouped-section-content" style={{ padding: '0 16px' }}>
        {[['No grid', '1x'], ['5:1', '2x'], ['6:1', '3x'], ['8:1', '4x'], ['10:1 or 12:1', '5x'], ['16:1', '6x']].map(([ratio, factor]) => (
          <div className="stat-row" key={ratio}><span className="text-sm">{ratio}</span><span className="stat-value">{factor}</span></div>
        ))}
      </div>

      <div className="grouped-section-header" style={{ marginTop: 16 }}>Pediatric Adjustments</div>
      <div className="grouped-section-content" style={{ padding: '0 16px' }}>
        {[['Newborn', '25% of adult'], ['1-5 years', '50% of adult'], ['6-12 years', '75% of adult'], ['13+ years', 'Near adult']].map(([age, adj]) => (
          <div className="stat-row" key={age}><span className="text-sm">{age}</span><span className="stat-value">{adj}</span></div>
        ))}
      </div>

      <div className="grouped-section-header" style={{ marginTop: 16 }}>Cast Adjustments</div>
      <div className="grouped-section-content" style={{ padding: '0 16px' }}>
        {[['Plaster (dry, small)', '+5-7 kVp'], ['Plaster (dry, large)', '+8-10 kVp'], ['Plaster (wet)', '2x mAs'], ['Fiberglass', '+3-4 kVp']].map(([t, adj]) => (
          <div className="stat-row" key={t}><span className="text-sm">{t}</span><span className="stat-value">{adj}</span></div>
        ))}
      </div>
    </div>
  );
}

function RuleCard({ title, formula, explanation }: { title: string; formula: string; explanation: string }) {
  return (
    <div style={{ padding: '6px 0' }}>
      <div className="fw-600 text-sm">{title}</div>
      <div className="rule-formula">{formula}</div>
      <div className="text-xs text-secondary" style={{ lineHeight: 1.4 }}>{explanation}</div>
    </div>
  );
}

function EvaluationChecklist() {
  const criteria = [
    "Correct anatomy demonstrated for the projection ordered",
    "Proper centering - anatomy centered on image",
    "Correct collimation - anatomy included without excessive field size",
    "Proper markers (R/L) visible and not superimposed on anatomy",
    "No motion blur",
    "Proper density/brightness - anatomy visible, not too light or dark",
    "Proper contrast - adequate gray scale for anatomy",
    "No artifacts (clothing, jewelry, leads, hair, etc.)",
    "Correct patient ID and demographics",
    "No rotation (unless oblique is intended)",
    "Correct number of projections for the ordered exam",
    "Gonadal/thyroid shielding applied when possible",
  ];

  return (
    <>
      <div className="grouped-section">
        <div className="grouped-section-header">Universal Criteria</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          {criteria.map((c, i) => (
            <div key={i} className="check-row">
              <span className="icon" style={{ color: 'var(--green)', opacity: 0.6 }}>-</span>
              <span className="text">{c}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grouped-section">
        <div className="grouped-section-header">Repeat Analysis</div>
        <div className="grouped-section-content" style={{ padding: '0 16px' }}>
          {[
            { cause: 'Positioning', pct: '~30%' },
            { cause: 'Exposure', pct: '~25%' },
            { cause: 'Motion', pct: '~20%' },
            { cause: 'Artifacts', pct: '~15%' },
            { cause: 'Other', pct: '~10%' },
          ].map(r => (
            <div className="stat-row" key={r.cause}>
              <span className="text-sm">{r.cause}</span>
              <span className="stat-value">{r.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function PathologyGuide() {
  return (
    <>
      <PathSection title="Chest" items={[
        { name: 'Pneumothorax', sign: 'Visceral pleural line with no lung markings beyond it', adjust: 'Decrease kVp' },
        { name: 'Pleural Effusion', sign: 'Blunting of costophrenic angles; meniscus sign', adjust: 'May need lateral decubitus' },
        { name: 'Pneumonia', sign: 'Consolidation; air bronchograms; silhouette sign', adjust: 'Standard technique' },
        { name: 'CHF/Edema', sign: 'Cephalization of vessels; Kerley B lines', adjust: 'Standard technique' },
        { name: 'Cardiomegaly', sign: 'CT ratio >50% on PA', adjust: 'PA at 72" SID required' },
      ]} />
      <PathSection title="Bone/Joint" items={[
        { name: 'Fracture', sign: 'Cortical disruption, lucent line, displacement', adjust: 'Orthogonal views needed' },
        { name: 'Dislocation', sign: 'Articular malalignment', adjust: 'Pre/post-reduction views' },
        { name: 'Osteoarthritis', sign: 'Joint space narrowing, osteophytes', adjust: 'Weight-bearing views' },
        { name: 'Osteoporosis', sign: 'Decreased bone density, cortical thinning', adjust: 'May decrease technique' },
      ]} />
      <PathSection title="Abdomen" items={[
        { name: 'Bowel Obstruction', sign: 'Dilated loops; air-fluid levels upright', adjust: 'Upright AND supine needed' },
        { name: 'Free Air', sign: 'Air under diaphragm on upright', adjust: 'Must be upright/decubitus' },
        { name: 'Kidney Stones', sign: 'Radiopaque densities along ureter', adjust: 'Some stones radiolucent' },
      ]} />
      <div className="grouped-section">
        <div className="grouped-section-header">Technique Adjustment</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          <div style={{ marginBottom: 8 }}>
            <div className="fw-600 text-sm" style={{ color: 'var(--red)' }}>Additive (increase)</div>
            <div className="text-xs text-secondary">Effusion, pneumonia, edema, ascites, Paget's</div>
          </div>
          <div>
            <div className="fw-600 text-sm" style={{ color: 'var(--green)' }}>Destructive (decrease)</div>
            <div className="text-xs text-secondary">Emphysema, pneumothorax, osteoporosis, atrophy</div>
          </div>
        </div>
      </div>
    </>
  );
}

function PathSection({ title, items }: { title: string; items: { name: string; sign: string; adjust: string }[] }) {
  return (
    <div className="grouped-section">
      <div className="grouped-section-header">{title}</div>
      <div className="grouped-section-content" style={{ padding: 16 }}>
        {items.map(item => (
          <div key={item.name} style={{ padding: '5px 0' }}>
            <div className="fw-600 text-sm">{item.name}</div>
            <div className="text-xs text-secondary" style={{ lineHeight: 1.4, marginTop: 1 }}>{item.sign}</div>
            <div className="text-xs" style={{ color: 'var(--orange)', marginTop: 1 }}>{item.adjust}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LandmarksGuide() {
  const sections = [
    { title: 'Vertebral Levels', items: [
      ['C1 (Atlas)', 'Mastoid tip'], ['C2-C3', 'Gonion'], ['C3-C4', 'Hyoid bone'],
      ['C5', 'Thyroid cartilage'], ['C7-T1', 'Vertebra prominens'], ['T2-T3', 'Jugular notch'],
      ['T4-T5', 'Sternal angle'], ['T7', 'Inferior scapula angle'], ['T9-T10', 'Xiphoid'],
      ['L2-L3', 'Lower costal margin'], ['L3-L4', 'Umbilicus'], ['L4-L5', 'Iliac crest'],
      ['S1-S2', 'ASIS'], ['Coccyx', 'Symphysis pubis'],
    ]},
    { title: 'Upper Extremity', items: [
      ['Coracoid', '1" inf/med to lateral clavicle'], ['Acromion', 'Lateral shoulder point'],
      ['Epicondyles', 'Medial/lateral at elbow'], ['Olecranon', 'Elbow point'],
      ['Radial Styloid', 'Lateral wrist'], ['Ulnar Styloid', 'Medial wrist'],
      ['Snuffbox', 'Scaphoid location'],
    ]},
    { title: 'Lower Extremity', items: [
      ['Greater Trochanter', 'Lateral hip'], ['ASIS', 'Anterior pelvis'],
      ['Patella', 'Kneecap'], ['Tibial Tuberosity', '1" below patella'],
      ['Medial Malleolus', 'Inner ankle'], ['Lateral Malleolus', 'Outer ankle'],
      ['Base 5th MT', 'Lateral midfoot'], ['Calcaneus', 'Heel bone'],
    ]},
    { title: 'Skull', items: [
      ['Nasion', 'Bridge of nose'], ['Glabella', 'Between eyebrows'],
      ['Acanthion', 'Nose-lip junction'], ['Mental Point', 'Chin tip'],
      ['Gonion', 'Mandible angle'], ['EAM', 'External auditory meatus'],
      ['Outer Canthus', 'Outer eye corner'], ['Mastoid', 'Behind ear'],
    ]},
  ];

  return (
    <>
      {sections.map(section => (
        <div className="grouped-section" key={section.title}>
          <div className="grouped-section-header">{section.title}</div>
          <div className="grouped-section-content" style={{ padding: '0 16px' }}>
            {section.items.map(([name, desc]) => (
              <div key={name} style={{ display: 'flex', padding: '7px 0', borderBottom: '0.5px solid var(--separator)' }}>
                <span className="fw-600 text-sm" style={{ width: 110, flexShrink: 0 }}>{name}</span>
                <span className="text-xs text-secondary" style={{ paddingTop: 1 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function GridGuide() {
  return (
    <>
      <div className="grouped-section">
        <div className="grouped-section-header">When to Use</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          <div className="fw-600 text-sm mb-4">Use when part thickness exceeds 10-12 cm</div>
          {[
            ['Tabletop', 'Extremities, fingers, toes, wrist, hand, foot'],
            ['Grid recommended', 'Spine, pelvis, hip, abdomen, chest, skull'],
            ['Grid required', 'Lateral lumbar, lateral thoracic, cross-table hip'],
          ].map(([cat, parts]) => (
            <div key={cat} style={{ padding: '5px 0' }}>
              <div className="fw-600 text-sm">{cat}</div>
              <div className="text-xs text-secondary">{parts}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grouped-section">
        <div className="grouped-section-header">Grid Ratios</div>
        <div className="grouped-section-content" style={{ padding: '0 16px' }}>
          {[['5:1', 'Portable, forgiving'], ['8:1', 'General purpose'],
            ['10:1', 'Table/upright Buckys'], ['12:1', 'High scatter']
          ].map(([ratio, use]) => (
            <div className="stat-row" key={ratio}>
              <span className="fw-600 text-sm" style={{ color: 'var(--blue)' }}>{ratio}</span>
              <span className="text-xs text-secondary">{use}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grouped-section">
        <div className="grouped-section-header">Grid Errors</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          {[
            ['Off-center', 'Uniform cutoff across image'],
            ['Off-level', 'Uniform cutoff across image'],
            ['Off-focus', 'Cutoff at edges, denser center'],
            ['Upside down', 'Severe edge cutoff, center only'],
          ].map(([err, effect]) => (
            <div key={err} style={{ padding: '4px 0' }}>
              <div className="fw-600 text-sm">{err}</div>
              <div className="text-xs" style={{ color: 'var(--red)' }}>{effect}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ContrastGuide() {
  return (
    <>
      <ContrastSection title="Barium Sulfate" rows={[
        ['Type', 'Positive (radiopaque)'],
        ['Route', 'Oral or rectal only'],
        ['Uses', 'Upper GI, barium swallow, small bowel, barium enema'],
        ['Contraindications', 'Suspected perforation'],
      ]} warning="Never use barium if perforation is suspected. Use water-soluble contrast instead." />

      <ContrastSection title="Water-Soluble Iodinated" rows={[
        ['Type', 'Positive (radiopaque)'],
        ['Route', 'Oral or rectal'],
        ['Uses', 'When barium contraindicated; post-op leak check'],
      ]} />

      <ContrastSection title="Iodinated IV" rows={[
        ['Type', 'Positive (radiopaque)'],
        ['Route', 'Intravenous'],
        ['Uses', 'IVP, CT contrast, angiography'],
        ['Contraindications', 'Allergy, renal insufficiency, metformin'],
      ]} />

      <ContrastSection title="Negative Contrast" rows={[
        ['Type', 'Radiolucent'],
        ['Agents', 'Air, CO2, oxygen'],
        ['Uses', 'Double contrast, arthrography'],
      ]} />

      <div className="grouped-section">
        <div className="grouped-section-header">Reaction Protocol</div>
        <div className="grouped-section-content" style={{ padding: 16 }}>
          <div className="fw-600 text-sm mb-4">Before contrast:</div>
          {[
            'Check allergies',
            'Check kidney function (creatinine, BUN, GFR)',
            'Check metformin use',
            'Obtain informed consent',
            'Ensure crash cart available',
            'Know department protocol',
            'Monitor 30 min post-injection',
          ].map((step, i) => (
            <div key={i} className="text-xs" style={{ padding: '2px 0', lineHeight: 1.5 }}>{i + 1}. {step}</div>
          ))}
        </div>
      </div>
    </>
  );
}

function ContrastSection({ title, rows, warning }: { title: string; rows: string[][]; warning?: string }) {
  return (
    <div className="grouped-section">
      <div className="grouped-section-header">{title}</div>
      <div className="grouped-section-content" style={{ padding: 16 }}>
        {rows.map(([label, value]) => (
          <div key={label} style={{ padding: '3px 0' }}>
            <div className="text-xxs fw-600 text-secondary" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
            <div className="text-sm">{value}</div>
          </div>
        ))}
        {warning && (
          <div style={{ marginTop: 8, padding: '6px 10px', background: 'rgba(255, 51, 51, 0.04)', borderRadius: 8 }}>
            <div className="text-xs" style={{ color: 'var(--red)', lineHeight: 1.4 }}>{warning}</div>
          </div>
        )}
      </div>
    </div>
  );
}
