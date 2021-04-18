import React, { useState } from 'react';
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
            <img src="/logos/vips/VoltzLogo.png" style={{
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
            <img src="/logos/Vip.png" style={{
              height: 170,
              width: 150
            }} alt="Vips" />
            <strong>VIPs</strong>
          </p>
          <Link href="/shop/overpower/vips">
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
            <img src="/logos/Cash.png" style={{
              height: 170,
              width: 170
            }} alt="Cash" />
            <strong>Cash</strong>
          </p>
          <Link href="/shop/overpower/cash">
            <button>Acessar</button>
          </Link>
        </ChallengeNotActive>
    </Container>
  );
};


export function ItemVip({ src, price, title, days }) {
  const [ descriptionState, setDescriptionState ] = useState('none');

  function showDescription() {
    if (descriptionState == 'grid') setDescriptionState('none');
    else if (descriptionState == 'none') setDescriptionState('grid');

    console.log(descriptionState);
  }

  return (
    <Container>
        <ChallengeNotActive>
          {/* <strong>NOVIDADES!!</strong> */}
          <p>
            <img src={src} style={{
              width: 187.625,
              height: 220
            }} alt={title} />
            <strong>{title}</strong>
            <span>({days} dias)</span>
            <strong>R$ {price}</strong>
          </p>
          <Link href="/shop/overpower/vips">
            <button>Acessar</button>
          </Link>
          
          <button className="description" onClick={showDescription}>Detalhes</button>

          <div style={{
            borderTop: '2px solid rgba(0, 0, 0, 0.2)',
            display: descriptionState,
            marginTop: '1rem',
            padding: '1rem',
            transition: 'all 0.2s ease-in-out'
          }}>
            <strong>Detalhes</strong>
            <br />
            <span style={{
              textAlign: 'left'
            }}>Ao adquirir esse produto, você se tornará um {title} por {days} dias!</span>
          </div>
        </ChallengeNotActive>
    </Container>
  );
};
