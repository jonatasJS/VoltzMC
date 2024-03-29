import { GetServerSideProps } from 'next';
import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useSession } from 'next-auth/client';
import { Provider } from 'react-redux';

import { store } from '../store/store';

import HomePage from '../templates/HomePage';
import LoadScreen from '../components/LoadScreen';
import LoginInterface from '../components/LoginInterface';
import Routes from '../routes';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

export default function Home (props: HomeProps) {
  const [ session, loading ] = useSession();
  
  return (
    <Provider store={store}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        {/* <Routes /> */}
        {loading ?
          (
            <>
              <LoadScreen />
              <ins className="adsbygoogle"
                   style={{display:"block"}}
                   data-ad-client="ca-pub-5593915309329672"
                   data-ad-slot="7238080479"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
              <script>
                   (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </>
          ) :
          <div style={{
            overflow: 'auto'
          }}>
            <HomePage />
          </div>
        }
      </ChallengesProvider>
    </Provider>
)}
