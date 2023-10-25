import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { BlogThemeProvider } from '../contexts/BlogThemeContext/BlogThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </BlogThemeProvider>
  );
}
