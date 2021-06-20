import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const CompletedCahallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <Container>
      <span>Vip's comprados esse mes</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedCahallenges;
