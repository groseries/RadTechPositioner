import type { Position } from '../types';
import { PatientFactor } from '../types';

export const chestPositions: Position[] = [
  // Chest Routine
  {
    id: "chest_pa_upright",
    name: "Chest PA Upright",
    bodyPartId: "chest_routine",
    isStandard: true,
    projection: "PA",
    patientPosition: "Standing upright, facing image receptor",
    centralRay: "Perpendicular to IR at level of T7 (inferior angle of scapula)",
    sid: "72 inches (183 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid or Bucky",
    collimation: "Top of shoulders to costophrenic angles; lateral skin margins",
    markers: "R or L marker at upper corner, away from anatomy",
    shielding: "Gonadal shield if possible without obscuring anatomy",
    respiration: "Second deep inspiration (full inspiration)",
    techniqueSuggestion: { smallKvp: 110, smallMas: 2.0, mediumKvp: 120, mediumMas: 3.0, largeKvp: 125, largeMas: 4.0, notes: "Use high kVp technique for long scale contrast" },
    positioningSteps: [
      "Remove all opaque objects from chest area (necklaces, snaps, bra)",
      "Position patient facing the upright Bucky/IR",
      "Adjust IR height so top is 1.5-2 inches above shoulders",
      "Center midsagittal plane to center of IR",
      "Roll shoulders forward and down, resting backs of hands on hips",
      "Ensure no rotation - equal distance from MSP to each side of IR",
      "Chin raised and extended over top of IR"
    ],
    evaluationCriteria: [
      "10 posterior ribs visible above diaphragm (full inspiration)",
      "No rotation - SC joints equidistant from spine",
      "Scapulae projected outside lung fields",
      "Entire lung fields visible including costophrenic angles",
      "Sharp cardiac silhouette and diaphragm borders",
      "Faint visualization of thoracic vertebrae through heart shadow"
    ],
    commonErrors: [
      "Rotation - SC joints not equidistant from vertebral column",
      "Insufficient inspiration - fewer than 10 posterior ribs visible",
      "Scapulae projected over lung fields (hands not rotated forward enough)",
      "CR too high or too low - lung fields cut off",
      "Patient not close enough to IR - magnification of heart"
    ],
    tipsAndTricks: [
      "Have patient take two deep breaths before final exposure to ensure maximum lung expansion",
      "Tell patient to 'hug the board' to help roll scapulae out",
      "For kyphotic patients, angle CR 5 degrees caudad",
      "Always check for rotation by looking at SC joints on image"
    ],
    alternateContext: null
  },

  {
    id: "chest_lateral_upright",
    name: "Chest Left Lateral Upright",
    bodyPartId: "chest_routine",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Standing upright, left side against IR",
    centralRay: "Perpendicular to IR at level of T7, entering at midcoronal plane",
    sid: "72 inches (183 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid or Bucky",
    collimation: "Posterior rib margin to anterior chest wall; top of shoulders to below costophrenic angles",
    markers: "R marker anterior to patient",
    shielding: "Gonadal shield if possible",
    respiration: "Second deep inspiration",
    techniqueSuggestion: { smallKvp: 110, smallMas: 5.0, mediumKvp: 120, mediumMas: 8.0, largeKvp: 125, largeMas: 10.0, notes: "Increase technique from PA approximately 5-8 kVp" },
    positioningSteps: [
      "Position left side against IR (unless right lateral is specifically ordered)",
      "Raise arms above head, crossing forearms on top of head or grasping elbows",
      "Adjust IR so top is 1.5-2 inches above shoulders",
      "Center midcoronal plane to center of IR",
      "Ensure patient is in a true lateral - coronal plane perpendicular to IR",
      "Lean slightly into the IR for stability"
    ],
    evaluationCriteria: [
      "Sternum in lateral profile - no rotation",
      "Posterior ribs superimposed (indicates true lateral)",
      "Open intervertebral foramina of thoracic spine",
      "Heart and great vessels visible",
      "Costophrenic angles visible",
      "Arms and soft tissue cleared from thorax"
    ],
    commonErrors: [
      "Rotation - posterior ribs not superimposed",
      "Arms not raised high enough - projected over upper lung field",
      "IR not high enough - apices cut off",
      "Insufficient inspiration"
    ],
    tipsAndTricks: [
      "Left lateral is standard to minimize cardiac magnification",
      "Use a step stool if patient is short and IR cannot be lowered enough",
      "Have the patient lean slightly forward to keep balance",
      "Check alignment from behind the patient - the shoulders and hips should be in the same plane"
    ],
    alternateContext: null
  },

  {
    id: "chest_ap_supine",
    name: "Chest AP Supine (Portable)",
    bodyPartId: "chest_routine",
    isStandard: false,
    projection: "AP",
    patientPosition: "Supine or semi-upright in bed",
    centralRay: "Perpendicular to IR at level of T7 (3 inches below jugular notch)",
    sid: "40-48 inches minimum (maximize when possible)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid if available; gridless acceptable for portable",
    collimation: "Top of shoulders to costophrenic angles",
    markers: "R or L marker; TIME marker for serial exams",
    shielding: "When possible without obscuring anatomy",
    respiration: "Inspiration if patient can cooperate",
    techniqueSuggestion: { smallKvp: 80, smallMas: 3.0, mediumKvp: 85, mediumMas: 4.0, largeKvp: 90, largeMas: 5.0, notes: "Lower kVp at shorter SID; compensate mAs for distance changes" },
    positioningSteps: [
      "Elevate head of bed as much as patient condition allows (semi-upright preferred)",
      "Place IR behind patient, centered to T7",
      "Ensure IR top is 1.5-2 inches above shoulders",
      "Center patient to IR - check for rotation",
      "Remove leads, lines, and tubes from area if possible (do not disconnect)",
      "Verify tube-to-IR alignment"
    ],
    evaluationCriteria: [
      "Both lung fields included",
      "Minimal rotation despite patient limitations",
      "Lead markers (R/L) and time marker visible",
      "ET tube, lines, and catheters visible (if present)",
      "Adequate density despite shorter SID"
    ],
    commonErrors: [
      "IR not centered - anatomy cut off",
      "Patient rotated in bed",
      "Grid cut-off from tube-grid misalignment",
      "Exposure too light or dark due to SID changes"
    ],
    tipsAndTricks: [
      "Always mark AP and time on portable exams",
      "Try to get patient as upright as possible to assess fluid levels",
      "Mind the lines and tubes - trace them on the image",
      "Increase kVp 5-10 if using a grid on portable",
      "Watch for grid alignment - center tube to grid center line"
    ],
    alternateContext: {
      reason: "Patient cannot stand or be transported to radiology department",
      patientFactors: [PatientFactor.Immobile, PatientFactor.Stretcher, PatientFactor.Trauma, PatientFactor.PortableExam, PatientFactor.Intubated, PatientFactor.CannotStand],
      advantagesOverStandard: "Can be performed at bedside without moving the patient; essential for ICU, ER, and post-surgical patients"
    }
  },

  {
    id: "chest_ap_lordotic",
    name: "Chest AP Lordotic",
    bodyPartId: "chest_routine",
    isStandard: false,
    projection: "AP Axial (Lordotic)",
    patientPosition: "Standing approximately 1 foot from upright Bucky, leaning back",
    centralRay: "Perpendicular to IR entering at midsternum",
    sid: "72 inches (183 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid or Bucky",
    collimation: "Lung apices visible; lateral skin margins",
    markers: "R or L marker",
    shielding: "Gonadal shield",
    respiration: "Full inspiration",
    techniqueSuggestion: { smallKvp: 110, smallMas: 3.0, mediumKvp: 120, mediumMas: 4.0, largeKvp: 125, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Position patient about 1 foot in front of upright Bucky",
      "Have patient lean back against the Bucky with shoulders and back of neck touching IR",
      "Alternatively, keep patient upright and angle CR 15-20 degrees cephalad",
      "Center CR to midsternum",
      "Ensure MSP centered to IR"
    ],
    evaluationCriteria: [
      "Clavicles projected above apices",
      "Apices clearly visible without superimposition of clavicles",
      "Good visualization of lung apices and upper lobes",
      "No rotation"
    ],
    commonErrors: [
      "Insufficient lordotic angle - clavicles still superimpose apices",
      "Patient rotation",
      "Apices cut off"
    ],
    tipsAndTricks: [
      "This view is primarily for demonstrating lung apices and ruling out apical pathology",
      "If patient cannot lean back, angle the tube 15-20 degrees cephalad with patient upright",
      "Also useful for clearing clavicles from apical lesions"
    ],
    alternateContext: {
      reason: "Need to visualize lung apices without clavicular superimposition",
      patientFactors: [PatientFactor.CannotStand, PatientFactor.CannotFlex],
      advantagesOverStandard: "Projects clavicles above apices for clearer visualization of apical lung pathology; tube angulation method available for patients who cannot lean back"
    }
  },

  {
    id: "chest_lateral_decubitus",
    name: "Chest Lateral Decubitus",
    bodyPartId: "chest_routine",
    isStandard: false,
    projection: "AP (Decubitus)",
    patientPosition: "Lying on affected or unaffected side with upright IR behind back",
    centralRay: "Horizontal beam, perpendicular to IR at T7",
    sid: "72 inches (183 cm)",
    imageReceptorSize: "14x17",
    orientation: "Landscape (crosswise)",
    grid: "Grid",
    collimation: "Include both lung fields",
    markers: "R or L marker and UP marker indicating which side is up",
    shielding: "Gonadal shield if possible",
    respiration: "Full inspiration",
    techniqueSuggestion: { smallKvp: 110, smallMas: 3.0, mediumKvp: 120, mediumMas: 4.0, largeKvp: 125, largeMas: 5.0, notes: "Use same technique as PA chest" },
    positioningSteps: [
      "Position patient lying on their side on a radiolucent pad/cart",
      "Affected side DOWN to demonstrate free pleural fluid layering",
      "Affected side UP to demonstrate small pneumothorax",
      "Place upright IR behind patient, horizontal beam",
      "Ensure arms are raised above head",
      "Patient should be on this side for at least 5 minutes before exposure",
      "Include both lungs - must see BOTH sides for comparison"
    ],
    evaluationCriteria: [
      "Both lung fields included",
      "Dependent side clearly visible - fluid should layer along dependent chest wall",
      "Up side clearly visible - air rises to non-dependent side",
      "Proper R/L and UP markers visible"
    ],
    commonErrors: [
      "Not waiting 5 minutes for fluid to layer",
      "Cutting off the dependent lung",
      "Incorrect side down for the clinical question",
      "Missing UP marker"
    ],
    tipsAndTricks: [
      "FLUID: affected side DOWN (fluid layers along dependent chest wall)",
      "AIR (pneumothorax): affected side UP (air rises to non-dependent side)",
      "Always wait at least 5 minutes for fluid to shift before exposure",
      "Must include both lungs for comparison",
      "Place sponge under patient to elevate off table edge"
    ],
    alternateContext: {
      reason: "Confirm presence of pleural effusion or small pneumothorax; patient cannot stand for upright exam",
      patientFactors: [PatientFactor.CannotStand, PatientFactor.Immobile, PatientFactor.Stretcher, PatientFactor.PortableExam, PatientFactor.ShortOfBreath],
      advantagesOverStandard: "Demonstrates as little as 5-10 mL of pleural fluid (much more sensitive than upright); can demonstrate small pneumothorax; can be performed on patients who cannot stand"
    }
  },

  // Ribs
  {
    id: "ribs_ap_above",
    name: "Ribs AP (Above Diaphragm)",
    bodyPartId: "ribs",
    isStandard: true,
    projection: "AP",
    patientPosition: "Upright preferred, or supine",
    centralRay: "Perpendicular to IR at T7 (for upper ribs)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include axillary ribs on affected side",
    markers: "R or L marker on affected side",
    shielding: "Gonadal shield",
    respiration: "Full inspiration (above diaphragm)",
    techniqueSuggestion: { smallKvp: 65, smallMas: 10.0, mediumKvp: 70, mediumMas: 15.0, largeKvp: 75, largeMas: 20.0, notes: "Lower kVp than chest for short scale contrast to see fractures" },
    positioningSteps: [
      "Position patient AP, centered to affected side if unilateral",
      "Center IR to T7 for upper ribs",
      "Include axillary margin on injured side",
      "Mark the site of injury/pain if visible"
    ],
    evaluationCriteria: [
      "Ribs 1-10 visible above diaphragm",
      "Axillary portion of ribs included",
      "Short scale contrast to demonstrate fractures",
      "No rotation"
    ],
    commonErrors: [
      "Using chest technique (too high kVp) - fractures not visible",
      "Not including axillary ribs",
      "Wrong side centered"
    ],
    tipsAndTricks: [
      "Use LOWER kVp than chest for bone detail",
      "Always include a chest PA with rib series to check for pneumothorax",
      "Mark the point of maximum tenderness with a BB marker"
    ],
    alternateContext: null
  },

  {
    id: "ribs_ap_below",
    name: "Ribs AP (Below Diaphragm)",
    bodyPartId: "ribs",
    isStandard: true,
    projection: "AP",
    patientPosition: "Supine preferred for lower ribs",
    centralRay: "Perpendicular to IR at lower rib margin",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include lower rib cage to iliac crest",
    markers: "R or L marker on affected side",
    shielding: "Gonadal shield",
    respiration: "Full expiration (pushes diaphragm up, exposing lower ribs)",
    techniqueSuggestion: { smallKvp: 70, smallMas: 15.0, mediumKvp: 75, mediumMas: 20.0, largeKvp: 80, largeMas: 25.0, notes: "Expiration technique" },
    positioningSteps: [
      "Position patient supine (diaphragm rises higher in supine)",
      "Center to lower rib cage at level of xiphoid tip",
      "Include ribs 8-12 and costochondral junctions",
      "Expose on EXPIRATION to push diaphragm up"
    ],
    evaluationCriteria: [
      "Ribs 8-12 visible below diaphragm",
      "Diaphragm elevated from expiration",
      "Adequate density to see through upper abdomen"
    ],
    commonErrors: [
      "Exposing on inspiration - lower ribs hidden behind diaphragm",
      "Patient upright - diaphragm drops too low",
      "Insufficient mAs for abdominal density"
    ],
    tipsAndTricks: [
      "SUPINE + EXPIRATION = best for lower ribs",
      "Think of lower rib views as abdominal technique, not chest technique",
      "Coach the patient on breathing out and holding"
    ],
    alternateContext: null
  },

  {
    id: "ribs_oblique",
    name: "Ribs Oblique (RPO/LPO or RAO/LAO)",
    bodyPartId: "ribs",
    isStandard: true,
    projection: "Oblique (45 degrees)",
    patientPosition: "Rotated 45 degrees - posterior oblique for axillary ribs, anterior oblique for posterior ribs",
    centralRay: "Perpendicular to IR at affected rib level",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Affected rib area",
    markers: "R or L marker; indicate RPO/LPO or RAO/LAO",
    shielding: "Gonadal shield",
    respiration: "Depends on upper vs lower ribs",
    techniqueSuggestion: { smallKvp: 65, smallMas: 12.0, mediumKvp: 70, mediumMas: 18.0, largeKvp: 75, largeMas: 22.0, notes: null },
    positioningSteps: [
      "Rotate patient 45 degrees from AP or PA position",
      "RPO/LPO: injured side UP - demonstrates axillary (lateral) ribs",
      "RAO/LAO: injured side DOWN - demonstrates posterior ribs",
      "Support with sponges/sandbags as needed",
      "Center to the affected ribs"
    ],
    evaluationCriteria: [
      "45 degree rotation demonstrated",
      "Axillary or posterior ribs cleared from superimposition",
      "Affected area well demonstrated"
    ],
    commonErrors: [
      "Insufficient or excessive rotation",
      "Wrong oblique direction for the anatomy in question",
      "Not centered to the injury site"
    ],
    tipsAndTricks: [
      "Injured side UP (posterior oblique) = axillary ribs",
      "Injured side DOWN (anterior oblique) = posterior ribs",
      "Memorize: 'Up shows the side, Down shows the back'"
    ],
    alternateContext: null
  },

  // Sternum
  {
    id: "sternum_rao",
    name: "Sternum RAO",
    bodyPartId: "sternum",
    isStandard: true,
    projection: "RAO (15-20 degrees)",
    patientPosition: "Prone, rotated 15-20 degrees RAO",
    centralRay: "Perpendicular to IR at midsternum",
    sid: "40 inches (102 cm) or 30 inches for air-gap technique",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid preferred; or use close-collimation with increased OID",
    collimation: "Include jugular notch to xiphoid; narrow laterally",
    markers: "R marker",
    shielding: "Gonadal shield",
    respiration: "Shallow breathing technique (3-4 second exposure) OR suspended expiration",
    techniqueSuggestion: { smallKvp: 65, smallMas: 15.0, mediumKvp: 70, mediumMas: 20.0, largeKvp: 75, largeMas: 25.0, notes: "Use shallow breathing technique for oblique: long exposure time, low mA" },
    positioningSteps: [
      "Position patient prone on table",
      "Rotate 15-20 degrees into RAO position",
      "The slight rotation projects sternum over the heart shadow (homogeneous background)",
      "Center IR to midsternum",
      "Use shallow breathing technique (3-4 second exposure) to blur overlying ribs and lung markings"
    ],
    evaluationCriteria: [
      "Sternum projected over heart shadow (uniform density background)",
      "Entire sternum from jugular notch to xiphoid visible",
      "Overlying rib and lung detail blurred if breathing technique used",
      "Sternum in profile without foreshortening"
    ],
    commonErrors: [
      "Too much rotation - sternum projects off the heart into lung field",
      "Too little rotation - sternum superimposed on spine",
      "Not using breathing technique - ribs obscure sternum",
      "Exposure too short if using breathing technique"
    ],
    tipsAndTricks: [
      "Thin patients need less rotation (15 degrees), larger patients need more (20 degrees)",
      "The key is projecting the sternum over the heart - check patient thickness to gauge rotation",
      "Breathing technique: use lowest mA station and longest time (3-4 sec minimum)",
      "If patient cannot hold still, use suspended expiration instead"
    ],
    alternateContext: null
  },

  {
    id: "sternum_lateral",
    name: "Sternum Lateral",
    bodyPartId: "sternum",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Standing or recumbent lateral",
    centralRay: "Perpendicular to IR at midsternum",
    sid: "72 inches (183 cm) - extended SID to reduce magnification",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Jugular notch to xiphoid; include anterior chest wall",
    markers: "R or L marker",
    shielding: "Gonadal shield",
    respiration: "Full inspiration (pushes sternum anterior away from spine)",
    techniqueSuggestion: { smallKvp: 70, smallMas: 8.0, mediumKvp: 75, mediumMas: 12.0, largeKvp: 80, largeMas: 15.0, notes: "Use 72-inch SID for reduced magnification" },
    positioningSteps: [
      "Position patient in true lateral (either side against IR)",
      "Arms behind back, clasped if possible",
      "Stand patient forward slightly from Bucky to use extended SID",
      "Center to midsternum",
      "Ensure true lateral - no rotation"
    ],
    evaluationCriteria: [
      "Sternum in true lateral profile",
      "Entire sternum visible from jugular notch to xiphoid",
      "Minimal magnification from extended SID",
      "No rotation - look at posterior ribs"
    ],
    commonErrors: [
      "Rotation - sternum not in true profile",
      "Arms not behind back - superimposed on sternum",
      "Using 40-inch SID - too much magnification"
    ],
    tipsAndTricks: [
      "Use 72-inch SID whenever possible to reduce magnification",
      "Full inspiration helps push sternum forward away from spine",
      "Have patient clasp hands behind back to pull shoulders posterior"
    ],
    alternateContext: null
  },

  // SC Joints
  {
    id: "sc_joints_pa",
    name: "SC Joints PA",
    bodyPartId: "sc_joints",
    isStandard: true,
    projection: "PA",
    patientPosition: "Prone or standing PA",
    centralRay: "Perpendicular to IR at T3 (level of jugular notch posteriorly)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Both SC joints visible",
    markers: "R marker",
    shielding: "Gonadal shield",
    respiration: "Suspended expiration",
    techniqueSuggestion: { smallKvp: 65, smallMas: 10.0, mediumKvp: 70, mediumMas: 15.0, largeKvp: 75, largeMas: 20.0, notes: null },
    positioningSteps: [
      "Position patient PA (prone or upright)",
      "Center MSP to midline of IR",
      "CR perpendicular to IR entering at T3 posteriorly",
      "Collimate closely to SC joint region"
    ],
    evaluationCriteria: [
      "Both SC joints visible for comparison",
      "SC joints seen through vertebral body of T3",
      "No rotation - SC joints equidistant from MSP"
    ],
    commonErrors: [
      "Rotation making SC joints appear asymmetric",
      "CR level too high or low"
    ],
    tipsAndTricks: [
      "Compare both sides - bilateral SC joints should look symmetric",
      "If one side is abnormal, the oblique (RAO/LAO) will isolate each joint"
    ],
    alternateContext: null
  },
];
