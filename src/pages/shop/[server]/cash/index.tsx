import Head from 'next/head';
import React from 'react';

import { ItemCash } from '../../../../components/ChallengeBox';
import Sidebar from '../../../../components/Sidebar';

import { Container } from '../../../../styles/cash';

export default function Cash() {

  return (
    <Container className="container">
      <Head>
        <title>Loja | VoltzMC</title>
      </Head>

      <div className="contents">
        <h1>Cash</h1>
        <section>
          <ItemCash src="/logos/Cash.png" bonus="" amount="5000" price="5,00" />
          <ItemCash src="/logos/Cash.png" bonus="" amount="15000" price="15,00" />
          <ItemCash src="/logos/Cash.png" bonus="" amount="30000" price="30,00" />
          <ItemCash src="/logos/Cash.png" bonus="" amount="50000" price="50,00" />
          <ItemCash src="/logos/Cash.png" bonus="10000" amount="100000" price="100,00" />
          <ItemCash src="/logos/Cash.png" bonus="25000" amount="150000" price="150,00" />
        </section>
      </div>
    </Container>
  );
}