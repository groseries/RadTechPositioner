import type { Position } from '../types';
import { PatientFactor } from '../types';

export const upperExtremityPositions: Position[] = [
  // Hand
  {
    id: "hand_pa",
    name: "Hand PA",
    bodyPartId: "hand",
    isStandard: true,
    projection: "PA",
    patientPosition: "Seated at end of table, hand pronated on IR",
    centralRay: "Perpendicular to IR at 3rd MCP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait (lengthwise)",
    grid: "No grid (tabletop)",
    collimation: "Include all phalanges, metacarpals, and 1 inch of wrist",
    markers: "R or L marker, not superimposing anatomy",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.5, mediumKvp: 55, mediumMas: 3.0, largeKvp: 60, largeMas: 4.0, notes: "Small focal spot; no grid" },
    positioningSteps: [
      "Seat patient at end of table, arm extended",
      "Pronate hand flat on IR, fingers slightly spread",
      "Center 3rd MCP joint to center of IR",
      "Ensure hand is flat with no rotation",
      "Include distal forearm for wrist reference"
    ],
    evaluationCriteria: [
      "All phalanges, metacarpals, and carpals visible",
      "No rotation - equal soft tissue on both sides of phalanges",
      "Open IP and MCP joint spaces",
      "Fingertips to 1 inch distal to wrist joint included",
      "Soft tissue visible around all digits"
    ],
    commonErrors: [
      "Hand rotated - not flat on IR",
      "Fingers not spread - overlap of soft tissue",
      "MCP joints not centered",
      "Insufficient collimation or anatomy cut off"
    ],
    tipsAndTricks: [
      "Place a small sponge under the fingers if they don't lay flat",
      "Spread fingers slightly but comfortably",
      "Always use small focal spot for extremity work",
      "Can fit both hands on one IR if comparison study is ordered"
    ],
    alternateContext: null
  },

  {
    id: "hand_oblique",
    name: "Hand Oblique",
    bodyPartId: "hand",
    isStandard: true,
    projection: "Oblique (45 degrees lateral rotation)",
    patientPosition: "Seated, hand rotated 45 degrees laterally (fingers on step wedge)",
    centralRay: "Perpendicular to IR at 3rd MCP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid (tabletop)",
    collimation: "Same as PA hand",
    markers: "R or L marker",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.5, mediumKvp: 55, mediumMas: 3.0, largeKvp: 60, largeMas: 4.0, notes: null },
    positioningSteps: [
      "From PA position, rotate hand laterally (externally) 45 degrees",
      "Use a 45-degree sponge/step wedge under fingers to maintain position",
      "Fingers should be separated and supported at uniform angle",
      "Thumb naturally falls into lateral position",
      "Center 3rd MCP joint to IR"
    ],
    evaluationCriteria: [
      "Metacarpal heads/shafts separated without overlap",
      "45-degree obliquity demonstrated",
      "Open IP joints",
      "3rd-5th metacarpals should show slight overlap proximally but separated distally",
      "Thumb in near-lateral position"
    ],
    commonErrors: [
      "Insufficient rotation - metacarpals overlap",
      "Excessive rotation (>45 degrees) - approaching lateral",
      "Fingers not on step wedge - uneven positioning",
      "Thumb superimposed on 2nd metacarpal"
    ],
    tipsAndTricks: [
      "A 45-degree sponge or step wedge keeps uniform obliquity",
      "This is the best view for metacarpal fractures",
      "If ordered for a specific finger, consider individual finger views as well"
    ],
    alternateContext: null
  },

  {
    id: "hand_lateral_fan",
    name: "Hand Lateral (Fan Lateral)",
    bodyPartId: "hand",
    isStandard: true,
    projection: "Lateral (extension/fan)",
    patientPosition: "Hand in lateral position, fingers extended in fan arrangement",
    centralRay: "Perpendicular to IR at 2nd MCP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include all digits and carpals",
    markers: "R or L marker",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 2.5, mediumKvp: 60, mediumMas: 3.0, largeKvp: 65, largeMas: 4.0, notes: null },
    positioningSteps: [
      "Place ulnar surface of hand on IR",
      "Extend fingers in a fan arrangement (spread apart)",
      "Thumb should be in AP/PA position atop other fingers",
      "Hand in true lateral - check wrist alignment",
      "Center to 2nd MCP joint"
    ],
    evaluationCriteria: [
      "True lateral of metacarpals (superimposed)",
      "Digits spread to visualize without superimposition",
      "Thumb in near-AP/PA position",
      "1 inch of distal forearm included"
    ],
    commonErrors: [
      "Fingers not spread enough - superimposed",
      "Hand not in true lateral",
      "Thumb not extended enough - superimposed on fingers"
    ],
    tipsAndTricks: [
      "Fan lateral is best for demonstrating anterior/posterior displacement of metacarpal fractures",
      "Use radiolucent sponge between fingers if needed",
      "Also called 'extension lateral' - useful for foreign body localization"
    ],
    alternateContext: null
  },

  // Fingers
  {
    id: "finger_pa",
    name: "Finger PA",
    bodyPartId: "fingers",
    isStandard: true,
    projection: "PA",
    patientPosition: "Finger extended flat on IR",
    centralRay: "Perpendicular to IR at PIP joint of affected finger",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight collimation to individual digit, include MCP and DIP joints",
    markers: "R or L marker",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.0, mediumKvp: 52, mediumMas: 2.5, largeKvp: 55, largeMas: 3.0, notes: "Small focal spot" },
    positioningSteps: [
      "Isolate the affected digit on the IR",
      "Pronate hand, keep finger flat and extended",
      "Center PIP joint to center of IR",
      "Separate other fingers away from affected digit",
      "CR perpendicular to PIP joint"
    ],
    evaluationCriteria: [
      "Entire digit from fingertip to metacarpal head visible",
      "Open IP joint spaces",
      "No rotation of digit",
      "Soft tissue margins visible"
    ],
    commonErrors: [
      "Finger not isolated - adjacent fingers overlap",
      "Finger rotated - joint spaces not open",
      "PIP joint not centered"
    ],
    tipsAndTricks: [
      "Tape adjacent fingers out of the way if needed",
      "If patient can't extend, modify for the injury",
      "Always do 3 views minimum of any individual finger"
    ],
    alternateContext: null
  },

  {
    id: "finger_lateral",
    name: "Finger Lateral",
    bodyPartId: "fingers",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Finger in lateral position",
    centralRay: "Perpendicular to IR at PIP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to digit",
    markers: "R or L marker",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.0, mediumKvp: 52, mediumMas: 2.5, largeKvp: 55, largeMas: 3.0, notes: null },
    positioningSteps: [
      "Rotate hand to place affected finger in true lateral",
      "2nd finger: hand pronated, finger extended laterally",
      "3rd/4th finger: hand lateral, flex unaffected fingers out of way",
      "5th finger: hand lateral, flex other fingers out of way",
      "Center PIP joint to IR"
    ],
    evaluationCriteria: [
      "True lateral of finger - phalanges in lateral profile",
      "No superimposition from adjacent fingers",
      "Open IP joint spaces",
      "Entire digit visible"
    ],
    commonErrors: [
      "Other fingers superimposed on affected finger",
      "Not a true lateral - rotation present",
      "Technique too high - overpenetrated digit"
    ],
    tipsAndTricks: [
      "Flex unaffected fingers out of the way",
      "For 2nd digit, extend it straight while making a fist with other fingers",
      "For 3rd-5th digits, use step wedge or sponge support"
    ],
    alternateContext: null
  },

  {
    id: "finger_oblique",
    name: "Finger Oblique",
    bodyPartId: "fingers",
    isStandard: true,
    projection: "Oblique (45 degrees)",
    patientPosition: "Finger rotated 45 degrees",
    centralRay: "Perpendicular to PIP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to digit",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.0, mediumKvp: 52, mediumMas: 2.5, largeKvp: 55, largeMas: 3.0, notes: null },
    positioningSteps: [
      "From PA position, rotate hand/finger 45 degrees laterally",
      "Support with 45-degree sponge",
      "Center PIP joint to IR",
      "Keep other fingers clear"
    ],
    evaluationCriteria: [
      "45-degree obliquity",
      "Open IP joint spaces",
      "No overlap from adjacent digits",
      "Entire digit visible"
    ],
    commonErrors: ["Insufficient rotation", "Adjacent finger overlap", "PIP not centered"],
    tipsAndTricks: ["Use a 45-degree sponge wedge for consistent positioning"],
    alternateContext: null
  },

  // Thumb
  {
    id: "thumb_ap",
    name: "Thumb AP (Roberts Method)",
    bodyPartId: "thumb",
    isStandard: true,
    projection: "AP",
    patientPosition: "Hand internally rotated, dorsal surface of thumb on IR",
    centralRay: "Perpendicular to 1st MCP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to thumb, include CMC joint",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.0, mediumKvp: 55, mediumMas: 2.5, largeKvp: 58, largeMas: 3.0, notes: null },
    positioningSteps: [
      "Internally rotate hand until dorsal surface of thumb rests flat on IR",
      "The hand will be in extreme internal rotation",
      "Center 1st MCP joint to center of IR",
      "Include trapezium and CMC joint"
    ],
    evaluationCriteria: [
      "True AP of thumb (not oblique)",
      "Open CMC, MCP, and IP joints",
      "1st metacarpal, proximal and distal phalanx visible",
      "Trapezium/CMC joint included"
    ],
    commonErrors: [
      "Insufficient internal rotation - thumb appears oblique",
      "CMC joint not included",
      "Patient cannot achieve internal rotation (use modified method)"
    ],
    tipsAndTricks: [
      "This requires significant internal rotation of the hand - be gentle with trauma patients",
      "If patient cannot internally rotate, use AP projection with the hand PA and thumb abducted"
    ],
    alternateContext: null
  },

  {
    id: "thumb_lateral",
    name: "Thumb Lateral",
    bodyPartId: "thumb",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Hand in natural lateral position, thumb on top",
    centralRay: "Perpendicular to 1st MCP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to thumb",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.0, mediumKvp: 55, mediumMas: 2.5, largeKvp: 58, largeMas: 3.0, notes: null },
    positioningSteps: [
      "Place hand in natural lateral position (thumb side up)",
      "Thumb is naturally in lateral position",
      "Extend thumb slightly away from palm",
      "Center 1st MCP joint"
    ],
    evaluationCriteria: [
      "True lateral of thumb",
      "No superimposition from other digits on 1st metacarpal",
      "Open IP and MCP joints",
      "CMC joint visible"
    ],
    commonErrors: ["Fingers superimposed on thumb", "Not true lateral", "CMC joint not included"],
    tipsAndTricks: ["This is the easiest thumb view - hand naturally positions the thumb laterally"],
    alternateContext: null
  },

  {
    id: "thumb_oblique",
    name: "Thumb Oblique",
    bodyPartId: "thumb",
    isStandard: true,
    projection: "Oblique",
    patientPosition: "Hand PA, thumb abducted and naturally oblique",
    centralRay: "Perpendicular to 1st MCP joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "8x10",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to thumb",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 50, smallMas: 2.0, mediumKvp: 55, mediumMas: 2.5, largeKvp: 58, largeMas: 3.0, notes: null },
    positioningSteps: [
      "Place hand PA (pronated) on IR",
      "Abduct thumb away from hand naturally",
      "The thumb will naturally be in an oblique position",
      "Center 1st MCP joint"
    ],
    evaluationCriteria: [
      "Oblique projection of entire thumb",
      "1st metacarpal and phalanges without superimposition from hand",
      "Open joint spaces"
    ],
    commonErrors: ["Thumb not abducted enough", "Superimposition from 2nd metacarpal"],
    tipsAndTricks: ["This is the most natural position - hand flat, thumb extended to the side"],
    alternateContext: null
  },

  // Wrist
  {
    id: "wrist_pa",
    name: "Wrist PA",
    bodyPartId: "wrist",
    isStandard: true,
    projection: "PA",
    patientPosition: "Seated, forearm pronated, wrist flat on IR",
    centralRay: "Perpendicular to IR at midcarpal area (midway between radial and ulnar styloids)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Carpals, distal radius/ulna, proximal metacarpals",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Seat patient at end of table, elbow flexed 90 degrees",
      "Pronate hand and wrist flat on IR",
      "Fingers slightly flexed (natural curl) to bring wrist flat",
      "Center midcarpal area to center of IR",
      "Shoulder, elbow, and wrist at same height"
    ],
    evaluationCriteria: [
      "All 8 carpals visible",
      "Open radiocarpal joint space",
      "Distal radius and ulna included",
      "Proximal metacarpals included",
      "No rotation (ulnar styloid in profile laterally)"
    ],
    commonErrors: [
      "Hand elevated off IR (not flat) - carpals overlap",
      "Elbow not at same height - wrist tilted",
      "CR not centered to midcarpals",
      "Fingers extended instead of slightly flexed"
    ],
    tipsAndTricks: [
      "Slightly flex fingers to bring wrist into contact with IR",
      "Keep elbow at same height as wrist - use sponge under elbow if needed",
      "PA is preferred over AP for wrist (less OID for carpals)"
    ],
    alternateContext: null
  },

  {
    id: "wrist_lateral",
    name: "Wrist Lateral",
    bodyPartId: "wrist",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Ulnar side of wrist on IR, elbow flexed 90 degrees",
    centralRay: "Perpendicular to IR at radial styloid (wrist joint)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Carpals, distal R/U, proximal metacarpals",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "From PA position, rotate hand into true lateral",
      "Ulnar side of wrist rests on IR",
      "Elbow flexed 90 degrees",
      "Fingers naturally flexed or use sponge",
      "Center to radial styloid"
    ],
    evaluationCriteria: [
      "True lateral - radius and ulna superimposed distally",
      "Carpals in lateral profile",
      "Pronator fat stripe visible (if not disrupted by injury)",
      "Scaphoid fat stripe visible anteriorly"
    ],
    commonErrors: [
      "Not true lateral - R/U not superimposed",
      "Wrist flexed or extended - not neutral",
      "Fingers extended - pulling wrist out of lateral"
    ],
    tipsAndTricks: [
      "Check anterior and posterior fat pads - displacement suggests fracture",
      "True lateral shows superimposed distal R/U",
      "Neutral wrist position (not flexed/extended) for standard lateral"
    ],
    alternateContext: null
  },

  {
    id: "wrist_oblique",
    name: "Wrist Oblique",
    bodyPartId: "wrist",
    isStandard: true,
    projection: "Oblique (45 degrees lateral rotation)",
    patientPosition: "Hand rotated 45 degrees laterally from pronated position",
    centralRay: "Perpendicular to IR at midcarpal area",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Carpals, distal R/U, proximal metacarpals",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "From PA position, rotate hand/wrist 45 degrees laterally",
      "Support with 45-degree sponge",
      "Center midcarpal area to IR"
    ],
    evaluationCriteria: [
      "Carpals on lateral (radial) side separated: trapezium, trapezoid, scaphoid",
      "Distal R/U separated (not superimposed)",
      "45-degree obliquity"
    ],
    commonErrors: ["Insufficient/excessive rotation", "Not supported - angle not maintained"],
    tipsAndTricks: [
      "Oblique best demonstrates the trapezium, trapezoid, and scaphoid",
      "Also excellent for demonstrating distal R/U separation"
    ],
    alternateContext: null
  },

  // Scaphoid
  {
    id: "scaphoid_pa_ulnar_deviation",
    name: "Scaphoid PA (Ulnar Deviation)",
    bodyPartId: "scaphoid",
    isStandard: true,
    projection: "PA with ulnar deviation",
    patientPosition: "Seated, hand pronated and deviated toward ulnar side",
    centralRay: "Perpendicular to IR or 15-20 degrees proximally, centered to scaphoid",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to scaphoid region",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Position hand PA (pronated) on IR",
      "Deviate entire hand toward ulnar side (toward pinky)",
      "This elongates the scaphoid, reducing foreshortening",
      "Alternatively, angle CR 15-20 degrees toward elbow (Stecher modification)",
      "Center to scaphoid (just distal to radial styloid)"
    ],
    evaluationCriteria: [
      "Scaphoid elongated without foreshortening",
      "Scaphoid clearly visible without overlap from adjacent carpals",
      "Joint spaces around scaphoid visible",
      "Ulnar deviation demonstrated"
    ],
    commonErrors: [
      "Insufficient ulnar deviation - scaphoid still foreshortened",
      "Wrist rotated instead of deviated",
      "CR not centered to scaphoid"
    ],
    tipsAndTricks: [
      "Ulnar deviation opens up the scaphoid - think of it as stretching the scaphoid out",
      "If patient cannot ulnar deviate, use 15-20 degree CR angle toward elbow (Stecher method)",
      "Scaphoid fractures may not show on initial films - follow-up in 10-14 days if clinically suspicious",
      "Modified Stecher: elevate hand 20 degrees on sponge with CR perpendicular"
    ],
    alternateContext: null
  },

  {
    id: "scaphoid_elevated_stecher",
    name: "Scaphoid (Modified Stecher)",
    bodyPartId: "scaphoid",
    isStandard: false,
    projection: "PA with elevated hand",
    patientPosition: "Hand elevated 20 degrees on sponge, pronated",
    centralRay: "Perpendicular to IR, entering at scaphoid",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Tight to scaphoid region",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 55, smallMas: 3.0, mediumKvp: 60, mediumMas: 4.0, largeKvp: 65, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Place hand pronated on IR",
      "Elevate hand/fingers on 20-degree sponge (fingers higher than wrist)",
      "CR perpendicular to IR centered to scaphoid",
      "This achieves same effect as angling CR without tube angulation"
    ],
    evaluationCriteria: [
      "Scaphoid demonstrated without foreshortening",
      "Clear visualization of scaphoid waist"
    ],
    commonErrors: ["Incorrect sponge angle", "Hand slipping off sponge"],
    tipsAndTricks: [
      "Useful when you can't angle the tube (portable situations)",
      "20-degree sponge achieves same projection as 20-degree CR angle"
    ],
    alternateContext: {
      reason: "Cannot angle the tube (portable) or patient cannot ulnar deviate",
      patientFactors: [PatientFactor.PortableExam, PatientFactor.LimitedROM, PatientFactor.Cast, PatientFactor.Pain],
      advantagesOverStandard: "Achieves scaphoid elongation without tube angulation or wrist motion"
    }
  },

  // Forearm
  {
    id: "forearm_ap",
    name: "Forearm AP",
    bodyPartId: "forearm",
    isStandard: true,
    projection: "AP",
    patientPosition: "Seated, arm fully extended, hand supinated on IR",
    centralRay: "Perpendicular to IR at midforearm",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17 or 7x17",
    orientation: "Portrait",
    grid: "No grid (tabletop)",
    collimation: "Include both joints - wrist and elbow",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 3.0, mediumKvp: 65, mediumMas: 4.0, largeKvp: 70, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Seat patient, extend arm fully on table",
      "Supinate hand (palm up) for true AP",
      "Ensure elbow is fully extended",
      "Center midshaft of forearm to center of IR",
      "MUST include both wrist and elbow joints"
    ],
    evaluationCriteria: [
      "Both wrist and elbow joints included",
      "Radius and ulna demonstrated with minimal overlap",
      "Radial tuberosity in partial profile (confirms true AP/supination)",
      "Soft tissue visible along both bones"
    ],
    commonErrors: [
      "One joint not included - MUST include both",
      "Hand pronated instead of supinated - radius crosses over ulna",
      "Elbow flexed - not true AP"
    ],
    tipsAndTricks: [
      "ALWAYS include both joints on forearm exams",
      "If forearm is too long for one IR, use two exposures and make sure each includes at least one joint",
      "Supinated hand = true AP (radius and ulna parallel)",
      "Pronated hand gives you a PA - radius crosses over ulna"
    ],
    alternateContext: null
  },

  {
    id: "forearm_lateral",
    name: "Forearm Lateral",
    bodyPartId: "forearm",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Seated, elbow flexed 90 degrees, ulnar surface on IR",
    centralRay: "Perpendicular to IR at midforearm",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17 or 7x17",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include both joints",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 3.0, mediumKvp: 65, mediumMas: 4.0, largeKvp: 70, largeMas: 5.0, notes: null },
    positioningSteps: [
      "Flex elbow 90 degrees",
      "Place ulnar surface of forearm on IR",
      "Hand in true lateral (thumb up)",
      "Center midforearm to IR",
      "Include both joints"
    ],
    evaluationCriteria: [
      "Both joints included",
      "Elbow in true lateral (olecranon in profile)",
      "Radius superimposed over ulna proximally",
      "Wrist in true lateral"
    ],
    commonErrors: [
      "One joint not included",
      "Not true lateral - hand or elbow rotated",
      "Elbow not flexed 90 degrees"
    ],
    tipsAndTricks: [
      "90-degree elbow flexion is key for true lateral",
      "Humeral epicondyles should be superimposed for true lateral elbow",
      "Include both joints!"
    ],
    alternateContext: null
  },

  // Elbow
  {
    id: "elbow_ap",
    name: "Elbow AP",
    bodyPartId: "elbow",
    isStandard: true,
    projection: "AP",
    patientPosition: "Seated, arm fully extended, hand supinated",
    centralRay: "Perpendicular to IR at elbow joint (midpoint of line between epicondyles)",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include proximal forearm and distal humerus",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Seat patient with arm fully extended on table",
      "Supinate hand (palm up)",
      "Center elbow joint to IR",
      "Ensure full extension - arm straight",
      "Shoulder, elbow, and wrist at same height"
    ],
    evaluationCriteria: [
      "Joint space open (requires full extension)",
      "Medial and lateral epicondyles seen in profile",
      "Olecranon seated in olecranon fossa",
      "Radial head slightly overlapping ulna",
      "Anterior/posterior fat pads visible if present"
    ],
    commonErrors: [
      "Elbow not fully extended - joint space not open",
      "Hand pronated - radius crosses ulna",
      "CR not centered to joint"
    ],
    tipsAndTricks: [
      "If patient cannot fully extend (trauma), do two projections: one with CR for distal humerus and one for proximal forearm",
      "Check for displaced fat pads (sail sign) indicating joint effusion/fracture",
      "Small focal spot for detail"
    ],
    alternateContext: null
  },

  {
    id: "elbow_lateral",
    name: "Elbow Lateral",
    bodyPartId: "elbow",
    isStandard: true,
    projection: "Lateral",
    patientPosition: "Seated, elbow flexed 90 degrees, ulnar surface on IR",
    centralRay: "Perpendicular to IR at lateral epicondyle",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include proximal forearm and distal humerus",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Flex elbow exactly 90 degrees",
      "Place ulnar surface on IR",
      "Hand in true lateral position (thumb up)",
      "Shoulder, elbow, and wrist at same height",
      "Center lateral epicondyle to center of IR"
    ],
    evaluationCriteria: [
      "True lateral: 3 concentric arcs visible (trochlear sulcus, trochlea, capitellum)",
      "Olecranon process in profile",
      "Humeral epicondyles superimposed",
      "90-degree flexion demonstrated",
      "Anterior and posterior fat pads visible (if elevated, suggests joint effusion)"
    ],
    commonErrors: [
      "Not 90-degree flexion",
      "Rotation - epicondyles not superimposed",
      "Wrist not in true lateral",
      "Hand pronated or supinated instead of lateral"
    ],
    tipsAndTricks: [
      "The 3 concentric arcs confirm true lateral positioning",
      "Fat pad evaluation is CRITICAL on lateral elbow - 'sail sign' = occult fracture",
      "Keep shoulder, elbow, and wrist all at the same height",
      "90-degree flexion is essential for fat pad evaluation"
    ],
    alternateContext: null
  },

  {
    id: "elbow_oblique_internal",
    name: "Elbow Internal (Medial) Oblique",
    bodyPartId: "elbow",
    isStandard: true,
    projection: "AP Oblique (Internal/Medial Rotation)",
    patientPosition: "Arm extended, hand pronated (internally rotated 45 degrees)",
    centralRay: "Perpendicular to elbow joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Elbow joint with proximal forearm and distal humerus",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Extend arm fully on IR",
      "Pronate hand (internally rotate) 45 degrees from AP",
      "Center elbow joint to IR"
    ],
    evaluationCriteria: [
      "Coronoid process in profile (free from superimposition)",
      "Medial epicondyle in profile",
      "Trochlea visualized",
      "Olecranon process within trochlear notch"
    ],
    commonErrors: ["Insufficient or excessive rotation", "Elbow not extended"],
    tipsAndTricks: [
      "Internal (medial) oblique = best for CORONOID PROCESS",
      "Remember: 'Internal shows coronoid, External shows radial head'"
    ],
    alternateContext: null
  },

  {
    id: "elbow_oblique_external",
    name: "Elbow External (Lateral) Oblique",
    bodyPartId: "elbow",
    isStandard: true,
    projection: "AP Oblique (External/Lateral Rotation)",
    patientPosition: "Arm extended, hand supinated and externally rotated 45 degrees from AP",
    centralRay: "Perpendicular to elbow joint",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Elbow joint area",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Extend arm fully",
      "Supinate hand, then externally rotate 45 degrees from AP",
      "Center elbow joint to IR"
    ],
    evaluationCriteria: [
      "Radial head free from superimposition of ulna",
      "Lateral epicondyle in profile",
      "Capitellum clearly visible",
      "Radial head and neck well demonstrated"
    ],
    commonErrors: ["Insufficient rotation", "Elbow flexed"],
    tipsAndTricks: [
      "External (lateral) oblique = best for RADIAL HEAD",
      "Great for radial head fractures",
      "If patient cannot extend, consider radial head laterals with varying rotation"
    ],
    alternateContext: null
  },

  {
    id: "elbow_trauma_ap",
    name: "Elbow AP (Trauma - Cannot Extend)",
    bodyPartId: "elbow",
    isStandard: false,
    projection: "AP (two-part method)",
    patientPosition: "Two separate AP projections with elbow partially flexed",
    centralRay: "Perpendicular to humerus for one; perpendicular to forearm for the other",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12 each",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Include joint area on each",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: "May need to increase technique for the humerus projection through the flexed joint" },
    positioningSteps: [
      "DO NOT force extension in trauma patients",
      "Exposure 1: Position IR under the distal humerus, CR perpendicular to humerus",
      "This demonstrates the distal humerus through the partially flexed joint",
      "Exposure 2: Position IR under the proximal forearm, CR perpendicular to forearm",
      "This demonstrates the proximal forearm through the partially flexed joint",
      "The two images together replace the standard extended AP"
    ],
    evaluationCriteria: [
      "Distal humerus clearly demonstrated on one image",
      "Proximal forearm clearly demonstrated on the other",
      "Both images include the elbow joint area",
      "CR perpendicular to the respective long bone"
    ],
    commonErrors: [
      "Trying to force patient to extend - causing more injury",
      "Only doing one projection instead of two",
      "CR not angled correctly to be perpendicular to the bone of interest"
    ],
    tipsAndTricks: [
      "NEVER force extension in an acute elbow injury",
      "Two projections compensate for not being able to open the joint space",
      "Still do a lateral - patients with flexed elbows are already partway there",
      "Consider the Coyle method for radial head visualization in trauma"
    ],
    alternateContext: {
      reason: "Patient cannot extend elbow due to trauma, pain, or cast",
      patientFactors: [PatientFactor.Trauma, PatientFactor.Pain, PatientFactor.Cast, PatientFactor.CannotExtend, PatientFactor.LimitedROM],
      advantagesOverStandard: "Avoids forcing painful extension; two projections together demonstrate all anatomy that the standard AP would show"
    }
  },

  {
    id: "elbow_radial_head_laterals",
    name: "Radial Head Laterals (4-position)",
    bodyPartId: "elbow",
    isStandard: false,
    projection: "Lateral with varying hand rotation",
    patientPosition: "Lateral elbow position, hand rotated to 4 positions",
    centralRay: "Perpendicular to radial head at lateral epicondyle",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "10x12",
    orientation: "Portrait",
    grid: "No grid",
    collimation: "Elbow joint",
    markers: "R or L and position number",
    shielding: "Gonadal shield",
    respiration: "N/A",
    techniqueSuggestion: { smallKvp: 60, smallMas: 4.0, mediumKvp: 65, mediumMas: 5.0, largeKvp: 70, largeMas: 6.0, notes: null },
    positioningSteps: [
      "Position elbow in lateral position (90-degree flexion)",
      "Take 4 exposures, rotating the hand each time:",
      "1. Hand lateral (thumb up) - standard lateral",
      "2. Hand pronated (palm down)",
      "3. Hand fully supinated (palm up)",
      "4. Hand in neutral (fingers pointing up)",
      "Each rotation moves the radial head to different profile"
    ],
    evaluationCriteria: [
      "Radial head demonstrated in different profiles on each image",
      "True lateral of distal humerus maintained on each",
      "Different aspects of radial head/neck visible on each"
    ],
    commonErrors: ["Moving entire elbow instead of just rotating hand", "Not maintaining lateral position of humerus"],
    tipsAndTricks: [
      "Only rotate at the wrist/hand - keep elbow in lateral position",
      "This rotates the radius around the ulna, showing different aspects of the radial head",
      "Excellent for subtle radial head fractures visible on one rotation but not others"
    ],
    alternateContext: {
      reason: "Suspected subtle radial head fracture not visible on standard views",
      patientFactors: [PatientFactor.Pain, PatientFactor.Trauma, PatientFactor.LimitedROM],
      advantagesOverStandard: "Shows radial head in 4 different profiles to catch fractures not visible on standard lateral"
    }
  },

  // Humerus
  {
    id: "humerus_ap",
    name: "Humerus AP",
    bodyPartId: "humerus",
    isStandard: true,
    projection: "AP",
    patientPosition: "Upright or supine, arm at side, hand supinated",
    centralRay: "Perpendicular to IR at mid-humerus",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17 or 7x17",
    orientation: "Portrait",
    grid: "No grid for small patient; grid for large",
    collimation: "Include both shoulder and elbow joints",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "Suspended",
    techniqueSuggestion: { smallKvp: 65, smallMas: 5.0, mediumKvp: 70, mediumMas: 8.0, largeKvp: 75, largeMas: 10.0, notes: null },
    positioningSteps: [
      "Position patient upright or supine",
      "Extend arm at side with hand supinated (externally rotated)",
      "This places epicondyles parallel to IR for true AP",
      "Center mid-humerus to IR",
      "MUST include both shoulder and elbow joints"
    ],
    evaluationCriteria: [
      "Both shoulder and elbow joints included",
      "Greater tuberosity in profile laterally",
      "Epicondyles parallel to IR (true AP)",
      "Soft tissue margins visible"
    ],
    commonErrors: [
      "One joint not included",
      "Arm internally rotated (gives AP of elbow but not shoulder)",
      "Patient rotated"
    ],
    tipsAndTricks: [
      "Include BOTH joints",
      "Supinated hand (externally rotated) = true AP of entire humerus",
      "For trauma, if patient cannot externally rotate, take the arm as-is and note position"
    ],
    alternateContext: null
  },

  {
    id: "humerus_lateral",
    name: "Humerus Lateral",
    bodyPartId: "humerus",
    isStandard: true,
    projection: "Lateral (transthoracic or cross-table for proximal; lateromedial for shaft/distal)",
    patientPosition: "Varies by region of interest",
    centralRay: "Perpendicular to mid-humerus",
    sid: "40 inches (102 cm)",
    imageReceptorSize: "14x17",
    orientation: "Portrait",
    grid: "Grid for transthoracic; no grid for distal",
    collimation: "Both joints if possible",
    markers: "R or L",
    shielding: "Gonadal shield",
    respiration: "For transthoracic: breathing technique or suspended",
    techniqueSuggestion: { smallKvp: 70, smallMas: 15.0, mediumKvp: 75, mediumMas: 20.0, largeKvp: 80, largeMas: 25.0, notes: "Transthoracic requires higher technique" },
    positioningSteps: [
      "For mid/distal shaft: rotate arm internally (hand pronated) for lateromedial lateral",
      "For proximal humerus/surgical neck: use transthoracic lateral",
      "Transthoracic: affected arm at side, raise opposite arm, CR through thorax at surgical neck",
      "Alternative: Y-view or axillary lateral for proximal humerus"
    ],
    evaluationCriteria: [
      "Lateral projection of humerus",
      "For transthoracic: proximal humerus seen through thorax",
      "Both joints included when possible"
    ],
    commonErrors: [
      "Not achieving true lateral",
      "Transthoracic: opposite arm not raised high enough",
      "Poor technique for transthoracic - underpenetrated"
    ],
    tipsAndTricks: [
      "Proximal humerus laterals are challenging - consider Y-view as an alternative",
      "Transthoracic lateral: breathing technique blurs ribs for better visualization",
      "Internal rotation gives you a lateromedial lateral of the shaft"
    ],
    alternateContext: null
  },
];
