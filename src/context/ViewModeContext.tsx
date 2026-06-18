import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type ViewMode = 'simple' | 'official';

const STORAGE_KEY = 'dashboard-view-mode';

interface ViewModeContextValue {
  mode: ViewMode;
  toggleMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextValue>({
  mode: 'simple',
  toggleMode: () => {},
});

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ViewMode>(() => {
    return (localStorage.getItem(STORAGE_KEY) as ViewMode) || 'simple';
  });

  const toggleMode = useCallback(() => {
    setMode(prev => {
      const next = prev === 'simple' ? 'official' : 'simple';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <ViewModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  return useContext(ViewModeContext);
}
