import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

export type ThemeName = 'light' | 'dark' | 'emerald' | 'violet';

const THEME_ORDER: ThemeName[] = ['light', 'dark', 'emerald', 'violet'];
const THEME_LABELS: Record<ThemeName, string> = {
  light: '浅色',
  dark: '暗黑',
  emerald: '翠绿',
  violet: '紫韵',
};

interface ThemeContextValue {
  theme: ThemeName;
  themeLabel: string;
  nextTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  themeLabel: '浅色',
  nextTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('dashboard-theme');
    return (saved as ThemeName) || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dashboard-theme', theme);
  }, [theme]);

  const nextTheme = useCallback(() => {
    setTheme(prev => {
      const idx = THEME_ORDER.indexOf(prev);
      return THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeLabel: THEME_LABELS[theme], nextTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
