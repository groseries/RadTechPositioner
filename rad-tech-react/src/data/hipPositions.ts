import type { Position } from '../types';
import { PatientFactor } from '../types';

export const hipPositions: Position[] = [
  // Hip Routine
  {
    id: "hip_ap",
    name: "Hip AP",
    bodyPartId: "hip_routine",
    isStandard: true,
    projection: "AP",
    patientPosition: "Supine, leg internally rotated 15-20 degrees",
    centralRay: "Perpendicular to IR at femoral neck (2.5 inches distal to ASIS on a line perpendicular to midpoint between ASIS and symphysis)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include acetabulum, femoral head/neck, and proximal femur to below lesser trochanter",
    markers: "R or L",
    shielding: "Gonadal shield on opposite side if possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 20.0, mediumKvp: 80, mediumMas: 30.0, largeKvp: 85, largeMas: 40.0, notes: null },
    positioningSteps: [
      "Patient supine, center affected hip to IR",
      "Internally rotate leg 15-20 degrees (toes pointing inward)",
      "This places femoral neck parallel to IR (unforeshortened)",
      "Center to femoral neck area",
      "DO NOT internally rotate if fracture is suspected!"
    ],
    evaluationCriteria: [
      "Femoral neck in full profile without foreshortening",
      "Greater trochanter in profile laterally",
      "Lesser trochanter minimally visible (or not at all) medially (confirms internal rotation)",
      "Acetabulum well demonstrated",
      "Femoral head within acetabulum",
      "Include proximal femur to below lesser trochanter"
    ],
    commonErrors: [
      "Not internally rotated - femoral neck foreshortened",
      "Internally rotating a suspected fracture - NEVER",
      "Not including enough proximal femur",
      "Over-rotation"
    ],
    tipsAndTricks: [
      "15-20 degrees internal rotation is KEY for femoral neck",
      "If lesser trochanter is visible in profile medially = not enough internal rotation",
      "NEVER rotate if fracture is suspected - take as-is and note position",
      "Compare with opposite hip if clinical question requires it"
    ],
    alternateContext: null
  },

  {
    id: "hip_frog_leg",
    name: "Hip Frog-Leg Lateral (Modified Cleaves)",
    bodyPartId: "hip_routine",
    isStandard: true,
    projection: "Frog-Leg Lateral (unilateral or bilateral)",
    patientPosition: "Supine, knee flexed, hip externally rotated and abducted",
    centralRay: "Perpendicular to IR at femoral neck",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include acetabulum and proximal femur",
    markers: "R or L",
    shielding: "Gonadal shield when possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 20.0, mediumKvp: 80, mediumMas: 30.0, largeKvp: 85, largeMas: 40.0, notes: null },
    positioningSteps: [
      "Patient supine",
      "Flex knee of affected side",
      "Externally rotate hip - let knee drop laterally",
      "Plantar surface of foot may rest against opposite knee/leg",
      "Center to femoral neck",
      "DO NOT use frog-leg if hip fracture is suspected - use cross-table lateral instead"
    ],
    evaluationCriteria: [
      "Femoral head, neck, and proximal shaft in near-lateral profile",
      "Greater trochanter superimposed on femoral neck",
      "Acetabulum visible",
      "Hip joint visualized"
    ],
    commonErrors: [
      "Using frog-leg on a suspected hip fracture - causes extreme pain and may displace fracture!",
      "Insufficient abduction - not a true lateral",
      "Patient cannot tolerate position due to pain"
    ],
    tipsAndTricks: [
      "NEVER frog-leg a suspected hip fracture - use cross-table lateral!",
      "Frog-leg is used for routine hip evaluation, NOT trauma",
      "Good for Legg-Calve-Perthes, slipped capital femoral epiphysis (SCFE) screening",
      "Bilateral frog-leg is classic for pediatric hip evaluation"
    ],
    alternateContext: null
  },

  // Surgical/Trauma Hip
  {
    id: "hip_cross_table_lateral",
    name: "Hip Cross-Table Lateral (Surgical Lateral)",
    bodyPartId: "hip_surgical",
    isStandard: true,
    projection: "Cross-Table (Horizontal Beam) Lateral",
    patientPosition: "Supine, unaffected leg raised and supported, affected leg in position as-is",
    centralRay: "Horizontal beam, perpendicular to femoral neck from lateral side",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid cassette placed vertically against affected hip (medial side, angled into groin)",
    collimation: "Include femoral head, neck, and proximal shaft",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 80, smallMas: 30.0, mediumKvp: 85, mediumMas: 40.0, largeKvp: 90, largeMas: 50.0, notes: "Higher technique needed for cross-table through soft tissue" },
    positioningSteps: [
      "Patient REMAINS SUPINE - do NOT move the affected leg",
      "Raise the UNAFFECTED leg (flex hip and knee, support on padding or have patient hold)",
      "Place grid cassette vertically against affected hip, parallel to femoral neck",
      "Tuck the top of the cassette into the iliac crest/groin area",
      "Direct horizontal beam from the lateral side, perpendicular to femoral neck",
      "CR enters at the lateral thigh, directed medially through the femoral neck"
    ],
    evaluationCriteria: [
      "Femoral head and neck in lateral profile",
      "Femoral neck without foreshortening (if possible)",
      "Acetabulum visible",
      "Greater and lesser trochanters visible",
      "Hardware visible if post-surgical"
    ],
    commonErrors: [
      "Moving the affected leg - could displace a fracture!",
      "Unaffected leg not raised enough - superimposed on affected hip",
      "Grid cassette not angled properly - grid cut-off",
      "Beam not truly horizontal - distortion"
    ],
    tipsAndTricks: [
      "This is THE trauma hip lateral - requires NO movement of affected leg",
      "Raise the opposite leg, NOT the affected side",
      "Grid cassette must be parallel to the femoral neck for best results",
      "Tube is on the LATERAL side of the patient, IR on the MEDIAL side (in the groin)",
      "Also called 'surgical lateral' because it's used pre- and post-operatively"
    ],
    alternateContext: null
  },

  {
    id: "hip_danelius_miller",
    name: "Hip Danelius-Miller (Trauma Alternative)",
    bodyPartId: "hip_surgical",
    isStandard: false,
    projection: "Inferosuperior (Danelius-Miller)",
    patientPosition: "Supine, affected leg as-is, IR on top of iliac crest",
    centralRay: "Directed superiorly from below, through affected hip to IR on top",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid cassette on top of hip",
    collimation: "Femoral head, neck, acetabulum",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 80, smallMas: 30.0, mediumKvp: 85, mediumMas: 40.0, largeKvp: 90, largeMas: 50.0, notes: null },
    positioningSteps: [
      "Patient supine, DO NOT move affected leg",
      "Raise unaffected leg to clear beam path",
      "Place IR on top of the iliac crest of affected side",
      "Direct CR from below (inferior), angling superiorly through the hip to the IR on top",
      "This is an alternative to the standard cross-table lateral"
    ],
    evaluationCriteria: [
      "Femoral head and neck in lateral profile",
      "Similar anatomy to cross-table lateral",
      "Acetabulum visible"
    ],
    commonErrors: ["Beam angle incorrect", "IR not properly positioned on top of hip"],
    tipsAndTricks: [
      "Alternative to cross-table lateral when standard approach is not feasible",
      "Requires NO movement of affected limb",
      "The beam comes from below the table through the hip"
    ],
    alternateContext: {
      reason: "Cannot perform standard cross-table lateral due to positioning limitations",
      patientFactors: [PatientFactor.Trauma, PatientFactor.Immobile, PatientFactor.Obese, PatientFactor.Stretcher],
      advantagesOverStandard: "Alternative beam path when standard cross-table lateral is not achievable"
    }
  },

  // Hip Prosthesis
  {
    id: "hip_prosthesis_ap",
    name: "Hip Prosthesis AP",
    bodyPartId: "hip_prosthesis",
    isStandard: true,
    projection: "AP (include entire prosthesis)",
    patientPosition: "Supine, leg in neutral or slight internal rotation",
    centralRay: "Perpendicular to IR centered to include entire prosthetic device",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17 if long stem prosthesis",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include entire prosthesis from acetabular component to tip of femoral stem",
    markers: "R or L",
    shielding: "Opposite side gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 80, smallMas: 30.0, mediumKvp: 85, mediumMas: 40.0, largeKvp: 90, largeMas: 50.0, notes: "May need increased technique for metal hardware" },
    positioningSteps: [
      "Patient supine, center affected hip to IR",
      "Include ENTIRE prosthesis - from acetabular cup to tip of femoral stem",
      "May need 14x17 IR if long-stem prosthesis extends down the femur",
      "Slight internal rotation if tolerated (and no precautions against it)",
      "Follow surgeon's instructions regarding rotation precautions"
    ],
    evaluationCriteria: [
      "Entire prosthesis visible from cup to stem tip",
      "Acetabular component position assessable (inclination, version)",
      "Femoral stem alignment visible",
      "Cement mantle (if cemented) visible around stem",
      "Periprosthetic fractures or loosening assessable"
    ],
    commonErrors: [
      "Not including tip of femoral stem - periprosthetic fractures may be missed!",
      "Rotating leg against surgeon's precautions (posterior approach: no internal rotation)",
      "Insufficient technique for hardware"
    ],
    tipsAndTricks: [
      "ALWAYS include the entire prosthesis including the tip of the femoral stem",
      "Periprosthetic fractures commonly occur at the stem tip - must include it",
      "Check with surgeon about rotation precautions before positioning",
      "May need higher kVp or mAs to penetrate through metal hardware"
    ],
    alternateContext: null
  },

  {
    id: "hip_prosthesis_lateral",
    name: "Hip Prosthesis Lateral",
    bodyPartId: "hip_prosthesis",
    isStandard: true,
    projection: "Cross-Table Lateral or Frog-Leg (if permitted)",
    patientPosition: "Per cross-table lateral technique or frog-leg if no precautions",
    centralRay: "Per chosen lateral method",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include prosthetic components",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 80, smallMas: 35.0, mediumKvp: 85, mediumMas: 45.0, largeKvp: 90, largeMas: 55.0, notes: null },
    positioningSteps: [
      "Determine if frog-leg is permitted (check with surgeon re: precautions)",
      "Posterior approach (most common): avoid internal rotation and excessive flexion",
      "Anterior approach: avoid external rotation and extension",
      "If precautions apply: use cross-table lateral (no leg movement needed)",
      "If no precautions: frog-leg lateral may be used"
    ],
    evaluationCriteria: [
      "Prosthetic components in lateral profile",
      "Acetabular cup and femoral head relationship visible",
      "Stem alignment assessable"
    ],
    commonErrors: [
      "Violating hip precautions - risking dislocation!",
      "Not checking surgeon's orders for movement restrictions"
    ],
    tipsAndTricks: [
      "ALWAYS check hip precautions before choosing lateral method",
      "Posterior approach precautions: no internal rotation, no flexion >90 degrees, no adduction past midline",
      "Anterior approach precautions: no external rotation, no extension, no adduction past midline",
      "When in doubt: cross-table lateral is always safe (no leg movement)"
    ],
    alternateContext: null
  },

  // Judet Views (Acetabulum)
  {
    id: "hip_judet_internal",
    name: "Acetabulum Internal Oblique (Judet)",
    bodyPartId: "hip_routine",
    isStandard: false,
    projection: "AP Oblique (Internal/Obturator Oblique, 45 degrees)",
    patientPosition: "Supine, rotated 45 degrees with affected side UP",
    centralRay: "Perpendicular to IR at acetabulum",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include affected acetabulum and hip",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 25.0, mediumKvp: 80, mediumMas: 35.0, largeKvp: 85, largeMas: 45.0, notes: null },
    positioningSteps: [
      "Patient supine, rotate affected side UP 45 degrees (RPO or LPO)",
      "Support with sponges/pillow",
      "Center to acetabulum of affected side",
      "This is the INTERNAL (obturator) oblique - affected side UP"
    ],
    evaluationCriteria: [
      "Obturator foramen en face (open)",
      "Anterior column (iliopubic line) demonstrated",
      "Posterior wall of acetabulum in profile",
      "Iliac wing foreshortened"
    ],
    commonErrors: ["Insufficient rotation", "Wrong side up"],
    tipsAndTricks: [
      "Internal oblique (affected side UP): shows ANTERIOR column and POSTERIOR wall",
      "External oblique (affected side DOWN): shows POSTERIOR column and ANTERIOR wall",
      "Remember: 'Up shows Anterior column/Posterior wall'",
      "Judet views are essential for acetabular fracture classification"
    ],
    alternateContext: {
      reason: "Evaluate acetabular fractures (columns and walls)",
      patientFactors: [PatientFactor.Trauma],
      advantagesOverStandard: "Demonstrates acetabular columns and walls individually; essential for surgical planning of acetabular fractures"
    }
  },

  {
    id: "hip_judet_external",
    name: "Acetabulum External Oblique (Judet)",
    bodyPartId: "hip_routine",
    isStandard: false,
    projection: "AP Oblique (External/Iliac Oblique, 45 degrees)",
    patientPosition: "Supine, rotated 45 degrees with affected side DOWN",
    centralRay: "Perpendicular to IR at acetabulum",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include affected acetabulum and hip",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 25.0, mediumKvp: 80, mediumMas: 35.0, largeKvp: 85, largeMas: 45.0, notes: null },
    positioningSteps: [
      "Patient supine, rotate affected side DOWN 45 degrees (RAO or LAO)",
      "Support as needed",
      "Center to acetabulum",
      "This is the EXTERNAL (iliac) oblique - affected side DOWN"
    ],
    evaluationCriteria: [
      "Iliac wing en face (broad)",
      "Posterior column (ilioischial line) demonstrated",
      "Anterior wall of acetabulum in profile",
      "Obturator foramen foreshortened"
    ],
    commonErrors: ["Insufficient rotation", "Confused with internal oblique"],
    tipsAndTricks: [
      "External oblique (affected side DOWN): shows POSTERIOR column and ANTERIOR wall",
      "Always do BOTH Judet views for complete assessment",
      "CT has supplemented but not replaced Judet views for acetabular fractures"
    ],
    alternateContext: {
      reason: "Evaluate acetabular fractures (columns and walls)",
      patientFactors: [PatientFactor.Trauma],
      advantagesOverStandard: "Demonstrates posterior column and anterior wall; paired with internal oblique for complete acetabular evaluation"
    }
  },
];
