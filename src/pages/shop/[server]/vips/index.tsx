import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { BsArrowLeftShort as ArrowLeft } from 'react-icons/bs';

import { ItemVip } from '../../../../components/ChallengeBox';

import { Container } from '../../../../styles/vips';

import teste from '../../../../contexts/teste';

export default function Vips() {
  console.log(teste);

  function goBack() {
    Router.back();
  }

  return (
    <Container className="container">
      <Head>
        <title>Loja | VoltzMC</title>
      </Head>

      <h1>Vips</h1>

      <div className="arrow">
        <ArrowLeft size={50} onClick={goBack} />
      </div>

      <div className="contents">
        <section>
          {teste.map(index => <ItemVip src={index.url} title={index.title} price={index.price} days={index.days} />)}
        </section>
      </div>
    </Container>
  );
}

/**
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
 */