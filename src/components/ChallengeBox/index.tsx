import React from 'react';
import Link from 'next/link';

import {
  Container,
  ChallengeNotActive,
} from './styles';

export default function ChallengeBox() {

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
            }} alt="Vips" />
            <strong>VIPs</strong>
          </p>
          <Link href="/overpower/vips">
            <button>Acessar</button>
          </Link>
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
            }} alt="Cash" />
            <strong>Cash</strong>
          </p>
          <Link href="/overpower/cash">
            <button>Acessar</button>
          </Link>
        </ChallengeNotActive>
    </Container>
  );
};

