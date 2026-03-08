import type { BodyPart } from '../types';
import { BodyRegion } from '../types';

export const allBodyParts: BodyPart[] = [
  // Head
  { id: "skull", name: "Skull", region: BodyRegion.Head, description: "Cranium", systemImage: "brain.head.profile" },
  { id: "facial_bones", name: "Facial Bones", region: BodyRegion.Head, description: "Facial bone series", systemImage: "face.smiling" },
  { id: "nasal_bones", name: "Nasal Bones", region: BodyRegion.Head, description: "Nasal bone imaging", systemImage: "nose" },
  { id: "orbits", name: "Orbits", region: BodyRegion.Head, description: "Orbital imaging", systemImage: "eye" },
  { id: "sinuses", name: "Sinuses", region: BodyRegion.Head, description: "Paranasal sinuses", systemImage: "wind" },
  { id: "mandible", name: "Mandible", region: BodyRegion.Head, description: "Lower jaw", systemImage: "mouth" },
  { id: "tmj", name: "TMJ", region: BodyRegion.Head, description: "Temporomandibular joints", systemImage: "circle.grid.cross" },
  { id: "zygomatic_arches", name: "Zygomatic Arches", region: BodyRegion.Head, description: "Cheekbones", systemImage: "triangle" },
  { id: "mastoids", name: "Mastoids", region: BodyRegion.Head, description: "Mastoid processes", systemImage: "ear" },
  { id: "sella_turcica", name: "Sella Turcica", region: BodyRegion.Head, description: "Pituitary fossa", systemImage: "circle.bottomhalf.filled" },

  // Cervical Spine
  { id: "c_spine", name: "Cervical Spine", region: BodyRegion.CervicalSpine, description: "C1-C7 vertebrae", systemImage: "arrow.up.and.down" },
  { id: "c1_c2", name: "C1-C2 (Atlas/Axis)", region: BodyRegion.CervicalSpine, description: "Upper cervical", systemImage: "circle.and.line.horizontal" },
  { id: "cervicothoracic", name: "Cervicothoracic Junction", region: BodyRegion.CervicalSpine, description: "C7-T1 region", systemImage: "arrow.up.and.down.circle" },

  // Chest
  { id: "chest_routine", name: "Chest (Routine)", region: BodyRegion.Chest, description: "Standard chest examination", systemImage: "lungs" },
  { id: "ribs", name: "Ribs", region: BodyRegion.Chest, description: "Rib imaging", systemImage: "rectangle.split.3x1" },
  { id: "sternum", name: "Sternum", region: BodyRegion.Chest, description: "Breastbone", systemImage: "rectangle" },
  { id: "sc_joints", name: "SC Joints", region: BodyRegion.Chest, description: "Sternoclavicular joints", systemImage: "circle.grid.2x2" },

  // Shoulder
  { id: "shoulder_joint", name: "Shoulder Joint", region: BodyRegion.Shoulder, description: "Glenohumeral joint", systemImage: "circle.circle" },
  { id: "clavicle", name: "Clavicle", region: BodyRegion.Shoulder, description: "Collarbone", systemImage: "line.diagonal" },
  { id: "scapula", name: "Scapula", region: BodyRegion.Shoulder, description: "Shoulder blade", systemImage: "triangle.fill" },
  { id: "ac_joint", name: "AC Joint", region: BodyRegion.Shoulder, description: "Acromioclavicular joint", systemImage: "point.topleft.down.to.point.bottomright.curvepath" },

  // Upper Extremity
  { id: "humerus", name: "Humerus", region: BodyRegion.UpperExtremity, description: "Upper arm bone", systemImage: "rectangle.portrait" },
  { id: "elbow", name: "Elbow", region: BodyRegion.UpperExtremity, description: "Elbow joint", systemImage: "angle" },
  { id: "forearm", name: "Forearm", region: BodyRegion.UpperExtremity, description: "Radius and ulna", systemImage: "rectangle.split.1x2" },
  { id: "wrist", name: "Wrist", region: BodyRegion.UpperExtremity, description: "Carpal bones and distal R/U", systemImage: "hand.point.up" },
  { id: "hand", name: "Hand", region: BodyRegion.UpperExtremity, description: "Metacarpals and phalanges", systemImage: "hand.raised" },
  { id: "fingers", name: "Fingers", region: BodyRegion.UpperExtremity, description: "Individual digit imaging", systemImage: "hand.point.right" },
  { id: "thumb", name: "Thumb", region: BodyRegion.UpperExtremity, description: "First digit", systemImage: "hand.thumbsup" },
  { id: "scaphoid", name: "Scaphoid", region: BodyRegion.UpperExtremity, description: "Scaphoid (navicular) bone", systemImage: "oval" },

  // Thoracic Spine
  { id: "t_spine", name: "Thoracic Spine", region: BodyRegion.ThoracicSpine, description: "T1-T12 vertebrae", systemImage: "arrow.up.and.down" },

  // Lumbar Spine
  { id: "l_spine", name: "Lumbar Spine", region: BodyRegion.LumbarSpine, description: "L1-L5 vertebrae", systemImage: "arrow.up.and.down" },
  { id: "l5_s1", name: "L5-S1 Spot", region: BodyRegion.LumbarSpine, description: "Lumbosacral junction", systemImage: "arrow.down.circle" },
  { id: "sacrum_coccyx", name: "Sacrum & Coccyx", region: BodyRegion.LumbarSpine, description: "Sacrum and coccyx", systemImage: "triangle.bottomhalf.filled" },
  { id: "si_joints", name: "SI Joints", region: BodyRegion.LumbarSpine, description: "Sacroiliac joints", systemImage: "rectangle.split.2x1" },
  { id: "scoliosis_series", name: "Scoliosis Series", region: BodyRegion.LumbarSpine, description: "Full spine for curvature", systemImage: "s.circle" },

  // Abdomen
  { id: "abdomen_routine", name: "Abdomen (KUB)", region: BodyRegion.Abdomen, description: "Kidneys, ureters, bladder", systemImage: "rectangle.portrait.fill" },
  { id: "acute_abdomen", name: "Acute Abdomen Series", region: BodyRegion.Abdomen, description: "Obstruction/free air series", systemImage: "exclamationmark.triangle" },
  { id: "ivu", name: "IVU/IVP", region: BodyRegion.Abdomen, description: "Intravenous urogram", systemImage: "drop" },

  // Pelvis
  { id: "pelvis_routine", name: "Pelvis (AP)", region: BodyRegion.Pelvis, description: "Standard pelvis", systemImage: "figure.stand" },
  { id: "inlet_outlet", name: "Pelvic Inlet/Outlet", region: BodyRegion.Pelvis, description: "Inlet and outlet views", systemImage: "arrow.up.arrow.down" },

  // Hip
  { id: "hip_routine", name: "Hip", region: BodyRegion.Hip, description: "Hip joint imaging", systemImage: "circle.circle" },
  { id: "hip_surgical", name: "Surgical Hip (Trauma)", region: BodyRegion.Hip, description: "Cross-table lateral hip", systemImage: "staroflife" },
  { id: "hip_prosthesis", name: "Hip Prosthesis", region: BodyRegion.Hip, description: "Post-arthroplasty", systemImage: "wrench" },

  // Lower Extremity
  { id: "femur", name: "Femur", region: BodyRegion.LowerExtremity, description: "Thigh bone", systemImage: "rectangle.portrait" },
  { id: "knee", name: "Knee", region: BodyRegion.LowerExtremity, description: "Knee joint", systemImage: "circle.circle" },
  { id: "patella", name: "Patella", region: BodyRegion.LowerExtremity, description: "Kneecap", systemImage: "oval.portrait" },
  { id: "tibia_fibula", name: "Tibia/Fibula", region: BodyRegion.LowerExtremity, description: "Lower leg bones", systemImage: "rectangle.split.1x2" },
  { id: "ankle", name: "Ankle", region: BodyRegion.LowerExtremity, description: "Ankle joint", systemImage: "circle.circle" },
  { id: "calcaneus", name: "Calcaneus", region: BodyRegion.LowerExtremity, description: "Heel bone", systemImage: "triangle.bottomhalf.filled" },
  { id: "foot", name: "Foot", region: BodyRegion.LowerExtremity, description: "Tarsals, metatarsals, phalanges", systemImage: "foot" },
  { id: "toes", name: "Toes", region: BodyRegion.LowerExtremity, description: "Individual toe imaging", systemImage: "smallcircle.filled.circle" },
  { id: "weight_bearing", name: "Weight Bearing Feet/Ankles", region: BodyRegion.LowerExtremity, description: "Standing AP feet/ankles", systemImage: "figure.stand" },
];

export function bodyPartsForRegion(region: BodyRegion): BodyPart[] {
  return allBodyParts.filter(bp => bp.region === region);
}

export function bodyPartById(id: string): BodyPart | undefined {
  return allBodyParts.find(bp => bp.id === id);
}
