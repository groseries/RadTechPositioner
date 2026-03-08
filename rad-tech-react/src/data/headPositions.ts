import type { Position } from '../types';

export const headPositions: Position[] = [
  // Skull
  {
    id: "skull_ap_caldwell",
    name: "Skull PA (Caldwell)",
    bodyPartId: "skull",
    isStandard: true,
    projection: "PA Axial (15 degrees caudad - Caldwell)",
    patientPosition: "Prone or upright PA, forehead and nose on IR/table",
    centralRay: "15 degrees caudad, exiting at nasion",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include entire cranium",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 15.0, mediumKvp: 75, mediumMas: 20.0, largeKvp: 80, largeMas: 25.0, notes: null },
    positioningSteps: [
      "Position patient PA - forehead and nose touching IR",
      "OML (orbitomeatal line) perpendicular to IR",
      "MSP centered and perpendicular to IR",
      "CR angled 15 degrees caudad, exiting at nasion (bridge of nose)",
      "This projects petrous ridges into lower 1/3 of orbits"
    ],
    evaluationCriteria: [
      "Petrous ridges projected into lower 1/3 of orbits",
      "Frontal bone demonstrated",
      "Crista galli and frontal crest visible",
      "Equal distance from lateral skull to lateral orbit borders bilaterally (no rotation)",
      "Entire cranium included"
    ],
    commonErrors: [
      "OML not perpendicular - petrous ridges not properly positioned",
      "Rotation - skull landmarks asymmetric",
      "CR angle wrong - petrous ridges too high or low in orbits"
    ],
    tipsAndTricks: [
      "The 15-degree Caldwell moves petrous ridges into lower orbits",
      "0 degrees = PA skull (petrous ridges fill orbits)",
      "25-30 degrees = petrous ridges below orbits (Caldwell variation for facial bones)"
    ],
    alternateContext: null
  },

  {
    id: "skull_ap_towne",
    name: "Skull AP Axial (Towne)",
    bodyPartId: "skull",
    isStandard: true,
    projection: "AP Axial (30 degrees caudad)",
    patientPosition: "Supine or upright AP",
    centralRay: "30 degrees caudad to OML (or 37 degrees to IOML), entering 2.5 inches above glabella",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include occipital bone and foramen magnum region",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 75, smallMas: 20.0, mediumKvp: 80, mediumMas: 25.0, largeKvp: 85, largeMas: 30.0, notes: null },
    positioningSteps: [
      "Position patient AP (supine or upright)",
      "Tuck chin slightly to bring OML perpendicular to IR",
      "CR 30 degrees caudad to OML (or 37 degrees to IOML)",
      "Enter 2.5 inches above glabella",
      "Exit through foramen magnum"
    ],
    evaluationCriteria: [
      "Dorsum sellae and posterior clinoid processes visible through foramen magnum",
      "Occipital bone clearly demonstrated",
      "Petrous ridges visible",
      "Equal distance from foramen magnum to lateral skull margins (no rotation)"
    ],
    commonErrors: [
      "Insufficient CR angle - dorsum sellae not projected into foramen magnum",
      "Chin not tucked enough - OML not perpendicular",
      "Rotation"
    ],
    tipsAndTricks: [
      "Towne = 30 degrees caudad, looking down through the skull to the occipital bone",
      "The key landmark: dorsum sellae projected within foramen magnum",
      "Also used for zygomatic arches (modified Towne at 37 degrees)"
    ],
    alternateContext: null
  },

  {
    id: "skull_lateral",
    name: "Skull Lateral",
    bodyPartId: "skull",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent or upright lateral, affected side down",
    centralRay: "Perpendicular to IR at a point 2 inches above EAM (external auditory meatus)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include entire cranium",
    markers: "R or L (indicate side down)",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 12.0, mediumKvp: 70, mediumMas: 15.0, largeKvp: 75, largeMas: 20.0, notes: null },
    positioningSteps: [
      "Position in true lateral - MSP parallel to IR",
      "Interpupillary line perpendicular to IR",
      "Place a sponge under chin or adjust head so IOML is parallel to transverse axis of IR",
      "Center 2 inches above EAM",
      "Affected side closest to IR if unilateral pathology suspected"
    ],
    evaluationCriteria: [
      "Sella turcica in profile",
      "No rotation: mandibular rami superimposed, orbital roofs superimposed",
      "Entire cranium from frontal to occipital included",
      "Floor of anterior, middle, and posterior fossa visible"
    ],
    commonErrors: [
      "Rotation - structures not superimposed",
      "MSP not parallel to IR",
      "Vertex or base of skull cut off"
    ],
    tipsAndTricks: [
      "True lateral: mandibular rami MUST superimpose",
      "Check by looking at orbital roofs - they should overlap",
      "Use sponge under chin to adjust IOML alignment",
      "Sella turcica should be clearly visible in profile"
    ],
    alternateContext: null
  },

  // Sinuses
  {
    id: "sinuses_pa_caldwell",
    name: "Sinuses PA Caldwell",
    bodyPartId: "sinuses",
    isStandard: true,
    projection: "PA Caldwell (15 degrees caudad)",
    patientPosition: "UPRIGHT (must be upright to show air-fluid levels)",
    centralRay: "15 degrees caudad, exiting at nasion",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include all sinuses",
    markers: "R or L, UPRIGHT marker",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 12.0, mediumKvp: 75, mediumMas: 15.0, largeKvp: 80, largeMas: 20.0, notes: null },
    positioningSteps: [
      "MUST be upright to demonstrate air-fluid levels",
      "Position PA with forehead and nose on upright Bucky",
      "OML perpendicular to IR",
      "CR 15 degrees caudad exiting at nasion",
      "Projects frontal sinuses above petrous ridges"
    ],
    evaluationCriteria: [
      "Frontal sinuses clearly demonstrated above petrous ridges",
      "Anterior ethmoid air cells visible",
      "No rotation",
      "Upright position for air-fluid level assessment"
    ],
    commonErrors: [
      "Performing supine instead of upright - CANNOT assess fluid levels!",
      "Rotation",
      "OML not perpendicular"
    ],
    tipsAndTricks: [
      "UPRIGHT is mandatory for sinuses - must see air-fluid levels",
      "This view best demonstrates frontal sinuses and anterior ethmoid cells",
      "Water's view (parietoacanthial) better demonstrates maxillary sinuses"
    ],
    alternateContext: null
  },

  {
    id: "sinuses_waters",
    name: "Sinuses Water's View (Parietoacanthial)",
    bodyPartId: "sinuses",
    isStandard: true,
    projection: "Parietoacanthial (MML perpendicular to IR)",
    patientPosition: "Upright PA with chin raised (extended)",
    centralRay: "Perpendicular to IR, exiting at acanthion (junction of nose and upper lip)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include maxillary sinuses and orbits",
    markers: "R or L, UPRIGHT marker",
    shielding: "Gonadal shield",
    respiration: "Suspended; mouth open for sphenoid sinus visualization",
    techniqueSuggestion: { smallKvp: 70, smallMas: 12.0, mediumKvp: 75, mediumMas: 15.0, largeKvp: 80, largeMas: 20.0, notes: null },
    positioningSteps: [
      "Position patient upright PA against Bucky",
      "Extend chin until MML (mentomeatal line) is perpendicular to IR",
      "Only the chin touches the Bucky (nose does NOT touch)",
      "CR perpendicular to IR, exiting at acanthion",
      "Have patient open mouth for sphenoid sinus visualization"
    ],
    evaluationCriteria: [
      "Petrous ridges projected BELOW the maxillary sinus floors (KEY criterion)",
      "Maxillary sinuses clearly demonstrated",
      "Orbits visible - check for orbital floor blowout fracture",
      "Sphenoid sinus visible through open mouth",
      "No rotation - equal distance from lateral orbit to skull margin"
    ],
    commonErrors: [
      "Chin not extended enough - petrous ridges superimpose maxillary sinuses",
      "Too much extension - petrous ridges too far below",
      "Not upright - cannot assess fluid levels",
      "Mouth closed - sphenoid sinus obscured by hard palate"
    ],
    tipsAndTricks: [
      "Water's view is THE best view for maxillary sinuses",
      "Key: petrous ridges must be BELOW the floor of the maxillary sinuses",
      "Open mouth shows sphenoid sinus through the oral cavity",
      "Also excellent for facial bone evaluation (orbits, zygomatic arches, nasal septum)"
    ],
    alternateContext: null
  },

  {
    id: "sinuses_lateral",
    name: "Sinuses Lateral",
    bodyPartId: "sinuses",
    isStandard: true,
    projection: "Lateral (upright)",
    patientPosition: "Upright lateral",
    centralRay: "Perpendicular to IR at outer canthus of eye (or 0.5-1 inch posterior to)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include all four sinus groups",
    markers: "R or L, UPRIGHT marker",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 10.0, mediumKvp: 70, mediumMas: 12.0, largeKvp: 75, largeMas: 15.0, notes: null },
    positioningSteps: [
      "Position patient in true lateral (upright)",
      "Center 0.5-1 inch posterior to outer canthus of eye",
      "True lateral: no rotation (orbital roofs superimposed)",
      "Include frontal, ethmoid, maxillary, and sphenoid sinuses"
    ],
    evaluationCriteria: [
      "All four sinus groups visible in lateral profile",
      "Sella turcica and sphenoid sinus well demonstrated",
      "Air-fluid levels visible if present (upright)",
      "No rotation (orbital roofs superimposed)"
    ],
    commonErrors: ["Rotation", "Not upright", "Anterior sinuses cut off"],
    tipsAndTricks: [
      "Lateral sinus view shows ALL four sinus groups on one image",
      "Excellent for air-fluid level assessment in all sinuses",
      "Must be upright for fluid level evaluation"
    ],
    alternateContext: null
  },

  // Facial Bones
  {
    id: "facial_bones_waters",
    name: "Facial Bones Water's",
    bodyPartId: "facial_bones",
    isStandard: true,
    projection: "Parietoacanthial (Water's method)",
    patientPosition: "Upright PA, chin extended, MML perpendicular to IR",
    centralRay: "Perpendicular to IR exiting at acanthion",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include orbits to mandible",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 12.0, mediumKvp: 75, mediumMas: 15.0, largeKvp: 80, largeMas: 20.0, notes: null },
    positioningSteps: [
      "Same positioning as sinuses Water's view",
      "Extend chin until MML perpendicular to IR",
      "CR perpendicular exiting at acanthion"
    ],
    evaluationCriteria: [
      "Petrous ridges below maxillary sinus floors",
      "Orbits, zygomatic arches, maxilla, and nasal bones visible",
      "Tripod fracture components evaluable",
      "No rotation"
    ],
    commonErrors: ["Insufficient extension", "Rotation"],
    tipsAndTricks: [
      "Same as sinuses Water's but evaluated for facial bone pathology",
      "Excellent screening view for facial fractures",
      "Look for: orbital floor blowout, zygomatic arch, Le Fort fractures"
    ],
    alternateContext: null
  },

  {
    id: "facial_bones_lateral",
    name: "Facial Bones Lateral",
    bodyPartId: "facial_bones",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral upright or recumbent",
    centralRay: "Perpendicular to zygoma (halfway between outer canthus and EAM)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include frontal bone to mandible",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 10.0, mediumKvp: 70, mediumMas: 12.0, largeKvp: 75, largeMas: 15.0, notes: null },
    positioningSteps: [
      "True lateral positioning",
      "Center at zygoma",
      "Include entire facial bone complex"
    ],
    evaluationCriteria: [
      "Facial bones in true lateral profile",
      "Nasal bones, maxilla, zygoma, mandible visible",
      "No rotation"
    ],
    commonErrors: ["Rotation", "Centered too far posterior (skull instead of face)"],
    tipsAndTricks: [
      "Center more anteriorly than skull lateral - you want the face, not the cranium",
      "Affected side closest to IR for detail"
    ],
    alternateContext: null
  },

  // Nasal Bones
  {
    id: "nasal_bones_lateral",
    name: "Nasal Bones Lateral",
    bodyPartId: "nasal_bones",
    isStandard: true,
    projection: "Lateral (both sides for comparison)",
    patientPosition: "Lateral, affected side closest to IR",
    centralRay: "Perpendicular to IR at bridge of nose (nasion)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid (small part)",
    collimation: "Tight to nasal bones",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 50, smallMas: 3.0, mediumKvp: 55, mediumMas: 4.0, largeKvp: 58, largeMas: 5.0, notes: "Small focal spot; soft tissue technique" },
    positioningSteps: [
      "Position in true lateral",
      "Center to bridge of nose (nasion)",
      "Use small focal spot and soft tissue technique",
      "Image BOTH sides for comparison (do right lateral and left lateral)"
    ],
    evaluationCriteria: [
      "Nasal bones in lateral profile",
      "Soft tissue visible (for nasal cartilage swelling)",
      "Anterior nasal spine visible",
      "No rotation"
    ],
    commonErrors: [
      "Technique too high - nasal bones burned out",
      "Only doing one side - need bilateral for comparison"
    ],
    tipsAndTricks: [
      "Soft tissue technique - very low kVp/mAs",
      "Do BOTH laterals for comparison",
      "Nasal bone fractures are subtle - compare both sides",
      "CT has largely replaced plain film for nasal bone evaluation"
    ],
    alternateContext: null
  },

  // Mandible
  {
    id: "mandible_pa",
    name: "Mandible PA (or PA Axial)",
    bodyPartId: "mandible",
    isStandard: true,
    projection: "PA (0 degrees for body) or PA Axial (20-25 degrees cephalad for rami)",
    patientPosition: "PA with forehead and nose on IR",
    centralRay: "Perpendicular for mandibular body; 20-25 degrees cephalad for rami",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include entire mandible",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 12.0, mediumKvp: 75, mediumMas: 15.0, largeKvp: 80, largeMas: 20.0, notes: null },
    positioningSteps: [
      "Position PA, forehead and nose on IR",
      "For mandibular body: CR perpendicular exiting at lips",
      "For rami: CR 20-25 degrees cephalad exiting at acanthion",
      "MSP centered"
    ],
    evaluationCriteria: [
      "Mandibular body or rami demonstrated (depending on area of interest)",
      "Bilateral for comparison",
      "No rotation"
    ],
    commonErrors: ["Wrong CR angle for area of interest", "Rotation"],
    tipsAndTricks: [
      "PA with no angle best demonstrates mandibular body",
      "Cephalad angle best demonstrates rami and condyles",
      "Panorex is preferred over plain film for mandible today"
    ],
    alternateContext: null
  },

  {
    id: "mandible_oblique",
    name: "Mandible Oblique (Body/Ramus)",
    bodyPartId: "mandible",
    isStandard: true,
    projection: "PA Oblique or axiolateral",
    patientPosition: "Head rotated to bring affected side perpendicular to IR",
    centralRay: "Perpendicular or slightly angled",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid or no grid depending on setup",
    collimation: "Include affected mandibular area",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 10.0, mediumKvp: 70, mediumMas: 12.0, largeKvp: 75, largeMas: 15.0, notes: null },
    positioningSteps: [
      "Several methods exist; axiolateral oblique is common:",
      "Patient semi-prone or lateral with affected side closest to IR",
      "Tilt head to project affected body/ramus away from opposite side",
      "CR directed at affected mandibular body or ramus"
    ],
    evaluationCriteria: [
      "Affected mandibular body or ramus demonstrated without overlap from opposite side",
      "Mandibular area of interest clearly visible"
    ],
    commonErrors: ["Opposite mandible superimposed", "Poor CR centering"],
    tipsAndTricks: [
      "Axiolateral oblique: place affected side on IR, angle head to separate the two sides",
      "Plain film mandible is being replaced by panoramic radiography and CT"
    ],
    alternateContext: null
  },

  // Zygomatic Arches
  {
    id: "zygomatic_sme",
    name: "Zygomatic Arches (SMV/Submentovertex)",
    bodyPartId: "zygomatic_arches",
    isStandard: true,
    projection: "Submentovertex (SMV/Basilar)",
    patientPosition: "Upright or supine with head fully extended (chin up), IOML parallel to IR",
    centralRay: "Perpendicular to IOML entering at midline, between angles of mandible",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Include both zygomatic arches",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 10.0, mediumKvp: 70, mediumMas: 12.0, largeKvp: 75, largeMas: 15.0, notes: null },
    positioningSteps: [
      "Extend head fully until IOML is parallel to IR",
      "CR perpendicular to IOML (which means CR is perpendicular to IR too)",
      "Enter at midline between mandibular angles",
      "Include both zygomatic arches for bilateral comparison"
    ],
    evaluationCriteria: [
      "Both zygomatic arches visible, free from superimposition",
      "Arches symmetrically demonstrated for comparison",
      "IOML parallel to IR (mandibular symphysis superimposed on frontal bone)"
    ],
    commonErrors: [
      "Insufficient head extension - arches obscured by other structures",
      "Rotation - asymmetric arches",
      "Patient cannot extend neck enough"
    ],
    tipsAndTricks: [
      "SMV is the classic view for zygomatic arches",
      "Requires significant neck extension - cannot do in cervical spine injury",
      "Modified Towne (30-37 degrees caudad AP) can substitute if patient cannot extend neck"
    ],
    alternateContext: null
  },

  // Orbits
  {
    id: "orbits_rheese",
    name: "Orbits (Rhese/Optic Foramen View)",
    bodyPartId: "orbits",
    isStandard: true,
    projection: "Parietorbital oblique (Rhese method)",
    patientPosition: "PA with head rotated and chin lowered (AML perpendicular to IR)",
    centralRay: "Perpendicular to IR through orbit closest to IR",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Tight to orbit",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 12.0, mediumKvp: 75, mediumMas: 15.0, largeKvp: 80, largeMas: 20.0, notes: null },
    positioningSteps: [
      "Position patient PA",
      "Rotate head so that nose, cheek, and chin of affected side touch the IR",
      "AML (acanthiomeatal line) perpendicular to IR",
      "MSP 53 degrees to IR (practically: 3-point landing of nose, cheek, chin)",
      "CR perpendicular to IR through affected orbit"
    ],
    evaluationCriteria: [
      "Optic foramen (canal) visible in lower outer quadrant of orbit",
      "Optic foramen round and clearly visible",
      "Orbit well demonstrated"
    ],
    commonErrors: [
      "Incorrect rotation - optic foramen not in correct quadrant",
      "Head tilt incorrect",
      "AML not perpendicular"
    ],
    tipsAndTricks: [
      "Three-point landing: nose, cheek, chin of affected side touch IR",
      "Optic foramen should appear in the lower outer quadrant of the orbit",
      "Do both sides for comparison",
      "CT/MRI has largely replaced this study"
    ],
    alternateContext: null
  },

  // TMJ
  {
    id: "tmj_open_closed",
    name: "TMJ (Open and Closed Mouth)",
    bodyPartId: "tmj",
    isStandard: true,
    projection: "Axiolateral (modified Law method)",
    patientPosition: "Lateral or semi-lateral, affected side closest to IR",
    centralRay: "15 degrees caudad, 1 inch anterior to upside EAM",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10 for each (open and closed)",
    orientation: "Landscape",
    grid: "Grid",
    collimation: "Tight to TMJ region",
    markers: "R or L, OPEN or CLOSED",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 10.0, mediumKvp: 70, mediumMas: 12.0, largeKvp: 75, largeMas: 15.0, notes: null },
    positioningSteps: [
      "Position with affected side closest to IR, lateral or semi-lateral",
      "CR 15 degrees caudad entering 1 inch anterior to upside EAM",
      "Take exposure with mouth CLOSED",
      "Then take exposure with mouth OPEN (as wide as possible)",
      "Compare mandibular condyle position in fossa between open and closed"
    ],
    evaluationCriteria: [
      "TMJ clearly demonstrated on both open and closed images",
      "Mandibular condyle visible in glenoid fossa (closed mouth)",
      "Condyle translated forward onto articular eminence (open mouth)",
      "Compare excursion between open and closed"
    ],
    commonErrors: [
      "CR angle or position incorrect",
      "Opposite TMJ superimposed",
      "Patient did not open mouth enough"
    ],
    tipsAndTricks: [
      "Always do both open AND closed for comparison of condyle movement",
      "Do both sides for bilateral comparison",
      "MRI is now the gold standard for TMJ evaluation"
    ],
    alternateContext: null
  },
];
