import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import {
  BlogThemeContext,
  BlogThemeContextValues,
  BlogThemeProviderProps,
} from './BlogThemeContext';
import { ThemeProvider } from 'styled-components';

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) return;

    const newTheme = JSON.parse(localTheme);

    setBlogTheme(newTheme);
  }, []);

  const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setBlogTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const invertedTheme = {
          ...theme,
          name: 'inverted',
          colors: {
            primary: '#FFFFFF',
            darkText: '#F9F9F9',
            secondary: '#dc143c',
            white: '#282A2D',
            mediumGray: '#F9F9F9',
            darkerGray: '#CCCCCC',
          },
        };

        setBlogTheme(invertedTheme);
        localStorage.setItem('theme', JSON.stringify(invertedTheme));
      }
    },
    [],
  );

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};
