import Head from 'next/head';

import Sidebar from '../../components/Sidebar';
import { ExperienceBar } from '../../components/ExperienceBar';
import ChallengeBox from '../../components/ChallengeBox';

import { Container } from './styles';

function HomePage () {
  return (
    <Container className="container">
      <Head>
        <title>Início | VoltzMC</title>
      </Head>

      <Sidebar page="home"/>

      <ExperienceBar />
      <section>
        {/* <div>
          <Profile />
          <CompletedChallenges />
          <Countdown /> 
        </div> */}
        <div>
          <ChallengeBox />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </Container>
  )};

export default HomePage;
