import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Sidebar from '../../components/Sidebar';
import { ExperienceBar } from '../../components/ExperienceBar';
import ChallengeBox, { VipBox, CashBox } from '../../components/ChallengeBox';

import { Container } from '../../styles/shop';
import { Dark, Geral, Overpower, Pvp } from '../../components/ServerItens';

function Shop() {
  const [ defaultItem, setDefaultItem ] = useState(true);
  const [ active, setActive ] = useState('none');

  function changeStates(server) {
    setDefaultItem(false);
    setActive(server);
  }

  return (
    <Container className="container">
      <Head>
        <title>Loja | VoltzMC</title>
      </Head>

      <h1 className="selection-title">Selecione o servidor!</h1>

      <div id="selection">
        <div className={(active == 'overpower') && active} onClick={() => changeStates('overpower')}>
          <span>Rankup Overpower</span>
        </div>
        <div className={(active == 'dark') && active} onClick={() => changeStates('dark')}>
          <span>Rankup Dark</span>
        </div>
        <div  className={(active == 'pvp') && active} onClick={() => changeStates('pvp')}>
          <span>Full PvP</span>
        </div>
        <div  className={(active == 'geral') && active} onClick={() => changeStates('geral')}>
          <span>Geral</span>
        </div>
      </div>
      {defaultItem ? (
        <section style={{ gap: '5rem', marginTop: '.5rem', marginBottom: '1rem' }} className="default">
          <div className="title">
            <img src="https://crafatar.com/renders/head/02b0e307-a4e4-45fe-87fb-72ade4f2a0aa" alt="zPG0D"/>
            <h1><strong>ATENÇÃO:</strong> Confira todos os dados na hora do pagamento.</h1>
          </div>
          <div className="description">
            <span>Ao adquirir qualquer produto na nossa loja, você estará ajudando o servidor a se manter online!</span>
          </div>
        </section>
      ) : ''}
      {(active == 'overpower') ? (
        <Overpower />
      ) : ''}
      {(active == 'dark')  ? (
        <Dark />
      ) : ''}
      {(active == 'pvp')  ? (
        <Pvp />
      ) : ''}
      {(active == 'geral')  ? (
        <Geral />
      ) : ''}
      
    </Container>
  )
}

export default Shop;

/**
 * backgroundColor={backgroundColor}
  foregroundColor={foregroundColor}
  isLoading={isLoading}
 */