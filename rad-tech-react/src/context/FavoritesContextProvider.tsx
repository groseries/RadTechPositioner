import { useState, useCallback, type ReactNode } from 'react';
import { FavoritesContext } from './FavoritesContext';

const FAVORITES_KEY = 'favoritePositions';
const RECENT_KEY = 'recentlyViewed';
const MAX_RECENT = 20;

function loadSet(key: string): Set<string> {
  try {
    const saved = localStorage.getItem(key);
    if (saved) return new Set(JSON.parse(saved));
  } catch { /* ignore */ }
  return new Set();
}

function loadArray(key: string): string[] {
  try {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return [];
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => loadSet(FAVORITES_KEY));
  const [recentIds, setRecentIds] = useState<string[]>(() => loadArray(RECENT_KEY));

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isFavorite = useCallback((id: string) => favoriteIds.has(id), [favoriteIds]);

  const addToRecent = useCallback((id: string) => {
    setRecentIds(prev => {
      const next = [id, ...prev.filter(x => x !== id)].slice(0, MAX_RECENT);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <FavoritesContext.Provider value={{ favoriteIds, recentIds, toggleFavorite, isFavorite, addToRecent }}>
      {children}
    </FavoritesContext.Provider>
  );
}
