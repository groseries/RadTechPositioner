import type { Position } from '../types';
import { PatientFactor } from '../types';

export const abdomenPelvisPositions: Position[] = [
  // Abdomen (KUB)
  {
    id: "abdomen_ap_supine",
    name: "Abdomen AP Supine (KUB)",
    bodyPartId: "abdomen_routine",
    isStandard: true,
    projection: "AP Supine",
    patientPosition: "Supine, arms at sides",
    centralRay: "Perpendicular to IR at iliac crest level (L4-L5)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include diaphragm to symphysis pubis; lateral abdominal walls",
    markers: "R or L",
    shielding: "Males: gonadal shield if does not obscure anatomy",
    respiration: "Suspended on expiration",
    techniqueSuggestion: { smallKvp: 70, smallMas: 20.0, mediumKvp: 75, mediumMas: 30.0, largeKvp: 80, largeMas: 40.0, notes: null },
    positioningSteps: [
      "Patient supine, no pillows under head (or thin pillow)",
      "Arms at sides or on chest (NOT crossed under body)",
      "Center MSP to IR at level of iliac crests",
      "Include from diaphragm to symphysis pubis",
      "Include lateral abdominal walls (flanks) for fat stripes",
      "Knees may be extended or slightly flexed"
    ],
    evaluationCriteria: [
      "Both diaphragms included superiorly",
      "Symphysis pubis included inferiorly",
      "Lateral abdominal walls (flank stripes) included",
      "Psoas muscle shadows visible (indicates adequate technique)",
      "Kidney outlines may be visible",
      "Bowel gas pattern assessable",
      "No rotation"
    ],
    commonErrors: [
      "Symphysis pubis cut off (center too high)",
      "Diaphragm cut off (center too low)",
      "Flanks not included (collimation too tight laterally)",
      "Motion blur from breathing"
    ],
    tipsAndTricks: [
      "KUB = Kidneys, Ureters, Bladder - must include all",
      "Expose on EXPIRATION to lower diaphragm less and reduce motion",
      "Psoas shadow visibility indicates adequate technique",
      "Flank fat stripes are important - don't collimate them out"
    ],
    alternateContext: null
  },

  // Acute Abdomen Series
  {
    id: "abdomen_upright",
    name: "Abdomen AP Upright",
    bodyPartId: "acute_abdomen",
    isStandard: true,
    projection: "AP Upright",
    patientPosition: "Standing upright",
    centralRay: "Perpendicular to IR, 2 inches above iliac crests to include diaphragm",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid or Bucky",
    collimation: "MUST include both diaphragms! Also include as much abdomen as possible",
    markers: "R or L, UPRIGHT marker",
    shielding: "When possible",
    respiration: "Suspended on expiration",
    techniqueSuggestion: { smallKvp: 70, smallMas: 20.0, mediumKvp: 75, mediumMas: 30.0, largeKvp: 80, largeMas: 40.0, notes: null },
    positioningSteps: [
      "Patient standing upright for minimum 5 minutes (allows air to rise)",
      "Center IR to include BOTH DIAPHRAGMS (key: free air rises under diaphragm)",
      "Center slightly higher than supine abdomen",
      "Include as much of the abdomen as possible",
      "If patient cannot stand: use left lateral decubitus position instead"
    ],
    evaluationCriteria: [
      "BOTH diaphragms included (essential for free air detection)",
      "Air-fluid levels visible in bowel if present (indicates obstruction)",
      "Free air under diaphragm if present (indicates perforation)",
      "Upright position confirmed by marker"
    ],
    commonErrors: [
      "Not including both diaphragms - CANNOT assess for free air!",
      "Not waiting 5 minutes for air to rise",
      "Center too low - diaphragm cut off"
    ],
    tipsAndTricks: [
      "The WHOLE POINT of upright abdomen is to see the diaphragms for free air",
      "If you don't include both diaphragms, the study is inadequate",
      "Patient should be upright 5+ minutes for air to accumulate superiorly",
      "As little as 1-2 mL of free air can be detected under the diaphragm"
    ],
    alternateContext: null
  },

  {
    id: "abdomen_left_lat_decub",
    name: "Abdomen Left Lateral Decubitus",
    bodyPartId: "acute_abdomen",
    isStandard: true,
    projection: "AP (Left Lateral Decubitus with horizontal beam)",
    patientPosition: "Lying on LEFT side for minimum 5 minutes, horizontal beam AP",
    centralRay: "Horizontal beam, perpendicular to IR at iliac crest level",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape (crosswise)",
    grid: "Grid",
    collimation: "Include both diaphragms and right lateral abdominal wall (upside)",
    markers: "R or L, UP marker indicating which side is up",
    shielding: "When possible",
    respiration: "Suspended expiration",
    techniqueSuggestion: { smallKvp: 70, smallMas: 20.0, mediumKvp: 75, mediumMas: 30.0, largeKvp: 80, largeMas: 40.0, notes: null },
    positioningSteps: [
      "Position patient lying on LEFT side for at least 5 minutes",
      "Left side down is standard - free air rises to the right side between liver and right hemidiaphragm",
      "Place upright IR behind patient's back",
      "Use HORIZONTAL BEAM directed from anterior to posterior",
      "Center to include right upper quadrant (upside) where free air would collect",
      "MUST include right hemidiaphragm"
    ],
    evaluationCriteria: [
      "Free air visible between liver and right abdominal wall if present",
      "Air-fluid levels in bowel loops if obstruction present",
      "Right hemidiaphragm and lateral wall included",
      "Proper L/R and UP markers visible"
    ],
    commonErrors: [
      "Patient on right side instead of left (air trapped between stomach gas and left diaphragm - harder to see)",
      "Not waiting 5 minutes for air to rise",
      "Not including the upside (right side) of abdomen"
    ],
    tipsAndTricks: [
      "LEFT side down is standard - free air rises to RIGHT between liver and diaphragm (easier to see against liver background)",
      "This is the alternative to upright abdomen when patient CANNOT stand",
      "Must wait 5+ minutes for free air to redistribute",
      "Can detect as little as 1-2 mL of free air"
    ],
    alternateContext: {
      reason: "Patient cannot stand for upright abdomen to assess for free air or obstruction",
      patientFactors: [PatientFactor.CannotStand, PatientFactor.Immobile, PatientFactor.Stretcher, PatientFactor.PortableExam, PatientFactor.Trauma, PatientFactor.PostSurgical],
      advantagesOverStandard: "Demonstrates free air and air-fluid levels without requiring patient to stand"
    }
  },

  // Pelvis
  {
    id: "pelvis_ap",
    name: "Pelvis AP",
    bodyPartId: "pelvis_routine",
    isStandard: true,
    projection: "AP",
    patientPosition: "Supine, legs extended with 15-20 degrees internal rotation",
    centralRay: "Perpendicular to IR at midpoint between ASIS and symphysis pubis",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include both ASIS, both greater trochanters, and symphysis pubis",
    markers: "R or L",
    shielding: "Males: gonadal shield centered to symphysis; Females: may obscure pelvic anatomy",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 25.0, mediumKvp: 80, mediumMas: 35.0, largeKvp: 85, largeMas: 45.0, notes: null },
    positioningSteps: [
      "Patient supine, centered to table",
      "Internally rotate both legs 15-20 degrees (toes inward)",
      "This places femoral necks in true AP (parallel to IR)",
      "Center midway between ASIS and symphysis pubis",
      "ASIS should be equidistant from table (no rotation)",
      "DO NOT rotate legs if hip fracture is suspected"
    ],
    evaluationCriteria: [
      "Both iliac wings symmetric (no rotation)",
      "Both obturator foramina symmetric and equal",
      "Greater trochanters in profile laterally (from internal rotation)",
      "Femoral necks visible without foreshortening",
      "Symphysis pubis midline",
      "Both hips included"
    ],
    commonErrors: [
      "Rotation - obturator foramina asymmetric",
      "Legs not internally rotated - femoral necks foreshortened",
      "ROTATING LEGS WITH SUSPECTED HIP FRACTURE - NEVER do this!",
      "Greater trochanters cut off laterally"
    ],
    tipsAndTricks: [
      "Internal rotation is KEY for femoral neck visualization",
      "EXCEPTION: NEVER internally rotate in suspected hip fracture - take as-is",
      "Check rotation by comparing obturator foramina symmetry",
      "For trauma: AP pelvis is a screening study - if fracture suspected, do Judet views"
    ],
    alternateContext: null
  },

  {
    id: "pelvis_inlet",
    name: "Pelvis Inlet View",
    bodyPartId: "inlet_outlet",
    isStandard: true,
    projection: "AP Axial (40 degrees caudad)",
    patientPosition: "Supine",
    centralRay: "40 degrees caudad entering at ASIS level",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include entire pelvic ring",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 30.0, mediumKvp: 80, mediumMas: 40.0, largeKvp: 85, largeMas: 50.0, notes: null },
    positioningSteps: [
      "Patient supine",
      "Angle CR 40 degrees CAUDAD",
      "Enter at ASIS level",
      "This projects the pelvic ring looking down from above (inlet view)"
    ],
    evaluationCriteria: [
      "Pelvic ring demonstrated in its true shape (looking down into pelvis)",
      "Anterior-posterior displacement of fractures visible",
      "Sacrum and pubic rami in profile",
      "Bilateral for comparison"
    ],
    commonErrors: ["Insufficient angulation", "Rotation"],
    tipsAndTricks: [
      "Inlet view: looking DOWN into the pelvis (40 degrees caudad)",
      "Shows anterior/posterior displacement of pelvic ring fractures",
      "Used with outlet view for complete pelvic ring assessment"
    ],
    alternateContext: null
  },

  {
    id: "pelvis_outlet",
    name: "Pelvis Outlet View",
    bodyPartId: "inlet_outlet",
    isStandard: true,
    projection: "AP Axial (40 degrees cephalad)",
    patientPosition: "Supine",
    centralRay: "40 degrees cephalad entering at symphysis pubis",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include entire pelvic ring",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 30.0, mediumKvp: 80, mediumMas: 40.0, largeKvp: 85, largeMas: 50.0, notes: null },
    positioningSteps: [
      "Patient supine",
      "Angle CR 40 degrees CEPHALAD",
      "Enter at symphysis pubis level",
      "This projects the pelvic ring looking up from below (outlet view)"
    ],
    evaluationCriteria: [
      "Pelvic ring demonstrated looking upward",
      "Superior/inferior displacement visible",
      "Sacral foramina visible",
      "Pubic rami elongated"
    ],
    commonErrors: ["Insufficient angulation", "Rotation"],
    tipsAndTricks: [
      "Outlet view: looking UP through the pelvis (40 degrees cephalad)",
      "Shows superior/inferior displacement (vertical shear)",
      "Complement with inlet view for complete pelvic ring evaluation"
    ],
    alternateContext: null
  },
];
