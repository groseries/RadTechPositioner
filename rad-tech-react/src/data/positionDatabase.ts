import type { Position } from '../types';
import { PatientFactor } from '../types';
import { chestPositions } from './chestPositions';
import { upperExtremityPositions } from './upperExtremityPositions';
import { shoulderPositions } from './shoulderPositions';
import { lowerExtremityPositions } from './lowerExtremityPositions';
import { spinePositions } from './spinePositions';
import { headPositions } from './headPositions';
import { abdomenPelvisPositions } from './abdomenPelvisPositions';
import { hipPositions } from './hipPositions';

export const allPositions: Position[] = [
  ...chestPositions,
  ...upperExtremityPositions,
  ...shoulderPositions,
  ...lowerExtremityPositions,
  ...spinePositions,
  ...headPositions,
  ...abdomenPelvisPositions,
  ...hipPositions,
];

export function positionsForBodyPart(bodyPartId: string): Position[] {
  return allPositions.filter(p => p.bodyPartId === bodyPartId);
}

export function standardPositions(bodyPartId: string): Position[] {
  return allPositions.filter(p => p.bodyPartId === bodyPartId && p.isStandard);
}

export function alternatePositions(bodyPartId: string): Position[] {
  return allPositions.filter(p => p.bodyPartId === bodyPartId && !p.isStandard);
}

export function alternatePositionsWithFactors(bodyPartId: string, factors: Set<PatientFactor>): Position[] {
  if (factors.size === 0) return alternatePositions(bodyPartId);
  return alternatePositions(bodyPartId).filter(p => {
    if (!p.alternateContext) return false;
    return p.alternateContext.patientFactors.some(f => factors.has(f));
  });
}

export function positionById(id: string): Position | undefined {
  return allPositions.find(p => p.id === id);
}

export function searchPositions(query: string): Position[] {
  const lowered = query.toLowerCase();
  return allPositions.filter(p =>
    p.name.toLowerCase().includes(lowered) ||
    p.projection.toLowerCase().includes(lowered) ||
    p.bodyPartId.toLowerCase().includes(lowered)
  );
}
