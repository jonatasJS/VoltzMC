import Head from 'next/head';
import { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import ExperienceBar from '../../components/ExperienceBar';
import ChallengeBox, { VipBox, CashBox } from '../../components/ChallengeBox';

import { Container } from '../../styles/shop';

function Shop() {
  const [ defaultItem, setDefaultItem ] = useState(true);
  const [ optionOverpower, setOptionOverpower ] = useState(false);
  const [ optionDark, setOptionDark ] = useState(false);
  const [ optionPvp, setOptionPvp ] = useState(false);
  const [ optionGeral, setOptionGeral ] = useState(false);

  function overpower() {
    setDefaultItem(false);
    setOptionDark(false);
    setOptionPvp(false);
    setOptionGeral(false);

    setOptionOverpower(true);
  }

  function dark() {
    setDefaultItem(false);
    setOptionOverpower(false);
    setOptionPvp(false);
    setOptionGeral(false);
    
    setOptionDark(true);
  }

  function pvp() {
    setDefaultItem(false);
    setOptionOverpower(false);
    setOptionDark(false);
    setOptionGeral(false);
    
    setOptionPvp(true);
  }

  function geral() {
    setDefaultItem(false);
    setOptionOverpower(false);
    setOptionDark(false);
    setOptionPvp(false);
    
    setOptionGeral(true);
  }

  return (
    <Container className="container">
      <Head>
        <title>Loja | VoltzMC</title>
      </Head>

      <Sidebar />

      <ExperienceBar />

      <h1 className="selection-title">Selecione o servidor!</h1>

      <div id="selection">
        <div className={optionOverpower.valueOf().toString()} onClick={overpower}>
          <span>Rankup Overpower</span>
        </div>
        <div className={optionDark.valueOf().toString()} onClick={dark}>
          <span>Rankup Dark</span>
        </div>
        <div  className={optionPvp.valueOf().toString()} onClick={pvp}>
          <span>Full PvP</span>
        </div>
        <div  className={optionGeral.valueOf().toString()} onClick={geral}>
          <span>Geral</span>
        </div>
      </div>
      {defaultItem ? (
        <section className="default">
          <div className="title">
            <img src="https://crafatar.com/renders/head/02b0e307-a4e4-45fe-87fb-72ade4f2a0aa" alt="zPG0D"/>
            <h1><strong>ATENÇÃO:</strong> Confira todos os dados na hora do pagamento.</h1>
          </div>
          <div className="description">
            <span>Ao adquirir qualquer produto na nossa loja, você estará ajudando o servidor a se manter online!</span>
          </div>
        </section>
      ) : ''}
      {optionOverpower ? (
        <section>
        <div>
          <VipBox />
        </div>
        <div>
          <CashBox />
        </div>
      </section>
      ) : ''}
      {optionDark ? (
        <section>
        <div>
          <ChallengeBox />
        </div>
        <div>
          <h1>Rankup Dark</h1>
        </div>
      </section>
      ) : ''}
      {optionPvp ? (
        <section>
        <div>
          <ChallengeBox />
        </div>
        <div>
          <h1>Full PvP</h1>
        </div>
      </section>
      ) : ''}
      {optionGeral ? (
        <section>
        <div>
          <ChallengeBox />
        </div>
        <div>
          <h1>Geral</h1>
        </div>
      </section>
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
