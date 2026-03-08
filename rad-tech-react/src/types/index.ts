export interface TechniqueSuggestion {
  smallKvp: number;
  smallMas: number;
  mediumKvp: number;
  mediumMas: number;
  largeKvp: number;
  largeMas: number;
  notes: string | null;
}

export enum PatientFactor {
  Pain = "Patient in Pain",
  Immobile = "Cannot Move/Immobile",
  Wheelchair = "Wheelchair Bound",
  Stretcher = "On Stretcher",
  Obese = "Large Body Habitus",
  Pediatric = "Pediatric",
  Geriatric = "Geriatric",
  Trauma = "Trauma",
  PostSurgical = "Post-Surgical",
  Claustrophobic = "Claustrophobic",
  Confused = "Confused/Uncooperative",
  CannotStand = "Cannot Stand",
  CannotSit = "Cannot Sit",
  LimitedROM = "Limited Range of Motion",
  Cast = "Cast/Splint Present",
  Pregnant = "Pregnant",
  PortableExam = "Portable/Bedside Exam",
  Intubated = "Intubated",
  ShortOfBreath = "Short of Breath",
  CannotExtend = "Cannot Extend",
  CannotFlex = "Cannot Flex",
  CannotRotate = "Cannot Rotate",
  CannotPronate = "Cannot Pronate/Supinate",
}

export const patientFactorIcons: Record<PatientFactor, string> = {
  [PatientFactor.Pain]: "cross",
  [PatientFactor.Immobile]: "bed-double",
  [PatientFactor.Wheelchair]: "accessibility",
  [PatientFactor.Stretcher]: "bed-double",
  [PatientFactor.Obese]: "user",
  [PatientFactor.Pediatric]: "baby",
  [PatientFactor.Geriatric]: "person-standing",
  [PatientFactor.Trauma]: "siren",
  [PatientFactor.PostSurgical]: "bandage",
  [PatientFactor.Claustrophobic]: "minimize-2",
  [PatientFactor.Confused]: "help-circle",
  [PatientFactor.CannotStand]: "user-x",
  [PatientFactor.CannotSit]: "armchair",
  [PatientFactor.LimitedROM]: "rotate-ccw",
  [PatientFactor.Cast]: "shield",
  [PatientFactor.Pregnant]: "heart",
  [PatientFactor.PortableExam]: "tablet",
  [PatientFactor.Intubated]: "activity",
  [PatientFactor.ShortOfBreath]: "wind",
  [PatientFactor.CannotExtend]: "arrow-up-right",
  [PatientFactor.CannotFlex]: "arrow-down-right",
  [PatientFactor.CannotRotate]: "rotate-cw",
  [PatientFactor.CannotPronate]: "hand",
};

export const allPatientFactors = Object.values(PatientFactor);

export interface AlternateContext {
  reason: string;
  patientFactors: PatientFactor[];
  advantagesOverStandard: string;
}

export interface Position {
  id: string;
  name: string;
  bodyPartId: string;
  isStandard: boolean;
  projection: string;
  patientPosition: string;
  centralRay: string;
  sid: string;
  imageReceptorSize: string;
  orientation: string;
  grid: string;
  collimation: string;
  markers: string;
  shielding: string;
  respiration: string;
  techniqueSuggestion: TechniqueSuggestion | null;
  positioningSteps: string[];
  evaluationCriteria: string[];
  commonErrors: string[];
  tipsAndTricks: string[];
  alternateContext: AlternateContext | null;
}

export enum BodyRegion {
  Head = "Head",
  CervicalSpine = "Cervical Spine",
  Chest = "Chest",
  Shoulder = "Shoulder",
  UpperExtremity = "Upper Extremity",
  ThoracicSpine = "Thoracic Spine",
  LumbarSpine = "Lumbar Spine",
  Abdomen = "Abdomen",
  Pelvis = "Pelvis",
  Hip = "Hip",
  LowerExtremity = "Lower Extremity",
}

export const allBodyRegions = Object.values(BodyRegion);

export const bodyRegionColors: Record<BodyRegion, string> = {
  [BodyRegion.Head]: "#007AFF",
  [BodyRegion.CervicalSpine]: "#32ADE6",
  [BodyRegion.Chest]: "#FF3B30",
  [BodyRegion.Shoulder]: "#FF9500",
  [BodyRegion.UpperExtremity]: "#FFCC00",
  [BodyRegion.ThoracicSpine]: "#34C759",
  [BodyRegion.LumbarSpine]: "#00C7BE",
  [BodyRegion.Abdomen]: "#AF52DE",
  [BodyRegion.Pelvis]: "#FF2D55",
  [BodyRegion.Hip]: "#5856D6",
  [BodyRegion.LowerExtremity]: "#30B0C7",
};

// Hit regions normalized to the new SVG viewBox (290.069 x 290.069)
// SVG anatomy landmarks: head ~y0-50, neck ~y60-80, shoulders ~y60-75,
// arms ~y65-160, torso ~y60-185, pelvis/legs ~y160-290
export const bodyRegionHitRegions: Record<BodyRegion, { x: number; y: number; w: number; h: number }> = {
  [BodyRegion.Head]:            { x: 0.38, y: 0.00, w: 0.24, h: 0.18 },
  [BodyRegion.CervicalSpine]:   { x: 0.44, y: 0.18, w: 0.12, h: 0.06 },
  [BodyRegion.Shoulder]:        { x: 0.25, y: 0.22, w: 0.50, h: 0.06 },
  [BodyRegion.Chest]:           { x: 0.35, y: 0.28, w: 0.30, h: 0.14 },
  [BodyRegion.ThoracicSpine]:   { x: 0.44, y: 0.28, w: 0.12, h: 0.14 },
  [BodyRegion.UpperExtremity]:  { x: 0.05, y: 0.24, w: 0.90, h: 0.32 },
  [BodyRegion.LumbarSpine]:     { x: 0.44, y: 0.42, w: 0.12, h: 0.12 },
  [BodyRegion.Abdomen]:         { x: 0.35, y: 0.42, w: 0.30, h: 0.12 },
  [BodyRegion.Pelvis]:          { x: 0.33, y: 0.54, w: 0.34, h: 0.10 },
  [BodyRegion.Hip]:             { x: 0.28, y: 0.54, w: 0.44, h: 0.10 },
  [BodyRegion.LowerExtremity]:  { x: 0.28, y: 0.62, w: 0.44, h: 0.38 },
};

export interface BodyPart {
  id: string;
  name: string;
  region: BodyRegion;
  description: string;
  systemImage: string;
}
