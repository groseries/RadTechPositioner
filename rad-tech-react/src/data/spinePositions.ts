import type { Position } from '../types';
import { PatientFactor } from '../types';

export const spinePositions: Position[] = [
  // Cervical Spine
  {
    id: "c_spine_ap",
    name: "C-Spine AP (C3-C7)",
    bodyPartId: "c_spine",
    isStandard: true,
    projection: "AP (15-20 degrees cephalad)",
    patientPosition: "Upright or supine, chin raised to clear mandible from upper bodies",
    centralRay: "15-20 degrees cephalad at level of C4 (lower thyroid cartilage)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "C3-C7 vertebral bodies",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended on expiration; slow exhale through open mouth",
    techniqueSuggestion: { smallKvp: 70, smallMas: 8.0, mediumKvp: 75, mediumMas: 12.0, largeKvp: 80, largeMas: 15.0, notes: null },
    positioningSteps: [
      "Position patient upright or supine with MSP centered to IR",
      "Extend chin slightly to clear mandible from C3-C4 area",
      "Angle CR 15-20 degrees cephalad to C4 level",
      "The angle opens the intervertebral disk spaces",
      "Expose on slow exhalation to lower shoulders"
    ],
    evaluationCriteria: [
      "C3-C7 vertebral bodies visible",
      "Mandible does not superimpose on C3",
      "Intervertebral disk spaces open",
      "Spinous processes midline (no rotation)",
      "Uncinate processes visible bilaterally on C3-C7"
    ],
    commonErrors: [
      "Mandible superimposed on upper cervical bodies",
      "Insufficient CR angle - disk spaces not open",
      "Rotation - spinous processes not midline"
    ],
    tipsAndTricks: [
      "The 15-20 degree cephalad angle compensates for the cervical lordosis",
      "Have patient slowly exhale and raise chin to clear mandible",
      "If mandible still overlaps, increase CR angle slightly"
    ],
    alternateContext: null
  },

  {
    id: "c_spine_lateral",
    name: "C-Spine Lateral",
    bodyPartId: "c_spine",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Upright, left shoulder against Bucky, arms relaxed at sides with shoulders pulled down",
    centralRay: "Perpendicular to IR at C4 level",
    sid: "72 inches (183 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid or Bucky",
    collimation: "Include skull base (occiput) to C7-T1",
    markers: "R or L (anterior side)",
    shielding: "Gonadal shield",
    respiration: "Suspended; pull shoulders down on exhale",
    techniqueSuggestion: { smallKvp: 70, smallMas: 10.0, mediumKvp: 75, mediumMas: 15.0, largeKvp: 80, largeMas: 20.0, notes: "Use 72-inch SID to minimize magnification" },
    positioningSteps: [
      "Position patient in true lateral position, left side against IR",
      "Raise IR to include skull base/occiput",
      "Have patient relax shoulders down (sandbags in hands or pull down)",
      "Use 72-inch SID",
      "Chin slightly extended to prevent mandible from superimposing C1-C2",
      "MSP parallel to IR, interpupillary line perpendicular"
    ],
    evaluationCriteria: [
      "ALL 7 cervical vertebrae visible (C1 through C7)",
      "C7-T1 junction included (CRITICAL in trauma)",
      "Vertebral bodies in true lateral - no rotation",
      "Intervertebral disk spaces open",
      "Mandibular rami superimposed (confirms no rotation)",
      "Soft tissue visible (prevertebral soft tissue for hematoma)"
    ],
    commonErrors: [
      "C7 not included - need swimmer's view",
      "Rotation - mandibular rami not superimposed",
      "Chin not extended enough - mandible covers C1-C2",
      "Shoulders too high - obscuring lower cervical bodies"
    ],
    tipsAndTricks: [
      "MUST see C7-T1 or the study is incomplete",
      "If shoulders are broad: use swimmer's lateral for C7-T1",
      "72-inch SID is standard for lateral C-spine",
      "Have patient hold sandbags or weights to pull shoulders down",
      "In TRAUMA: do NOT move patient's neck - take cross-table lateral with collar on"
    ],
    alternateContext: null
  },

  {
    id: "c_spine_oblique",
    name: "C-Spine Oblique",
    bodyPartId: "c_spine",
    isStandard: true,
    projection: "Oblique (45 degrees, both RPO/LPO or RAO/LAO)",
    patientPosition: "Rotated 45 degrees from lateral (or 45 from AP if anterior oblique)",
    centralRay: "15-20 degrees caudad for AP obliques; 15-20 degrees cephalad for PA obliques, at C4",
    sid: "72 inches (183 cm) for PA obliques; 40 inches for AP obliques",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "C-spine including intervertebral foramina",
    markers: "R or L, indicate oblique position",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 10.0, mediumKvp: 75, mediumMas: 14.0, largeKvp: 80, largeMas: 18.0, notes: null },
    positioningSteps: [
      "Rotate patient 45 degrees from AP (posterior oblique) or PA (anterior oblique)",
      "PA obliques (RAO/LAO): upside foramina demonstrated (closest to IR)",
      "AP obliques (RPO/LPO): downside foramina demonstrated (furthest from IR)",
      "Center to C4 level",
      "Apply CR angle: cephalad for AP obliques, caudad for PA obliques"
    ],
    evaluationCriteria: [
      "Intervertebral foramina open and well demonstrated",
      "Pedicles visible en face on oblique side",
      "C1-C7 bodies visible",
      "45 degrees rotation confirmed"
    ],
    commonErrors: [
      "Insufficient rotation - foramina not open",
      "Wrong CR angle direction",
      "Only doing one side instead of bilateral obliques"
    ],
    tipsAndTricks: [
      "AP obliques show downside foramina; PA obliques show upside foramina",
      "Remember: RAO shows RIGHT foramina (upside); LPO shows RIGHT foramina (downside)",
      "Both sides should be done for comparison"
    ],
    alternateContext: null
  },

  // C1-C2 (Open Mouth Odontoid)
  {
    id: "c1_c2_open_mouth",
    name: "C1-C2 Open Mouth (Odontoid/Dens)",
    bodyPartId: "c1_c2",
    isStandard: true,
    projection: "AP Open Mouth",
    patientPosition: "Upright or supine, mouth wide open",
    centralRay: "Perpendicular to IR through the open mouth, at level of C2",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Open mouth area",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended; instruct patient to hold mouth open during exposure (say 'ah' quietly)",
    techniqueSuggestion: { smallKvp: 70, smallMas: 10.0, mediumKvp: 75, mediumMas: 14.0, largeKvp: 80, largeMas: 18.0, notes: null },
    positioningSteps: [
      "Position patient AP (upright or supine)",
      "Have patient open mouth as wide as possible",
      "Adjust head position so line from lower edge of upper teeth to base of skull (mastoid tip) is perpendicular to IR",
      "CR perpendicular to IR through the open mouth to C2",
      "Tell patient to say 'ah' to press tongue to floor of mouth and open soft palate"
    ],
    evaluationCriteria: [
      "Dens (odontoid process) clearly visible through open mouth",
      "Lateral masses of C1 (atlas) visible on each side",
      "C1-C2 joint spaces visible",
      "C1 lateral masses aligned with C2 body (overhang = possible Jefferson fracture)",
      "No superimposition of teeth or occiput on dens"
    ],
    commonErrors: [
      "Mouth not open enough - teeth superimpose on dens",
      "Head tilted - occiput superimposed on dens",
      "Head flexed too much - teeth overlap dens from above",
      "Patient closes mouth during exposure"
    ],
    tipsAndTricks: [
      "Have patient say 'ah' - depresses tongue and raises soft palate out of the way",
      "If upper teeth overlap dens: tilt head slightly more posteriorly",
      "If occiput overlaps dens: flex chin slightly",
      "Practice the mouth position before exposing",
      "In TRAUMA: Fuchs method or CT may be needed if patient cannot open mouth"
    ],
    alternateContext: null
  },

  {
    id: "c1_c2_fuchs",
    name: "C1-C2 Fuchs Method (AP Axial Dens)",
    bodyPartId: "c1_c2",
    isStandard: false,
    projection: "AP through foramen magnum",
    patientPosition: "Supine, head extended so chin tip and mastoid tip are vertical",
    centralRay: "Perpendicular to IR entering at chin point, directed through foramen magnum",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "C1-C2 region",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 12.0, mediumKvp: 80, mediumMas: 16.0, largeKvp: 85, largeMas: 20.0, notes: "Higher technique through skull base" },
    positioningSteps: [
      "Patient supine, head fully extended (chin up)",
      "Adjust so line from chin tip to mastoid tip is perpendicular to IR",
      "CR perpendicular to IR, entering at chin, directed through foramen magnum",
      "This projects the dens through the foramen magnum"
    ],
    evaluationCriteria: [
      "Dens projected through foramen magnum",
      "Dens visible without superimposition of occipital bone",
      "Tip of dens clearly visible"
    ],
    commonErrors: [
      "Insufficient extension - dens superimposed on skull base",
      "CR angulation incorrect"
    ],
    tipsAndTricks: [
      "Use when patient cannot open mouth for open-mouth odontoid",
      "Requires significant neck extension - may not be possible in trauma",
      "CT is often the preferred alternative in trauma"
    ],
    alternateContext: {
      reason: "Patient cannot open mouth (jaw wired, fracture, intubated) for standard odontoid view",
      patientFactors: [PatientFactor.Trauma, PatientFactor.Intubated, PatientFactor.LimitedROM, PatientFactor.CannotFlex],
      advantagesOverStandard: "Demonstrates dens without requiring mouth opening; useful for wired jaw or intubated patients"
    }
  },

  // Cervicothoracic Junction (Swimmer's)
  {
    id: "swimmers_lateral",
    name: "Swimmer's Lateral (Cervicothoracic)",
    bodyPartId: "cervicothoracic",
    isStandard: true,
    projection: "Lateral (Twining method)",
    patientPosition: "Lateral or cross-table lateral; one arm raised, one arm down",
    centralRay: "Perpendicular to IR at C7-T1 junction (or slight caudad angle)",
    sid: "40-72 inches",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "C7-T1 junction area",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Breathing technique (long exposure) or suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 20.0, mediumKvp: 80, mediumMas: 30.0, largeKvp: 85, largeMas: 40.0, notes: "High technique needed through shoulders; consider breathing technique" },
    positioningSteps: [
      "Position patient lateral (or cross-table for trauma)",
      "Raise arm closest to IR ABOVE head (reach overhead)",
      "Pull arm furthest from IR DOWN and slightly posterior",
      "This separates the shoulders and opens the C7-T1 junction",
      "Center to C7-T1 level",
      "Use breathing technique to blur rib/shoulder superimposition"
    ],
    evaluationCriteria: [
      "C7-T1 junction (and T1-T2) clearly visible",
      "Shoulders separated - one projected superiorly, one inferiorly",
      "Vertebral bodies visible between the shoulders",
      "Lateral alignment assessable"
    ],
    commonErrors: [
      "Arms not separated enough - shoulders still overlapping",
      "Technique too low - cannot see through shoulders",
      "Breathing technique not used or exposure too short"
    ],
    tipsAndTricks: [
      "Essential when standard lateral C-spine does not show C7",
      "Breathing technique: low mA, 3-4 second exposure to blur ribs",
      "In TRAUMA: do this cross-table without moving patient's neck",
      "May need to angle CR 3-5 degrees caudad to open disk spaces"
    ],
    alternateContext: null
  },

  // Thoracic Spine
  {
    id: "t_spine_ap",
    name: "T-Spine AP",
    bodyPartId: "t_spine",
    isStandard: true,
    projection: "AP",
    patientPosition: "Upright or supine",
    centralRay: "Perpendicular to IR at T7 (level of inferior scapular angle)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "T1-T12 (or as much as possible on one IR)",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended on expiration",
    techniqueSuggestion: { smallKvp: 75, smallMas: 15.0, mediumKvp: 80, mediumMas: 20.0, largeKvp: 85, largeMas: 30.0, notes: "Anode heel effect: place cathode (thick end) toward lower T-spine" },
    positioningSteps: [
      "Position patient AP (supine or upright)",
      "Center MSP to IR",
      "Center at T7 level (inferior angle of scapulae)",
      "Flex knees if supine to reduce thoracic kyphosis",
      "Take advantage of anode heel effect: cathode toward thick (lower) end"
    ],
    evaluationCriteria: [
      "T1-T12 visible (upper T-spine may be faint due to shoulder superimposition)",
      "Vertebral bodies in midline (no rotation)",
      "Pedicles equidistant from spinous processes",
      "Disk spaces visible (may need to assess upper and lower separately)"
    ],
    commonErrors: [
      "Upper T-spine overexposed or lower underexposed (anode heel effect)",
      "Rotation",
      "Not including T1 or T12"
    ],
    tipsAndTricks: [
      "Use anode heel effect: place cathode (hot end) toward the feet/lower thorax",
      "Upper T-spine (T1-T4) is often best seen on AP cervical or swimmer's views",
      "Exhale to reduce lung density and improve visualization of upper bodies"
    ],
    alternateContext: null
  },

  {
    id: "t_spine_lateral",
    name: "T-Spine Lateral",
    bodyPartId: "t_spine",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent or upright lateral",
    centralRay: "Perpendicular to IR at T7",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "T1-T12 vertebral bodies",
    markers: "R or L (anterior side)",
    shielding: "Gonadal shield",
    respiration: "Breathing technique (3-4 second exposure at low mA) preferred",
    techniqueSuggestion: { smallKvp: 80, smallMas: 25.0, mediumKvp: 85, mediumMas: 35.0, largeKvp: 90, largeMas: 45.0, notes: "Use breathing technique to blur ribs and lung markings" },
    positioningSteps: [
      "Position patient in true lateral",
      "Arms raised above head or forward to clear thorax",
      "Center T7 to IR",
      "Place radiolucent sponge under lower thorax to keep spine level (if lateral recumbent)",
      "Use BREATHING technique: long exposure (3-4 sec), low mA"
    ],
    evaluationCriteria: [
      "T-spine in true lateral",
      "Vertebral bodies clearly visible through ribcage (breathing technique helps)",
      "Intervertebral disk spaces visible",
      "Posterior ribs superimposed (confirms true lateral)",
      "T1-T12 included"
    ],
    commonErrors: [
      "Not using breathing technique - ribs obscure bodies",
      "Spine not level - need sponge support",
      "Rotation - posterior ribs not superimposed",
      "Arms not raised - superimposed on upper T-spine"
    ],
    tipsAndTricks: [
      "BREATHING TECHNIQUE is the key: low mA, 3-4 second exposure blurs the ribs",
      "Sponge under waist keeps spine parallel to IR (prevents lateral curvature artifact)",
      "Arms overhead or hugging a pillow in front",
      "Cathode toward thicker lower thorax for anode heel effect"
    ],
    alternateContext: null
  },

  // Lumbar Spine
  {
    id: "l_spine_ap",
    name: "L-Spine AP",
    bodyPartId: "l_spine",
    isStandard: true,
    projection: "AP",
    patientPosition: "Supine (preferred) or upright; knees flexed with feet flat on table",
    centralRay: "Perpendicular to IR at L3 (level of iliac crest minus 1.5 inches, or at umbilicus level)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "T12-S1, include SI joints laterally",
    markers: "R or L",
    shielding: "Gonadal shield for males if possible (females: may obscure sacrum/SI joints)",
    respiration: "Suspended on expiration",
    techniqueSuggestion: { smallKvp: 75, smallMas: 25.0, mediumKvp: 80, mediumMas: 40.0, largeKvp: 85, largeMas: 60.0, notes: null },
    positioningSteps: [
      "Position patient supine, flex knees with feet flat on table",
      "Flexed knees reduce lumbar lordosis and bring spine closer to IR",
      "Center MSP to IR at L3 level (about 1.5 inches above iliac crest)",
      "Ensure no rotation - ASIS equidistant from table",
      "Collimate to include T12-S1"
    ],
    evaluationCriteria: [
      "L1-L5 vertebral bodies visible",
      "Intervertebral disk spaces open (from reduced lordosis with flexed knees)",
      "Pedicles equidistant from spinous processes (no rotation)",
      "SI joints visible bilaterally",
      "Spinous processes midline"
    ],
    commonErrors: [
      "Knees not flexed - lordosis exaggerated, disk spaces not open",
      "Rotation - pedicles not equidistant",
      "Underexposed for large patients"
    ],
    tipsAndTricks: [
      "Flexed knees are essential for good AP lumbar spine",
      "Feel for ASIS bilaterally to check for rotation",
      "If specifically checking for spondylolisthesis, may want upright view as well",
      "Expose on expiration to improve image quality"
    ],
    alternateContext: null
  },

  {
    id: "l_spine_lateral",
    name: "L-Spine Lateral",
    bodyPartId: "l_spine",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent, knees and hips flexed, arms above head or in front",
    centralRay: "Perpendicular to IR at L3 (iliac crest level or 1.5 inches above)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "T12-S1",
    markers: "R or L (anterior)",
    shielding: "Gonadal shield when possible",
    respiration: "Suspended on expiration",
    techniqueSuggestion: { smallKvp: 85, smallMas: 40.0, mediumKvp: 90, mediumMas: 60.0, largeKvp: 95, largeMas: 80.0, notes: "Higher technique needed for lateral through body" },
    positioningSteps: [
      "Position patient in lateral recumbent position",
      "Flex knees and hips for stability and reduced lordosis",
      "Place radiolucent sponge under waist to keep spine level (CRITICAL)",
      "Arms above head or in front of body",
      "Ensure true lateral - shoulder and pelvis stacked",
      "Center L3 to IR"
    ],
    evaluationCriteria: [
      "L1-L5 in true lateral",
      "Intervertebral disk spaces open",
      "Vertebral body margins clear and sharp",
      "Posterior elements (pars interarticularis, facets) visible",
      "L5-S1 may need separate spot view if not well demonstrated"
    ],
    commonErrors: [
      "No sponge under waist - spine sags, not level",
      "Rotation - vertebral body margins doubled",
      "L5-S1 not visible (need spot lateral)",
      "Insufficient technique - underpenetrated"
    ],
    tipsAndTricks: [
      "SPONGE under the waist is essential for recumbent lateral",
      "Lateral lumbar needs significantly more technique than AP",
      "L5-S1 often needs a separate spot lateral with caudad angle",
      "True lateral: iliac crests should nearly superimpose"
    ],
    alternateContext: null
  },

  {
    id: "l_spine_oblique",
    name: "L-Spine Oblique (Scotty Dog)",
    bodyPartId: "l_spine",
    isStandard: true,
    projection: "AP Oblique (RPO/LPO, 45 degrees)",
    patientPosition: "Supine, rotated 45 degrees (posterior oblique)",
    centralRay: "Perpendicular to IR at L3 level, 2 inches medial to elevated ASIS",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "L1-S1",
    markers: "R or L, indicate RPO/LPO",
    shielding: "Gonadal shield when possible",
    respiration: "Suspended on expiration",
    techniqueSuggestion: { smallKvp: 80, smallMas: 35.0, mediumKvp: 85, mediumMas: 50.0, largeKvp: 90, largeMas: 65.0, notes: null },
    positioningSteps: [
      "From supine position, rotate patient 45 degrees",
      "RPO shows LEFT pars/zygapophyseal joints (downside)",
      "LPO shows RIGHT pars/zygapophyseal joints (downside)",
      "Support with sponges",
      "Center 2 inches medial to elevated ASIS at L3 level"
    ],
    evaluationCriteria: [
      "Scotty dog appearance of lumbar vertebrae",
      "Scotty dog parts: ear=superior articular process, nose=transverse process, eye=pedicle, neck=pars interarticularis, front leg=inferior articular process, body=lamina",
      "Pars interarticularis (scotty dog neck) clearly visible",
      "Zygapophyseal (facet) joints open",
      "45-degree obliquity demonstrated"
    ],
    commonErrors: [
      "Insufficient rotation - scotty dogs not well formed",
      "Excessive rotation - anatomy distorted",
      "Not centering to upside (elevated side)"
    ],
    tipsAndTricks: [
      "The Scotty Dog is the hallmark of a properly positioned lumbar oblique",
      "Fracture of the pars (scotty dog's neck) = spondylolysis",
      "RPO/LPO (posterior obliques) show DOWNSIDE anatomy",
      "Both sides should be done for comparison",
      "Memorize the scotty dog anatomy - it's on the registry exam!"
    ],
    alternateContext: null
  },

  // L5-S1 Spot
  {
    id: "l5_s1_lateral_spot",
    name: "L5-S1 Lateral Spot",
    bodyPartId: "l5_s1",
    isStandard: true,
    projection: "Lateral (spot view)",
    patientPosition: "Lateral recumbent, same as lateral L-spine",
    centralRay: "Perpendicular to IR (or 5 degrees caudad) at L5-S1 junction, 1.5 inches below iliac crest",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10 or 10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Tight to L5-S1 junction",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended expiration",
    techniqueSuggestion: { smallKvp: 90, smallMas: 50.0, mediumKvp: 95, mediumMas: 70.0, largeKvp: 100, largeMas: 90.0, notes: "Higher technique than regular lateral L-spine - shooting through pelvis" },
    positioningSteps: [
      "Same position as lateral L-spine with waist support sponge",
      "Center 1.5 inches below iliac crest level at L5-S1",
      "May angle CR 5 degrees caudad to open L5-S1 disk space",
      "Tight collimation to L5-S1 region"
    ],
    evaluationCriteria: [
      "L5-S1 disk space OPEN and well demonstrated",
      "L5 body and S1 body clearly visible",
      "No rotation",
      "Adequate penetration through pelvis"
    ],
    commonErrors: [
      "Using same technique as lateral L-spine - not enough",
      "Not angling CR - disk space not open",
      "No waist sponge - spine not level"
    ],
    tipsAndTricks: [
      "L5-S1 spot needs MORE technique than the rest of the lateral L-spine",
      "You're shooting through the wings of the ilia - increase technique accordingly",
      "5-degree caudad angle helps open the L5-S1 disk space",
      "This is often the most diagnostically important image in the L-spine series"
    ],
    alternateContext: null
  },

  // Sacrum & Coccyx
  {
    id: "sacrum_ap",
    name: "Sacrum AP",
    bodyPartId: "sacrum_coccyx",
    isStandard: true,
    projection: "AP Axial (15 degrees cephalad)",
    patientPosition: "Supine",
    centralRay: "15 degrees cephalad, entering midline at level of ASIS",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Sacrum from L5 to coccyx tip",
    markers: "R or L",
    shielding: "Gonadal shield for males",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 30.0, mediumKvp: 80, mediumMas: 40.0, largeKvp: 85, largeMas: 50.0, notes: null },
    positioningSteps: [
      "Patient supine, MSP centered",
      "Angle CR 15 degrees CEPHALAD for sacrum",
      "Enter at midline, level of ASIS",
      "This angle elongates the sacrum (reduces foreshortening from its curved shape)"
    ],
    evaluationCriteria: [
      "Sacrum elongated without foreshortening",
      "Sacral foramina visible",
      "SI joints visible bilaterally",
      "Sacrum centered without rotation"
    ],
    commonErrors: [
      "Using coccyx angle (caudad) instead of sacrum angle (cephalad)",
      "Rotation",
      "Insufficient angulation - sacrum foreshortened"
    ],
    tipsAndTricks: [
      "SACRUM = CEPHALAD angle (15 degrees); COCCYX = CAUDAD angle (10 degrees)",
      "Opposite directions! Remember: Sacrum = Superior direction"
    ],
    alternateContext: null
  },

  {
    id: "coccyx_ap",
    name: "Coccyx AP",
    bodyPartId: "sacrum_coccyx",
    isStandard: true,
    projection: "AP Axial (10 degrees caudad)",
    patientPosition: "Supine",
    centralRay: "10 degrees CAUDAD, entering midline 2 inches superior to symphysis pubis",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10 or 10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Tight to coccyx region",
    markers: "R or L",
    shielding: "Gonadal shield for males",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 20.0, mediumKvp: 75, mediumMas: 30.0, largeKvp: 80, largeMas: 40.0, notes: null },
    positioningSteps: [
      "Patient supine, MSP centered",
      "Angle CR 10 degrees CAUDAD for coccyx",
      "Enter 2 inches above symphysis pubis",
      "This projects the coccyx below the symphysis"
    ],
    evaluationCriteria: [
      "Coccyx visible below symphysis pubis",
      "Coccyx demonstrated in full length",
      "No rotation",
      "Adequate penetration"
    ],
    commonErrors: [
      "Using sacrum angle (cephalad) instead of coccyx angle (caudad)",
      "Coccyx superimposed on symphysis"
    ],
    tipsAndTricks: [
      "COCCYX = CAUDAD angle (10 degrees); opposite of sacrum",
      "Patient must have clean bowel prep or gas may obscure coccyx",
      "Lateral is actually more diagnostic for coccyx fractures"
    ],
    alternateContext: null
  },

  {
    id: "sacrum_coccyx_lateral",
    name: "Sacrum/Coccyx Lateral",
    bodyPartId: "sacrum_coccyx",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent",
    centralRay: "Perpendicular to IR at ASIS level (sacrum) or coccyx level",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include entire sacrum or coccyx",
    markers: "R or L",
    shielding: "When possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 85, smallMas: 50.0, mediumKvp: 90, mediumMas: 70.0, largeKvp: 95, largeMas: 90.0, notes: "High technique through pelvis" },
    positioningSteps: [
      "Lateral recumbent, knees and hips flexed",
      "Support between knees with sponge",
      "Center to sacrum (ASIS level) or coccyx (2 inches below ASIS)",
      "True lateral - confirm no rotation"
    ],
    evaluationCriteria: [
      "Sacrum/coccyx in lateral profile",
      "L5-S1 junction visible",
      "Sacral curve demonstrated",
      "No rotation"
    ],
    commonErrors: ["Rotation", "Insufficient technique", "Not centered correctly"],
    tipsAndTricks: [
      "Lateral coccyx is often the most diagnostic view for coccyx fractures",
      "Needs high technique through thick pelvis",
      "Tight collimation reduces scatter and improves image quality"
    ],
    alternateContext: null
  },

  // SI Joints
  {
    id: "si_joints_ap_axial",
    name: "SI Joints AP Axial",
    bodyPartId: "si_joints",
    isStandard: true,
    projection: "AP Axial (30-35 degrees cephalad)",
    patientPosition: "Supine",
    centralRay: "30-35 degrees cephalad at level of ASIS",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Both SI joints",
    markers: "R or L",
    shielding: "Males when possible",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 30.0, mediumKvp: 80, mediumMas: 40.0, largeKvp: 85, largeMas: 50.0, notes: null },
    positioningSteps: [
      "Patient supine, MSP centered",
      "Angle CR 30-35 degrees cephalad",
      "Enter at midline, 1.5 inches inferior to ASIS level",
      "This steep angle opens the SI joints, which are angled posteriorly"
    ],
    evaluationCriteria: [
      "Both SI joints open and visible for comparison",
      "Joint margins clearly demonstrated",
      "No rotation"
    ],
    commonErrors: [
      "Insufficient CR angle - joints not open",
      "Rotation - joints appear asymmetric"
    ],
    tipsAndTricks: [
      "SI joints angle posteriorly at about 30 degrees - hence the steep CR angle",
      "Also can do oblique views (RPO/LPO, 25-30 degrees) to isolate each joint",
      "CT and MRI have largely replaced plain film SI joint imaging"
    ],
    alternateContext: null
  },

  // Scoliosis Series
  {
    id: "scoliosis_pa",
    name: "Scoliosis PA Full Spine",
    bodyPartId: "scoliosis_series",
    isStandard: true,
    projection: "PA (standing)",
    patientPosition: "Standing PA (PA preferred over AP to reduce breast and thyroid dose)",
    centralRay: "Perpendicular to IR at mid-spine",
    sid: "72 inches (183 cm)",
    imageReceptorSize: "14x36 (full spine) or two 14x17 with overlap",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include C7 to sacrum and bilateral iliac crests",
    markers: "R or L, indicate upright and PA",
    shielding: "Breast shields if PA; gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 80, smallMas: 20.0, mediumKvp: 85, mediumMas: 30.0, largeKvp: 90, largeMas: 40.0, notes: "PA reduces breast dose by 75-95% compared to AP" },
    positioningSteps: [
      "Patient stands PA (facing the IR/Bucky)",
      "Include from C7 to sacrum and iliac crests",
      "Use 72-inch SID for full length",
      "Ensure patient is standing naturally, not compensating",
      "Include both iliac crests (for Risser staging - skeletal maturity)",
      "Weight equally distributed on both feet"
    ],
    evaluationCriteria: [
      "Entire spine from C7 to sacrum visible",
      "Both iliac crests included (Risser staging)",
      "No rotation",
      "Curvature demonstrated for Cobb angle measurement",
      "Standing (weight-bearing) position confirmed"
    ],
    commonErrors: [
      "Using AP instead of PA (increased breast dose)",
      "Not including iliac crests (cannot do Risser staging)",
      "Patient leaning or compensating posture"
    ],
    tipsAndTricks: [
      "PA projection reduces breast dose by up to 95% - ALWAYS use PA for scoliosis",
      "Risser staging (iliac crest apophysis) indicates skeletal maturity and growth remaining",
      "Often need lateral bending views (right and left) for flexibility assessment",
      "72-inch SID reduces divergence for full-length imaging"
    ],
    alternateContext: null
  },
];
