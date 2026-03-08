# RadTechPositioner

Radiographic positioning reference web app for rad techs. React 19 + TypeScript web app with 5-tab interface for radiographic positioning.

## Project Structure

```
rad-tech-react/             # React 19 + TypeScript + Vite web app
├── src/types/              # TypeScript interfaces (Position, BodyPart, BodyRegion, etc.)
├── src/data/               # Static position data by region (8 files) + PositionDatabase, BodyPartData
├── src/views/              # React components (5 tabs + detail views)
├── src/context/            # FavoritesContext, FavoritesProvider, useFavorites hook
└── package.json            # Dependencies: react, react-router-dom, lucide-react, vite
```

## Architecture

**Component + Context API**. Single React web app with 5 tabs:

1. **Body Map** — Interactive body diagram → region → body part → positions
2. **Search** — Full-text search across position names, projections, body parts
3. **Technique Calculator** — kVp/mAs calculation with patient size/thickness adjustments (4cm rule, 15% rule)
4. **Favorites** — Starred positions + recently viewed (max 20, persisted to UserDefaults/localStorage)
5. **Reference** — Exposure rules, evaluation criteria, pathology, landmarks, grid guide, contrast media

## Core Data Model

**Position** is the central model (~200+ positions across 11 body regions):
- Identification: id, name, bodyPartId, projection, isStandard
- Technical: centralRay, sid, imageReceptorSize, grid, collimation, orientation
- Patient: patientPosition, respiration, shielding, markers
- Educational: positioningSteps[], evaluationCriteria[], commonErrors[], tipsAndTricks[]
- Technique: techniqueSuggestion (small/medium/large kVp+mAs values)
- Alternates: alternateContext with reason, patientFactors[], advantagesOverStandard

**BodyRegion** (11): Head, C-spine, Chest, Shoulder, Upper Extremity, T-spine, L-spine, Abdomen, Pelvis, Hip, Lower Extremity. Each has hitRegion coordinates for the body diagram.

**BodyPart** (60+): Linked to regions. Contains id, name, description, systemImage.

## Key Patterns

- Position data is **static** — defined in region-specific files (e.g., `chestPositions.ts`), aggregated by `positionDatabase.ts`
- **No network calls or external APIs** — everything is bundled
- React deps: react-router-dom v7 (routing), lucide-react (icons), Vite (build)
- Patient factors (23 enum cases like trauma, obese, pediatric, wheelchair) drive alternate position filtering
- Body diagram uses normalized (0-1) coordinate hit regions for interactive region selection
- Context API + localStorage for favorites/recently viewed persistence

## Build & Run

```bash
cd rad-tech-react
npm install
npm run dev      # Dev server (Vite)
npm run build    # Production build (TypeScript + Vite)
npm run lint     # ESLint validation
```

## Conventions

- React: Functional components with hooks, TypeScript strict mode
- Data files follow pattern: `{region}Positions.ts` (e.g., `chestPositions.ts`)
- Position IDs are kebab-case strings (e.g., `"chest-pa-upright"`)
- Context structure: `FavoritesContext.ts` (definition) → `FavoritesContextProvider.tsx` (provider) → `useFavorites.ts` (hook)
- Components organized by functionality (views, context, data)
