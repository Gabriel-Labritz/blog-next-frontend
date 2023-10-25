import React from 'react';
import { theme } from './../../styles/theme';
import { DefaultTheme } from 'styled-components';
import { createContext } from 'react';

export type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme,
});
