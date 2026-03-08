import { createContext } from 'react';

export interface FavoritesContextType {
  favoriteIds: Set<string>;
  recentIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  addToRecent: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(null);
