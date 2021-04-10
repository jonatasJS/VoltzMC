import { useContext, useState } from 'react';
// const util = require('minecraft-server-util');
import GetData from '../../pages/api/getData';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import {
  Container,
  CurrentExperience,
  Title
} from './styles';

function ExperienceBar() {
  const [ onlinePlayers, setOnlinePlayers ] = useState(0);
  const [ maxPlayers, setMaxPlayers ] = useState(0);
  
  setInterval(() => {
    setMaxPlayers(GetData.maxPlayers);
    setOnlinePlayers(GetData.onlinePlayers);
  }, 900);

  const percentOfThePlayers = Math.round(onlinePlayers * 100) / maxPlayers;

  return (
    <>
      <Title className="title">
        <span>Players Online</span>
      </Title>
      <Container>
        <span>0</span>
        <div className="bar">        
          <div style={{ width: `${percentOfThePlayers}%` }} />
          <CurrentExperience style={{ left: `${percentOfThePlayers}%` }}>
            {onlinePlayers}
          </CurrentExperience>
        </div>
        <span>{maxPlayers}</span>
      </Container>
    </>
  );
};

export default ExperienceBar;
