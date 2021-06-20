import React, { useState } from 'react';
import use from 'react-router-dom';
import Router, { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { AnimateSharedLayout } from 'framer-motion';

import { ThemeProvider } from '../contexts/ThemeContext';
import Sidebar from '../components/Sidebar';
import { ExperienceBar } from '../components/ExperienceBar';

import { Container } from '../templates/HomeTemplate/styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const routeFormated = router.asPath
    .replace('/overpower/' , '')
    .replace('/dark/' , '')
    .replace('/pvp/' , '')
    .replace('/geral/' , '')
    .replace('/' , '');
    
  const [selected, setSelected] = useState('home');

  return (
    <AnimateSharedLayout>
      <ThemeProvider>
        <Provider session={pageProps.session}>
          <Container>
            <Sidebar selected={selected} setSelected={setSelected} page="" />

            {routeFormated == 'shop' ? '' : <ExperienceBar />}

            <main>
              <Component {...pageProps} />
            </main>
          </Container>

          {/* <Routes /> */}
        </Provider>
      </ThemeProvider>
    </AnimateSharedLayout>
  );
}
