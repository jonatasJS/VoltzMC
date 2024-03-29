import Head from 'next/head';

import ChallengeBox from '../../components/ChallengeBox';
import { AdsBox } from '../../components/ChallengeBox';

import { Container } from './styles';

function HomePage () {
  return (
    <Container className="container">
      <Head>
        <title>Início | VoltzMC</title>
      </Head>

      <section style={{ gap: '5rem' }}>
        <div>
          <ChallengeBox />
        </div>
        <div>
          <AdsBox />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </Container>
  )};

export default HomePage;
