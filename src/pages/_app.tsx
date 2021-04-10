import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

import Routes from '../routes';
import { ThemeProvider } from '../contexts/ThemeContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />

      {/* <Routes /> */}
    </Provider>
  </ThemeProvider>
);

export default MyApp;
