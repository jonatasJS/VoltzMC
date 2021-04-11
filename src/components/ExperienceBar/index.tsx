import { useState } from 'react';
// const util = require('minecraft-server-util');
import GetData from '../../pages/api/getData';

import {
  Container,
  CurrentExperience,
  Title
} from './styles';

export function ExperienceBar() {
  const [ onlinePlayers, setOnlinePlayers ] = useState(0);
  const [ maxPlayers, setMaxPlayers ] = useState(0);
  const [ title, setTitle ] = useState('Players Online');
  
  
  setInterval(() => {
    if(GetData.online === true) {
      setTitle('Players Online')
      setMaxPlayers(GetData.maxPlayers);
      setOnlinePlayers(GetData.onlinePlayers);
    } else if(GetData.online === false) {
      setTitle('Servidor Offline')
    }
  }, 900);

  const percentOfThePlayers = Math.round(onlinePlayers * 100) / maxPlayers;

  return (
    <>
      <Title>
        <span>{title}</span>
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

// export 
