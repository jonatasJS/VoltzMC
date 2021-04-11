import Head from 'next/head';
import React from 'react';

import { ExperienceBar } from '../../../components/ExperienceBar';
import Sidebar from '../../../components/Sidebar';

import { Container } from '../../../styles/shop';

export default function Cash() {

  return (
    <Container className="container">
      <Head>
        <title>Loja | VoltzMC</title>
      </Head>

      <Sidebar page="shop"/>

      <h1>Cash</h1>
      
    </Container>
  );
}