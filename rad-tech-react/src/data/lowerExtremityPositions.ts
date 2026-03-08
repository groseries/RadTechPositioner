import type { Position } from '../types';

export const lowerExtremityPositions: Position[] = [
  // Foot
  {
    id: "foot_ap",
    name: "Foot AP (Dorsoplantar)",
    bodyPartId: "foot",
    isStandard: true,
    projection: "AP (10-15 degrees toward heel)",
    patientPosition: "Seated or supine, knee flexed, plantar surface flat on IR",
    centralRay: "10-15 degrees toward heel, entering at base of 3rd metatarsal",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include all toes, metatarsals, and tarsals",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Seat patient on table or in chair",
      "Flex knee, place plantar surface of foot flat on IR",
      "Center base of 3rd metatarsal to center of IR",
      "Angle CR 10-15 degrees toward the calcaneus (posterior)",
      "Include all toes to midtarsal region"
    ],
    evaluationCriteria: [
      "All metatarsals and phalanges visible",
      "Open tarsometatarsal joint spaces (from CR angle)",
      "Minimal overlap of metatarsal bases",
      "Soft tissue visible around entire foot"
    ],
    commonErrors: [
      "No CR angle - joint spaces not open",
      "Foot not flat on IR",
      "Toes or calcaneus cut off"
    ],
    tipsAndTricks: [
      "The 10-15 degree CR angle toward heel is essential - opens the TMT joint spaces",
      "Without the angle, metatarsal bases overlap",
      "Keep foot flat and centered"
    ],
    alternateContext: null
  },

  {
    id: "foot_oblique",
    name: "Foot Medial Oblique",
    bodyPartId: "foot",
    isStandard: true,
    projection: "Oblique (30-40 degrees medial rotation)",
    patientPosition: "Seated, foot rotated medially 30-40 degrees",
    centralRay: "Perpendicular to IR at base of 3rd metatarsal",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include entire foot",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "From AP position, rotate foot medially (inward) 30-40 degrees",
      "Support with 30-45 degree sponge wedge",
      "CR perpendicular to IR at base of 3rd metatarsal"
    ],
    evaluationCriteria: [
      "3rd-5th metatarsal bases separated without overlap",
      "Tuberosity of 5th metatarsal in profile",
      "Sinus tarsi (space between talus and calcaneus) visible",
      "Cuboid without superimposition"
    ],
    commonErrors: [
      "Insufficient rotation - still overlap at bases",
      "Excessive rotation - approaching lateral"
    ],
    tipsAndTricks: [
      "Medial oblique (rotate sole inward) is the standard oblique for foot",
      "Best view for 5th metatarsal base fractures (Jones fracture area)",
      "30 degrees for smaller feet, 40 degrees for larger feet"
    ],
    alternateContext: null
  },

  {
    id: "foot_lateral",
    name: "Foot Lateral",
    bodyPartId: "foot",
    isStandard: true,
    projection: "Lateral (mediolateral)",
    patientPosition: "Lateral recumbent, affected side down, foot lateral",
    centralRay: "Perpendicular to IR at midfoot (base of 5th metatarsal area)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Landscape",
    grid: "No grid",
    collimation: "Include toes to calcaneus/ankle",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Roll patient onto affected side",
      "Place medial (inner) surface of foot against IR",
      "Knee slightly flexed for stability",
      "Plantar surface perpendicular to IR",
      "Opposite leg behind for support",
      "Center to base of 5th metatarsal"
    ],
    evaluationCriteria: [
      "Metatarsals superimposed",
      "Tibiotalar joint visible",
      "Calcaneus to toes included",
      "Ankle joint included",
      "True lateral - metatarsals nearly superimposed"
    ],
    commonErrors: [
      "Foot not in true lateral - metatarsals not superimposed",
      "Plantar surface not perpendicular to IR",
      "Toes or calcaneus cut off"
    ],
    tipsAndTricks: [
      "Mediolateral (affected side down) is standard foot lateral",
      "True lateral shows superimposed metatarsals",
      "Adjust plantar surface to be truly perpendicular to IR"
    ],
    alternateContext: null
  },

  // Toes
  {
    id: "toe_ap",
    name: "Toe AP",
    bodyPartId: "toes",
    isStandard: true,
    projection: "AP (15 degrees toward heel)",
    patientPosition: "Seated, foot flat on IR",
    centralRay: "15 degrees toward heel, at MTP joint of affected toe",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to individual toe, include metatarsal head",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.0, mediumKvp: 52, mediumMas: 2.5, largeKvp: 55, largeMas: 3.0, notes: "Small focal spot" },
    positioningSteps: [
      "Seat patient, place foot flat on IR",
      "Center MTP joint of affected toe to IR",
      "Angle CR 15 degrees toward calcaneus",
      "Separate toes with tape if needed"
    ],
    evaluationCriteria: [
      "Entire toe from tip to metatarsal head visible",
      "Open IP joint spaces (from CR angle)",
      "No overlap from adjacent toes"
    ],
    commonErrors: ["No CR angle", "Adjacent toe overlap", "MTP joint not included"],
    tipsAndTricks: [
      "15-degree CR angle toward heel opens joint spaces",
      "Tape adjacent toes out of the way",
      "Great toe (1st) may need specific views including sesamoid view"
    ],
    alternateContext: null
  },

  // Ankle
  {
    id: "ankle_ap",
    name: "Ankle AP",
    bodyPartId: "ankle",
    isStandard: true,
    projection: "AP",
    patientPosition: "Seated or supine, leg extended, foot dorsiflexed",
    centralRay: "Perpendicular to IR midway between malleoli",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include distal tibia/fibula to midfoot",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Extend leg, dorsiflex foot (pull toes toward shin)",
      "Plantar surface perpendicular to IR if possible",
      "Center midway between malleoli",
      "No rotation - malleoli equidistant from IR"
    ],
    evaluationCriteria: [
      "Tibiotalar joint partially visible",
      "Both malleoli demonstrated",
      "Talus visible",
      "Partial overlap of distal tibiofibular syndesmosis (normal for AP)"
    ],
    commonErrors: [
      "Foot not dorsiflexed - talus superimposed",
      "Rotation - malleoli not equidistant"
    ],
    tipsAndTricks: [
      "AP ankle: tibiofibular overlap is NORMAL (unlike the mortise view)",
      "Dorsiflex foot for better tibiotalar joint visualization",
      "Always compare with mortise view"
    ],
    alternateContext: null
  },

  {
    id: "ankle_mortise",
    name: "Ankle Mortise (AP Oblique)",
    bodyPartId: "ankle",
    isStandard: true,
    projection: "AP Mortise (15-20 degrees internal rotation)",
    patientPosition: "Seated or supine, entire leg internally rotated 15-20 degrees",
    centralRay: "Perpendicular to IR midway between malleoli",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Same as AP ankle",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Internally rotate ENTIRE leg 15-20 degrees",
      "Both malleoli should now be equidistant from IR (parallel to IR)",
      "This opens the ankle mortise (tibiofibular syndesmosis clear)",
      "Dorsiflex foot",
      "Center midway between malleoli"
    ],
    evaluationCriteria: [
      "Ankle mortise (tibiotalar joint) OPEN on all three sides",
      "No overlap at distal tibiofibular syndesmosis (fibula clear)",
      "Equal joint space around the talus dome (medial, superior, lateral)",
      "Both malleoli equidistant from IR"
    ],
    commonErrors: [
      "Insufficient internal rotation - tibiofibular overlap still present",
      "Excessive rotation - lateral malleolus now overlapping",
      "Only rotating the foot instead of the entire leg"
    ],
    tipsAndTricks: [
      "THE most important ankle view for evaluating joint stability",
      "Rotate the WHOLE LEG from the hip, not just the foot",
      "The mortise should show equal joint space all around the talus",
      "Unequal joint space = possible ligamentous injury or fracture with shift"
    ],
    alternateContext: null
  },

  {
    id: "ankle_lateral",
    name: "Ankle Lateral",
    bodyPartId: "ankle",
    isStandard: true,
    projection: "Lateral (mediolateral)",
    patientPosition: "Lateral recumbent or seated with leg lateral",
    centralRay: "Perpendicular to medial malleolus",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include distal tibia/fibula to midfoot",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Roll onto affected side (medial side of ankle against IR)",
      "Flex knee slightly for stability",
      "Foot in true lateral - plantar surface perpendicular to IR",
      "Dorsiflex foot to 90 degrees",
      "Center to medial malleolus"
    ],
    evaluationCriteria: [
      "True lateral - tibiotalar joint in profile",
      "Malleoli superimposed (or nearly)",
      "Calcaneus, talus, and distal tib/fib visible",
      "Base of 5th metatarsal included (for Jones fracture)",
      "Anterior and posterior aspects of distal tibia clear"
    ],
    commonErrors: [
      "Not true lateral - malleoli not superimposed",
      "Foot not dorsiflexed",
      "Base of 5th metatarsal cut off"
    ],
    tipsAndTricks: [
      "Always include base of 5th metatarsal on ankle lateral",
      "True lateral: malleoli superimposed and talus dome seen on edge",
      "Check for Achilles tendon integrity on lateral view"
    ],
    alternateContext: null
  },

  // Calcaneus
  {
    id: "calcaneus_axial",
    name: "Calcaneus Axial (Plantodorsal)",
    bodyPartId: "calcaneus",
    isStandard: true,
    projection: "Axial (40 degrees cephalad)",
    patientPosition: "Seated or supine, foot dorsiflexed, loop of gauze around ball of foot",
    centralRay: "40 degrees cephalad, entering plantar surface at base of 3rd metatarsal",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include entire calcaneus",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 65, smallMas: 8.0, mediumKvp: 70, mediumMas: 12.0, largeKvp: 75, largeMas: 15.0, notes: "Higher technique needed through thick calcaneus" },
    positioningSteps: [
      "Seat patient, leg extended on table",
      "Dorsiflex foot as much as possible (pull toes toward shin)",
      "Use gauze loop around ball of foot for patient to pull and maintain dorsiflexion",
      "Angle CR 40 degrees cephalad",
      "Enter at plantar surface of foot, base of 3rd metatarsal",
      "CR exits at ankle joint level"
    ],
    evaluationCriteria: [
      "Entire calcaneus visible including tuberosity",
      "Sustentaculum tali visible medially",
      "Subtalar joint visible",
      "No rotation (medial and lateral walls of calcaneus symmetric)"
    ],
    commonErrors: [
      "Insufficient dorsiflexion - calcaneus not well demonstrated",
      "Wrong CR angle",
      "Rotation of calcaneus"
    ],
    tipsAndTricks: [
      "Gauze loop helps patient maintain dorsiflexion during exposure",
      "40-degree angle is standard but may need adjustment for patient flexibility",
      "This view is essential for calcaneal fracture evaluation (Bohler's angle)"
    ],
    alternateContext: null
  },

  {
    id: "calcaneus_lateral",
    name: "Calcaneus Lateral",
    bodyPartId: "calcaneus",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent, affected side down",
    centralRay: "Perpendicular to IR, 1 inch inferior to medial malleolus",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include entire calcaneus",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 5.0, mediumKvp: 65, mediumMas: 7.0, largeKvp: 70, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Position affected side down in true lateral",
      "Center 1 inch inferior to medial malleolus (center of calcaneus)",
      "Include subtalar joint superiorly and plantar surface inferiorly"
    ],
    evaluationCriteria: [
      "Entire calcaneus in true lateral",
      "Bohler's angle can be measured (normally 28-40 degrees)",
      "Subtalar joint visible",
      "Sinus tarsi demonstrated"
    ],
    commonErrors: ["Not a true lateral", "Calcaneal tuberosity cut off"],
    tipsAndTricks: [
      "Bohler's angle: line from posterior tuberosity to subtalar joint peak, second line from peak to anterior process",
      "Normal: 28-40 degrees; decreased angle = compression fracture",
      "Essential measurement for calcaneal fractures"
    ],
    alternateContext: null
  },

  // Tibia/Fibula
  {
    id: "tib_fib_ap",
    name: "Tibia/Fibula AP",
    bodyPartId: "tibia_fibula",
    isStandard: true,
    projection: "AP",
    patientPosition: "Seated or supine, leg extended",
    centralRay: "Perpendicular to IR at midshaft of tibia",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17 or 7x17",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include both knee and ankle joints",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 65, smallMas: 5.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Extend leg on table",
      "Center midshaft to IR",
      "Dorsiflex foot to help maintain true AP",
      "MUST include both knee and ankle joints"
    ],
    evaluationCriteria: [
      "Both joints included",
      "Tibia and fibula with minimal overlap",
      "True AP - tibial plateau seen",
      "Interosseous space visible"
    ],
    commonErrors: ["One joint not included", "Leg rotated", "Foot not dorsiflexed"],
    tipsAndTricks: [
      "ALWAYS include both joints on a tib/fib exam",
      "If too long for one IR, use two and make sure each includes at least one joint"
    ],
    alternateContext: null
  },

  {
    id: "tib_fib_lateral",
    name: "Tibia/Fibula Lateral",
    bodyPartId: "tibia_fibula",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent or seated with leg turned lateral",
    centralRay: "Perpendicular to IR at midshaft",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17 or 7x17",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include both joints",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 65, smallMas: 5.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Position leg in true lateral",
      "Flex knee slightly",
      "Center midshaft to IR",
      "Include both joints"
    ],
    evaluationCriteria: [
      "Both joints included",
      "True lateral - fibula superimposed by posterior tibia",
      "Knee in true lateral"
    ],
    commonErrors: ["Rotation - not true lateral", "One joint not included"],
    tipsAndTricks: ["Include both joints! Both joints! Both joints!"],
    alternateContext: null
  },

  // Knee
  {
    id: "knee_ap",
    name: "Knee AP",
    bodyPartId: "knee",
    isStandard: true,
    projection: "AP",
    patientPosition: "Seated or supine, leg extended",
    centralRay: "Varies by patient size: 5 degrees caudad (average), 3-5 degrees caudad (thin), 5-7 degrees caudad (large)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid for measurements >10 cm; tabletop for small knees",
    collimation: "Include proximal tib/fib and distal femur",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 5.0, mediumKvp: 65, mediumMas: 8.0, largeKvp: 70, largeMas: 10.0, notes: "Use grid for knee >10 cm thick" },
    positioningSteps: [
      "Extend leg, center knee to IR",
      "Center IR to knee joint (1/2 inch below apex of patella)",
      "Angle CR 3-7 degrees caudad depending on patient size",
      "The angle opens the joint space by matching the tibial plateau slope",
      "Ensure no rotation - patella centered over distal femur"
    ],
    evaluationCriteria: [
      "Open knee joint space (femorotibial)",
      "Patella centered over distal femur (no rotation)",
      "Intercondylar eminence visible",
      "Proximal fibular head visible with slight overlap on tibia",
      "Adequate density to see bone and soft tissue"
    ],
    commonErrors: [
      "No CR angle - joint space not open",
      "Rotation - patella off-center",
      "Grid cut-off if using grid incorrectly"
    ],
    tipsAndTricks: [
      "The caudad angle matches the 5-7 degree posterior slope of the tibial plateau",
      "Measure knee thickness to decide if grid is needed (>10 cm = grid)",
      "Check for joint effusion (suprapatellar region) on lateral view"
    ],
    alternateContext: null
  },

  {
    id: "knee_lateral",
    name: "Knee Lateral",
    bodyPartId: "knee",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent, affected side down, knee flexed 20-30 degrees",
    centralRay: "5-7 degrees cephalad, entering 1 inch distal to medial epicondyle",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid for large knees",
    collimation: "Include patella, distal femur, proximal tib/fib",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 5.0, mediumKvp: 65, mediumMas: 8.0, largeKvp: 70, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Roll onto affected side",
      "Flex knee 20-30 degrees (more flexion for joint effusion evaluation)",
      "Ensure true lateral - femoral condyles superimposed",
      "5-7 degrees cephalad CR angle to prevent joint space closure",
      "Center 1 inch distal to medial epicondyle",
      "Place support under ankle to keep leg level"
    ],
    evaluationCriteria: [
      "Femoral condyles superimposed (true lateral)",
      "Patella in lateral profile",
      "Open patellofemoral joint",
      "Suprapatellar region visible (for effusion)",
      "Tibial tuberosity in profile anteriorly",
      "Fibular head slightly posterior to tibia"
    ],
    commonErrors: [
      "Femoral condyles not superimposed (rotation)",
      "Too much flexion - suprapatellar space compressed",
      "Not enough flexion - quadriceps pulls patella superiorly"
    ],
    tipsAndTricks: [
      "20-30 degrees flexion is ideal for routine lateral",
      "Check for suprapatellar effusion (fluid displaces fat pads)",
      "True lateral: femoral condyles should overlap almost perfectly",
      "Support the ankle with a sponge to prevent leg from sagging"
    ],
    alternateContext: null
  },

  {
    id: "knee_oblique",
    name: "Knee Obliques (Internal and External)",
    bodyPartId: "knee",
    isStandard: true,
    projection: "AP Oblique (45 degrees internal and/or external rotation)",
    patientPosition: "Leg rotated 45 degrees internally or externally",
    centralRay: "Perpendicular to IR at knee joint (or 5 degrees caudad)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid for large knees",
    collimation: "Include knee joint",
    markers: "R or L, indicate MO or LO",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 5.0, mediumKvp: 65, mediumMas: 8.0, largeKvp: 70, largeMas: 10.0, notes: null },
    positioningSteps: [
      "From AP position, rotate leg 45 degrees internally or externally",
      "Internal (medial) oblique: rotate leg inward",
      "External (lateral) oblique: rotate leg outward",
      "Support with sponge under affected side"
    ],
    evaluationCriteria: [
      "45-degree obliquity demonstrated",
      "Internal oblique: fibular head free from tibial superimposition",
      "External oblique: fibular head behind tibia",
      "Tibial plateau margins visible"
    ],
    commonErrors: ["Insufficient rotation", "Knee flexed during rotation"],
    tipsAndTricks: [
      "Internal oblique = best for proximal tibiofibular joint and lateral tibial plateau",
      "External oblique = best for medial tibial plateau",
      "Both obliques are useful for tibial plateau fractures"
    ],
    alternateContext: null
  },

  {
    id: "knee_tunnel",
    name: "Knee Intercondylar Fossa (Tunnel/Camp Coventry)",
    bodyPartId: "knee",
    isStandard: false,
    projection: "PA Axial (Camp Coventry)",
    patientPosition: "Prone, knee flexed 40-50 degrees",
    centralRay: "Perpendicular to tibia (40-50 degrees caudad to match flexion)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Intercondylar fossa region",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 5.0, mediumKvp: 65, mediumMas: 8.0, largeKvp: 70, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Position patient prone",
      "Flex knee 40-50 degrees (shin elevated)",
      "Place IR under knee",
      "Angle CR perpendicular to the lower leg (40-50 degrees caudad from vertical)",
      "Alternative: Holmblad method - patient kneeling on table, leaning forward 20-30 degrees"
    ],
    evaluationCriteria: [
      "Intercondylar fossa (notch) visible and open",
      "Intercondylar eminence of tibia in profile",
      "No superimposition of patella over fossa",
      "Both femoral condyles visible"
    ],
    commonErrors: [
      "Incorrect knee flexion - fossa not open",
      "CR angle doesn't match flexion angle",
      "Patella superimposed on intercondylar fossa"
    ],
    tipsAndTricks: [
      "This view demonstrates the intercondylar notch for loose bodies",
      "Also useful for osteochondritis dissecans",
      "The key: CR must be perpendicular to the tibial shaft",
      "Holmblad method is easier for cooperative patients: kneel and lean forward"
    ],
    alternateContext: {
      reason: "Evaluate intercondylar fossa for loose bodies, osteochondritis dissecans, or notch stenosis",
      patientFactors: [],
      advantagesOverStandard: "Opens the intercondylar fossa which is not visible on standard AP/lateral views"
    }
  },

  // Patella
  {
    id: "patella_pa",
    name: "Patella PA",
    bodyPartId: "patella",
    isStandard: true,
    projection: "PA",
    patientPosition: "Prone, leg extended",
    centralRay: "Perpendicular to IR at mid-patella (popliteal crease posteriorly)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "Grid for large knees",
    collimation: "Include patella and surrounding knee",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 5.0, mediumKvp: 65, mediumMas: 8.0, largeKvp: 70, largeMas: 10.0, notes: "PA preferred over AP - places patella closer to IR for detail" },
    positioningSteps: [
      "Position patient prone, leg extended",
      "Center patella to IR",
      "Slight internal rotation of leg (5 degrees) to place patella parallel to IR",
      "CR perpendicular entering at popliteal crease"
    ],
    evaluationCriteria: [
      "Patella centered over distal femur",
      "Patella in profile",
      "Knee joint visible for reference",
      "No rotation"
    ],
    commonErrors: ["Using AP instead of PA (patella farther from IR, more magnification)", "Rotation"],
    tipsAndTricks: [
      "PA is preferred over AP for patella - less OID = less magnification = better detail",
      "Slight internal rotation places patella parallel to IR"
    ],
    alternateContext: null
  },

  {
    id: "patella_sunrise",
    name: "Patella Sunrise/Tangential (Merchant View)",
    bodyPartId: "patella",
    isStandard: true,
    projection: "Tangential (Sunrise/Skyline)",
    patientPosition: "Supine or seated, knee flexed, CR tangential to patella",
    centralRay: "Tangential through patellofemoral joint, entering anterior to patella and exiting at patellar apex",
    sid: "40 inches (102 cm) or per method",
    imageReceptorSize: "8x10",
    orientation: "Landscape",
    grid: "No grid",
    collimation: "Tight to patellofemoral joint",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 5.0, mediumKvp: 60, mediumMas: 6.0, largeKvp: 65, largeMas: 8.0, notes: null },
    positioningSteps: [
      "Merchant method: patient supine, knees flexed 45 degrees over table edge",
      "Place IR on shins, angled perpendicular to CR path",
      "CR angled 30 degrees caudad from horizontal (through patellofemoral joint)",
      "Alternative Settegast method: patient prone, flex knee maximally, CR tangential through joint",
      "Alternative Hughston method: patient prone, knee flexed 50-60 degrees, CR through patellofemoral joint"
    ],
    evaluationCriteria: [
      "Patella in axial/tangential profile",
      "Patellofemoral joint space visible bilaterally",
      "Articular surface of patella visible",
      "Patellar tracking can be evaluated (lateral tilt/subluxation)"
    ],
    commonErrors: [
      "Knee flexion angle wrong - joint not profiled",
      "CR angle incorrect",
      "Patient moving during exposure (holding position is hard)"
    ],
    tipsAndTricks: [
      "Merchant method allows bilateral comparison on one image",
      "Evaluation of patellar tracking, subluxation, and chondromalacia",
      "If patient cannot flex knee much, use less flexion and adjust CR angle",
      "Consider Settegast if patient has good knee flexion"
    ],
    alternateContext: null
  },

  // Femur
  {
    id: "femur_ap",
    name: "Femur AP",
    bodyPartId: "femur",
    isStandard: true,
    projection: "AP",
    patientPosition: "Supine, leg extended, internally rotated 15 degrees",
    centralRay: "Perpendicular to IR at mid-femur",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include both hip and knee joints",
    markers: "R or L",
    shielding: "Gonadal shield for opposite side",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 70, smallMas: 15.0, mediumKvp: 75, mediumMas: 20.0, largeKvp: 80, largeMas: 25.0, notes: null },
    positioningSteps: [
      "Patient supine, leg extended",
      "Internally rotate leg 15 degrees (toes pointing slightly inward)",
      "This places the femoral neck in true AP profile",
      "Center mid-femur to IR",
      "MUST include both hip and knee joints"
    ],
    evaluationCriteria: [
      "Both hip and knee joints included",
      "Femoral neck in profile (from internal rotation)",
      "Greater trochanter in profile laterally",
      "No rotation"
    ],
    commonErrors: [
      "One joint not included",
      "Not internally rotated - femoral neck foreshortened",
      "DO NOT internally rotate if hip fracture is suspected!"
    ],
    tipsAndTricks: [
      "Include BOTH joints",
      "15-degree internal rotation shows femoral neck in true AP",
      "NEVER internally rotate a suspected hip fracture - take as-is"
    ],
    alternateContext: null
  },

  {
    id: "femur_lateral",
    name: "Femur Lateral",
    bodyPartId: "femur",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Lateral recumbent or cross-table lateral",
    centralRay: "Perpendicular to mid-femur",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid",
    collimation: "Include both joints",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 70, smallMas: 15.0, mediumKvp: 75, mediumMas: 20.0, largeKvp: 80, largeMas: 25.0, notes: null },
    positioningSteps: [
      "Roll onto affected side for lateral recumbent",
      "Flex knee slightly",
      "For proximal femur/hip: cross-table lateral may be needed (trauma)",
      "Center mid-femur to IR",
      "Include both joints"
    ],
    evaluationCriteria: [
      "Both joints included",
      "True lateral of femur",
      "Femoral neck visible (on proximal femur images)"
    ],
    commonErrors: ["One joint not included", "Not true lateral", "Poor technique for thick thigh"],
    tipsAndTricks: [
      "Include both joints!",
      "For suspected hip fracture: use cross-table lateral, do NOT roll the patient",
      "Lateral femur through a thick thigh needs significantly more technique"
    ],
    alternateContext: null
  },

  // Weight Bearing
  {
    id: "feet_wb_ap",
    name: "Weight Bearing Feet AP",
    bodyPartId: "weight_bearing",
    isStandard: true,
    projection: "AP standing",
    patientPosition: "Standing on IR, weight distributed equally on both feet",
    centralRay: "15 degrees toward heel, at base of 3rd metatarsal (bilateral)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17 crosswise for bilateral",
    orientation: "Landscape",
    grid: "No grid",
    collimation: "Include both feet",
    markers: "R and L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Place IR on floor (use protective cover)",
      "Patient stands on IR with equal weight on both feet",
      "Center between both feet",
      "Angle CR 15 degrees toward heels",
      "Patient should be standing naturally, not shifting weight"
    ],
    evaluationCriteria: [
      "Both feet included for comparison",
      "Standing position demonstrated (arches under load)",
      "TMT joint spaces visible",
      "Can evaluate pes planus (flat foot) or cavus"
    ],
    commonErrors: [
      "Patient shifting weight to one foot",
      "IR not properly centered",
      "Not including both feet if bilateral ordered"
    ],
    tipsAndTricks: [
      "Weight bearing shows the functional state of the foot architecture",
      "Compare arch height bilaterally",
      "Essential for flat foot evaluation, hallux valgus assessment"
    ],
    alternateContext: null
  },

  {
    id: "ankles_wb_ap",
    name: "Weight Bearing Ankles AP",
    bodyPartId: "weight_bearing",
    isStandard: true,
    projection: "AP standing",
    patientPosition: "Standing on IR or in front of upright Bucky",
    centralRay: "Perpendicular at ankle joint level between both ankles",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "No grid or grid depending on setup",
    collimation: "Include both ankles",
    markers: "R and L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 65, smallMas: 5.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Patient stands with equal weight on both feet",
      "Center at ankle joint level",
      "Include both ankles for comparison",
      "Ensure AP positioning - no rotation"
    ],
    evaluationCriteria: [
      "Both ankles included for comparison",
      "Standing position demonstrated",
      "Can evaluate tibiotalar tilt and alignment under load"
    ],
    commonErrors: ["Weight shifting", "Not bilateral", "Rotation"],
    tipsAndTricks: [
      "Weight bearing ankle views are important for evaluating ankle stability after ligament injury",
      "Compare tibiotalar tilt angles bilaterally"
    ],
    alternateContext: null
  },
];
