import {
  Container,
  ChallengeNotActive,
} from './styles';

const ChallengeBox = () => {

  return (
    <Container>
        <ChallengeNotActive>
          <strong>NOVIDADES!!</strong>
          <p>
            <img src="logos/vips/VoltzLogo.png" style={{
              height: 170,
              width: 150
            }} alt="Level Up" />
            Novo cupom de desconto Feliz Pascoa!!
          </p>
        </ChallengeNotActive>
    </Container>
  );
};

export function VipBox() {

  return (
    <Container>
        <ChallengeNotActive>
          {/* <strong>Vips</strong> */}
          <p>
            <img src="logos/Vip.png" style={{
              height: 170,
              width: 150
            }} alt="Level Up" />
            <strong>VIPs</strong>
          </p>
          <button>Acessar</button>
        </ChallengeNotActive>
    </Container>
  );
};

export function CashBox() {

  return (
    <Container>
        <ChallengeNotActive>
          {/* <strong>NOVIDADES!!</strong> */}
          <p>
            <img src="logos/Cash.png" style={{
              height: 170,
              width: 170
            }} alt="Level Up" />
            <strong>Cash</strong>
          </p>
          <button>Acessar</button>
        </ChallengeNotActive>
    </Container>
  );
};

export default ChallengeBox;
