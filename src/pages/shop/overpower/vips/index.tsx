import React from 'react';
import Head from 'next/head';

import { ExperienceBar } from '../../../../components/ExperienceBar';
import Sidebar from '../../../../components/Sidebar';
import { ItemVip } from '../../../../components/ChallengeBox';

import { Container } from '../../../../styles/vips';

export default function Vips() {

  return (
    <Container className="container">
      <Head>
        <title>Loja | VoltzMC</title>
      </Head>

      <Sidebar page="shop"/>

      <div className="contents">
        <h1>Vips</h1>
        <section>
          <ItemVip src="/logos/vips/DarknessLogo.png" title="Darkness" price="10,00" days="30" />
          <ItemVip src="/logos/vips/DarknessLogo.png" title="Darkness" price="30,00" days="90" />
          <ItemVip src="/logos/vips/DarknessLogo.png" title="Darkness" price="36,00" days="120" />
          <ItemVip src="/logos/vips/BeastLogo.png" title="Beast" price="20,00" days="30" />
          <ItemVip src="/logos/vips/BeastLogo.png" title="Beast" price="60,00" days="90" />
          <ItemVip src="/logos/vips/BeastLogo.png" title="Beast" price="72,00" days="120" />
          <ItemVip src="/logos/vips/RebelLogo.png" title="Rebel" price="45,00" days="30" />
          <ItemVip src="/logos/vips/RebelLogo.png" title="Rebel" price="135,00" days="90" />
          <ItemVip src="/logos/vips/RebelLogo.png" title="Rebel" price="155,00" days="120" />
          <ItemVip src="/logos/vips/VoltzLogo.png" title="Voltz" price="80,00" days="30" />
          <ItemVip src="/logos/vips/VoltzLogo.png" title="Voltz" price="240,00" days="90" />
          <ItemVip src="/logos/vips/VoltzLogo.png" title="Voltz" price="256,00" days="120" />
        </section>
      </div>
    </Container>
  );
}