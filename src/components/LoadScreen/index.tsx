import Head from 'next/head';
import React from 'react';

import { Container } from './styles';

const LoadScreen: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Início | VoltzMC</title>
      </Head>
      
      <div className="loading">
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default LoadScreen;
