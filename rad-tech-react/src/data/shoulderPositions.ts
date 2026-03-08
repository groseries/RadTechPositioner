import type { Position } from '../types';
import { PatientFactor } from '../types';

export const shoulderPositions: Position[] = [
  // Shoulder Joint
  {
    id: "shoulder_ap_er",
    name: "Shoulder AP (External Rotation)",
    bodyPartId: "shoulder_joint",
    isStandard: true,
    projection: "AP (External Rotation)",
    patientPosition: "Upright or supine, arm externally rotated, palm supinated",
    centralRay: "Perpendicular to IR, 1 inch inferior to coracoid process",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include entire shoulder joint, AC joint, and proximal humerus",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 8.0, mediumKvp: 75, mediumMas: 12.0, largeKvp: 80, largeMas: 16.0, notes: null },
    positioningSteps: [
      "Position patient AP, rotate body slightly (15-20 degrees) toward affected side to place scapula flat against IR",
      "Externally rotate arm - palm forward/supinated, epicondyles parallel to IR",
      "This places greater tuberosity in profile laterally",
      "Center 1 inch inferior to coracoid process",
      "Arm slightly abducted from body"
    ],
    evaluationCriteria: [
      "Greater tuberosity in profile (lateral aspect of proximal humerus)",
      "Glenohumeral joint space open",
      "Acromion and AC joint visible superiorly",
      "No superimposition of humeral head on glenoid (body rotated correctly)",
      "Lateral 1/3 of clavicle included"
    ],
    commonErrors: [
      "Body not rotated enough - glenohumeral joint not open",
      "Arm not externally rotated - greater tuberosity not in profile",
      "CR centered too high or too low"
    ],
    tipsAndTricks: [
      "External rotation = greater tuberosity in profile",
      "Rotate body 15-20 degrees toward affected side to open joint",
      "This is the standard for routine shoulder series"
    ],
    alternateContext: null
  },

  {
    id: "shoulder_ap_ir",
    name: "Shoulder AP (Internal Rotation)",
    bodyPartId: "shoulder_joint",
    isStandard: true,
    projection: "AP (Internal Rotation)",
    patientPosition: "Upright or supine, arm internally rotated, palm against thigh",
    centralRay: "Perpendicular to IR, 1 inch inferior to coracoid process",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Same as AP ER",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 8.0, mediumKvp: 75, mediumMas: 12.0, largeKvp: 80, largeMas: 16.0, notes: null },
    positioningSteps: [
      "Same body position as AP ER (15-20 degree rotation toward affected side)",
      "Internally rotate arm - palm against thigh, epicondyles perpendicular to IR",
      "This places lesser tuberosity in profile medially",
      "Center 1 inch inferior to coracoid process"
    ],
    evaluationCriteria: [
      "Lesser tuberosity in profile (medial aspect)",
      "Proximal humerus appears more rounded (like a light bulb - concerning for posterior dislocation if only view taken)",
      "Glenohumeral joint visible",
      "Outline of greater tuberosity seen through humeral head"
    ],
    commonErrors: [
      "Not enough internal rotation",
      "Body position changed between ER and IR views"
    ],
    tipsAndTricks: [
      "The ER and IR pair: only change arm rotation between views, not body position",
      "'Light bulb sign' on internal rotation may indicate posterior dislocation",
      "Internal rotation gives a true lateral of the proximal humerus"
    ],
    alternateContext: null
  },

  {
    id: "shoulder_y_view",
    name: "Shoulder Scapular Y (Outlet View)",
    bodyPartId: "shoulder_joint",
    isStandard: true,
    projection: "Lateral (Scapular Y)",
    patientPosition: "Patient obliqued 45-60 degrees, anterior oblique (RAO/LAO)",
    centralRay: "Perpendicular to IR at glenohumeral joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include entire scapula and proximal humerus",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 10.0, mediumKvp: 75, mediumMas: 14.0, largeKvp: 80, largeMas: 18.0, notes: null },
    positioningSteps: [
      "Position patient in anterior oblique (affected side against IR)",
      "Rotate 45-60 degrees until scapular body is perpendicular to IR",
      "Palpate scapular borders to confirm true lateral of scapula",
      "Affected arm may hang at side naturally",
      "Center to mid-scapula (glenohumeral joint)"
    ],
    evaluationCriteria: [
      "Scapula in true lateral - body of scapula on edge",
      "Y-shape formed by acromion, coracoid, and scapular body",
      "Humeral head should sit at center of the Y (centered over glenoid)",
      "Anterior dislocation: humeral head anterior/inferior to Y center",
      "Posterior dislocation: humeral head posterior to Y center"
    ],
    commonErrors: [
      "Insufficient rotation - scapula not in true lateral",
      "Over-rotation",
      "CR not centered to glenohumeral joint"
    ],
    tipsAndTricks: [
      "The Y-view is ESSENTIAL for evaluating shoulder dislocation direction",
      "Normal: humeral head sits at the center of the Y",
      "This is the BEST trauma view - no arm manipulation required",
      "Palpate the medial and lateral scapular borders - they should be superimposed"
    ],
    alternateContext: null
  },

  {
    id: "shoulder_axillary",
    name: "Shoulder Axillary Lateral",
    bodyPartId: "shoulder_joint",
    isStandard: false,
    projection: "Inferosuperior Axillary",
    patientPosition: "Arm abducted, IR on superior aspect of shoulder, CR from below",
    centralRay: "Directed superiorly through axilla to IR on top of shoulder",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "No grid",
    collimation: "Glenohumeral joint area",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 6.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Abduct arm as much as patient can tolerate (ideally 90 degrees)",
      "Place IR on top of shoulder, against neck",
      "Direct CR superiorly from below, through the axilla",
      "May also be done supine with arm abducted off table edge",
      "Center CR to glenohumeral joint"
    ],
    evaluationCriteria: [
      "Glenohumeral joint in profile",
      "Acromion, coracoid, and glenoid clearly demonstrated",
      "Hill-Sachs and Bankart lesions may be visible",
      "Lesser tuberosity in profile anteriorly"
    ],
    commonErrors: [
      "Arm not abducted enough",
      "CR angle not correct",
      "IR not securely positioned on shoulder"
    ],
    tipsAndTricks: [
      "Best view for Hill-Sachs lesion (posterior humeral head defect from anterior dislocation)",
      "If patient cannot abduct 90 degrees, abduct as much as tolerated and angle CR accordingly",
      "Modified axillary (Velpeau): patient standing, leaning back over IR on table - no arm abduction needed"
    ],
    alternateContext: {
      reason: "Need true lateral view of glenohumeral joint for instability evaluation",
      patientFactors: [PatientFactor.LimitedROM, PatientFactor.Pain],
      advantagesOverStandard: "Best view for glenohumeral joint anatomy; demonstrates Hill-Sachs and Bankart lesions"
    }
  },

  {
    id: "shoulder_velpeau",
    name: "Shoulder Velpeau Axillary",
    bodyPartId: "shoulder_joint",
    isStandard: false,
    projection: "Modified Axillary (Velpeau)",
    patientPosition: "Standing, leaning backward over IR on table, arm in sling",
    centralRay: "Directed inferiorly perpendicular to IR",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "No grid",
    collimation: "Glenohumeral joint",
    markers: "R or L",
    shielding: "Gonadal shield when possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 6.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Patient stands at end of table with back to table",
      "Place IR flat on table under the affected shoulder",
      "Patient leans backward approximately 30-45 degrees over the IR",
      "Arm remains in sling or at side - NO arm movement required",
      "CR directed downward perpendicular to the IR, centered to shoulder"
    ],
    evaluationCriteria: [
      "Axillary view of glenohumeral joint obtained",
      "Similar anatomy demonstrated as standard axillary",
      "Glenoid, acromion, coracoid visible"
    ],
    commonErrors: [
      "Patient not leaning back far enough",
      "IR not centered under shoulder",
      "Patient unable to lean back (balance issues)"
    ],
    tipsAndTricks: [
      "BEST alternate axillary view for trauma - NO arm movement needed",
      "Patient can keep arm in sling",
      "Steady the patient - they are leaning back and may feel unbalanced",
      "Great for post-reduction check of shoulder dislocation"
    ],
    alternateContext: {
      reason: "Need axillary view but patient cannot abduct arm (trauma, sling, post-reduction)",
      patientFactors: [PatientFactor.Trauma, PatientFactor.Pain, PatientFactor.Immobile, PatientFactor.LimitedROM, PatientFactor.Cast, PatientFactor.CannotExtend],
      advantagesOverStandard: "Requires NO arm movement; patient keeps arm in sling; obtains axillary view without abduction"
    }
  },

  {
    id: "shoulder_grashey",
    name: "Shoulder Grashey (True AP Glenohumeral)",
    bodyPartId: "shoulder_joint",
    isStandard: false,
    projection: "AP (True Glenoid Profile)",
    patientPosition: "Patient rotated 35-45 degrees toward affected side (posterior oblique)",
    centralRay: "Perpendicular to glenohumeral joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Glenohumeral joint",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 10.0, mediumKvp: 75, mediumMas: 14.0, largeKvp: 80, largeMas: 18.0, notes: null },
    positioningSteps: [
      "Rotate patient 35-45 degrees toward affected side (RPO or LPO for affected side)",
      "This places glenoid fossa parallel to IR, opening the joint space",
      "Center to glenohumeral joint",
      "Arm at side in neutral rotation"
    ],
    evaluationCriteria: [
      "Glenohumeral joint space OPEN (most important criterion)",
      "Glenoid fossa in profile",
      "No overlap of humeral head on glenoid",
      "Glenoid rim clearly demonstrated"
    ],
    commonErrors: ["Insufficient rotation - joint not open", "Over-rotation"],
    tipsAndTricks: [
      "This is the TRUE AP of the glenohumeral joint",
      "Standard 'AP shoulder' is not true AP of the joint because scapula is angled on thorax",
      "Essential for evaluating joint space narrowing and glenoid pathology",
      "35-45 degrees of rotation puts the glenoid parallel to IR"
    ],
    alternateContext: {
      reason: "Need true glenohumeral joint space evaluation",
      patientFactors: [],
      advantagesOverStandard: "Opens glenohumeral joint space for true evaluation; standard AP does not show true joint space"
    }
  },

  {
    id: "shoulder_west_point",
    name: "Shoulder West Point View",
    bodyPartId: "shoulder_joint",
    isStandard: false,
    projection: "Modified Axillary (West Point)",
    patientPosition: "Prone, arm hanging off table edge, IR against superior shoulder",
    centralRay: "25 degrees anteriorly and 25 degrees medially through axilla",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "No grid",
    collimation: "Glenohumeral joint",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 6.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Patient prone on table",
      "Affected arm hangs off edge of table",
      "Place IR against superior aspect of shoulder from above",
      "Angle CR 25 degrees anterior and 25 degrees medial",
      "Direct CR upward through axilla"
    ],
    evaluationCriteria: [
      "Anteroinferior glenoid rim clearly demonstrated",
      "Bankart lesion (if present) visible",
      "Glenohumeral joint profile"
    ],
    commonErrors: ["Incorrect CR angulation", "IR positioning"],
    tipsAndTricks: [
      "Specifically designed to demonstrate Bankart lesions (anterior-inferior glenoid fracture)",
      "Useful for recurrent anterior shoulder dislocations",
      "The double angle (25 + 25) specifically profiles the anterior-inferior glenoid"
    ],
    alternateContext: {
      reason: "Evaluate for Bankart lesion or anterior-inferior glenoid pathology",
      patientFactors: [],
      advantagesOverStandard: "Best plain film view for demonstrating Bankart lesions at the anteroinferior glenoid rim"
    }
  },

  // Clavicle
  {
    id: "clavicle_ap",
    name: "Clavicle AP",
    bodyPartId: "clavicle",
    isStandard: true,
    projection: "AP",
    patientPosition: "Upright or supine",
    centralRay: "Perpendicular to midshaft of clavicle (or 15-20 degrees cephalad if supine)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include AC joint to SC joint, entire clavicle",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended expiration",
    techniqueSuggestion: { smallKvp: 65, smallMas: 6.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Position patient AP (upright preferred to show displacement from gravity)",
      "Center midshaft of clavicle to IR",
      "Include both AC and SC joints",
      "If supine, may angle CR 15-20 degrees cephalad to project clavicle above ribs"
    ],
    evaluationCriteria: [
      "Entire clavicle from SC to AC joint demonstrated",
      "Clavicle above ribs (if cephalad angulation used)",
      "No rotation"
    ],
    commonErrors: [
      "SC or AC joint cut off",
      "Clavicle superimposed on ribs",
      "Patient rotated"
    ],
    tipsAndTricks: [
      "Upright position shows fracture displacement better due to gravity and muscle pull",
      "15-20 degrees cephalad lifts the clavicle above the ribs",
      "Always include both joints"
    ],
    alternateContext: null
  },

  {
    id: "clavicle_ap_axial",
    name: "Clavicle AP Axial (Cephalad)",
    bodyPartId: "clavicle",
    isStandard: true,
    projection: "AP Axial (15-30 degrees cephalad)",
    patientPosition: "Upright or supine",
    centralRay: "15-30 degrees cephalad, entering midshaft of clavicle",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Entire clavicle",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended expiration",
    techniqueSuggestion: { smallKvp: 65, smallMas: 6.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Position patient AP",
      "Angle CR 15-30 degrees cephalad",
      "Center to midshaft of clavicle",
      "This projects the clavicle superiorly off the ribs and scapula"
    ],
    evaluationCriteria: [
      "Clavicle projected above thorax",
      "Entire clavicle visible without rib superimposition",
      "Clear visualization of fracture displacement if present"
    ],
    commonErrors: ["Insufficient angulation - still over ribs", "Angulation too steep"],
    tipsAndTricks: [
      "The cephalad angle projects the clavicle above the ribs for clearer visualization",
      "More angulation needed for thicker patients",
      "Complementary to the standard AP view"
    ],
    alternateContext: null
  },

  // Scapula
  {
    id: "scapula_ap",
    name: "Scapula AP",
    bodyPartId: "scapula",
    isStandard: true,
    projection: "AP",
    patientPosition: "Upright or supine, arm abducted 90 degrees if possible",
    centralRay: "Perpendicular to IR at mid-scapula (2 inches inferior to coracoid)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include entire scapula",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 10.0, mediumKvp: 75, mediumMas: 14.0, largeKvp: 80, largeMas: 18.0, notes: null },
    positioningSteps: [
      "Position patient AP with affected scapula centered",
      "Abduct arm 90 degrees and externally rotate (supinate hand)",
      "This moves the scapula laterally away from the ribs",
      "If patient cannot abduct, reach across chest to opposite shoulder",
      "Center to mid-scapula"
    ],
    evaluationCriteria: [
      "Entire scapula visible from superior angle to inferior angle",
      "Scapular body seen with minimal rib superimposition",
      "Acromion and coracoid process demonstrated"
    ],
    commonErrors: [
      "Arm at side - scapula superimposed on ribs",
      "Scapula not centered",
      "Inferior angle cut off"
    ],
    tipsAndTricks: [
      "Abducting the arm is KEY - it moves the scapula laterally and rotates it off the ribs",
      "Alternative: have patient reach across chest to opposite shoulder"
    ],
    alternateContext: null
  },

  {
    id: "scapula_lateral",
    name: "Scapula Lateral (Y-View)",
    bodyPartId: "scapula",
    isStandard: true,
    projection: "Lateral (same as Scapular Y)",
    patientPosition: "Same as Scapular Y-view for shoulder",
    centralRay: "Perpendicular to mid-scapula",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include entire scapula",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 10.0, mediumKvp: 75, mediumMas: 14.0, largeKvp: 80, largeMas: 18.0, notes: null },
    positioningSteps: [
      "Same positioning as Scapular Y-view",
      "Anterior oblique with affected side against IR",
      "Rotate 45-60 degrees until scapula is perpendicular to IR",
      "Center to mid-scapula (lower than for shoulder Y-view)"
    ],
    evaluationCriteria: [
      "Scapula in true lateral",
      "Acromion, coracoid, and body form Y-shape",
      "Scapular body on edge (thin line)",
      "Entire scapula from superior to inferior angle"
    ],
    commonErrors: ["Not a true lateral - scapular body appears wide", "Not centered to scapula"],
    tipsAndTricks: [
      "Same as shoulder Y-view but centered lower to include inferior angle",
      "Palpate scapular borders to confirm true lateral alignment"
    ],
    alternateContext: null
  },

  // AC Joint
  {
    id: "ac_joint_bilateral",
    name: "AC Joint AP Bilateral (Zanca)",
    bodyPartId: "ac_joint",
    isStandard: true,
    projection: "AP bilateral with 10-15 degrees cephalad",
    patientPosition: "Upright, both shoulders included for comparison",
    centralRay: "10-15 degrees cephalad at AC joint level",
    sid: "72 inches (183 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape",
    grid: "Grid or Bucky",
    collimation: "Include both AC joints",
    markers: "R and L markers",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 5.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: "50% of standard shoulder technique - AC joint is superficial" },
    positioningSteps: [
      "Position patient upright AP facing Bucky",
      "Arms hanging at sides - NO weights initially",
      "Center midline between AC joints",
      "Use REDUCED technique (50% of shoulder technique) - AC joint is superficial",
      "Angle CR 10-15 degrees cephalad (Zanca method) to clear acromion from distal clavicle",
      "If weight-bearing requested: repeat with 10-15 lb weights hanging from wrists (NOT held)"
    ],
    evaluationCriteria: [
      "Both AC joints demonstrated for comparison",
      "AC joint spaces visible (not overexposed)",
      "If weight-bearing: compare joint widths with and without weights",
      "Widened joint space on affected side indicates AC separation"
    ],
    commonErrors: [
      "Using shoulder technique - AC joints are overexposed (too dark)",
      "Weights held in hands instead of hanging from wrists",
      "Only one side included - need bilateral for comparison"
    ],
    tipsAndTricks: [
      "Reduce technique to 50% of shoulder technique - AC joint is very superficial",
      "Weights should HANG from wrists, not be gripped (gripping tightens muscles and may hide separation)",
      "Compare both sides - a type I-II separation may only show with weights",
      "10-15 degree cephalad angle (Zanca) better profiles the AC joint space"
    ],
    alternateContext: null
  },
];
