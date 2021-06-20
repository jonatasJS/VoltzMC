import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  Container,
  ChallengeNotActive,
} from './styles';

export default function ChallengeBox() {

  return (
    <motion.div animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} >
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
    </motion.div>
  );
};

export function VipBox() {

  return (
    <motion.div animate={{
      scale: 1,
    }} whileHover={{ scale: 1.1 }} >
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
    </motion.div>
  );
};

export function CashBox() {

  return (
    <motion.div animate={{
      scale: 1,
    }} whileHover={{ scale: 1.1 }} >
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
    </motion.div>
  );
};


export function ItemVip({ src, price, title, days }) {
  const [descriptionState, setDescriptionState] = useState('none');

  function showDescription() {
    if (descriptionState == 'grid') setDescriptionState('none');
    else if (descriptionState == 'none') setDescriptionState('grid');
  }

  return (
    <motion.div animate={{
      scale: 1,
    }} whileHover={{ scale: 1.1 }} >
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
            <strong>R$ {
              price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            }</strong>
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
    </motion.div>
  );
};

export function ItemCash({ src, price, amount, bonus }) {
  const [descriptionState, setDescriptionState] = useState('none');

  function showDescription() {
    if (descriptionState == 'grid') setDescriptionState('none');
    else if (descriptionState == 'none') setDescriptionState('grid');
  }

  return (
    <motion.div animate={{
      scale: 1,
    }} whileHover={{ scale: 1.1 }} >
      <Container>
        <ChallengeNotActive>
          {/* <strong>NOVIDADES!!</strong> */}
          <p>
            <img
              src={src}
              style={{
                width: 187.625,
                height: 182
              }}
              alt="Cash"
            />
            <strong style={{
              textAlign: 'center',
              fontSize: '1.4rem',
              margin: '0rem -1rem 0.5rem -1rem'
            }}>{
                new Intl.NumberFormat('pt-BR')
                  .format(amount)
              } Cash
            </strong>
            {bonus !== '' ? <span style={{ marginBottom: '0.5rem' }}>(+{new Intl.NumberFormat('pt-BR').format(bonus)})</span> : ''}
            <strong>R$ {
              price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            }</strong>
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
            <strong style={{ fontSize: '2rem' }}>Detalhes</strong>
            <br />
            <span style={{
              textAlign: 'left',
              marginTop: '0.5rem'
            }}>Ao adquirir esse produto, você receberá {new Intl.NumberFormat('pt-BR').format(amount)} cash in-game para gastar no /shop!</span>
          </div>
        </ChallengeNotActive>
      </Container>
    </motion.div>
  );
};


// new Intl.NumberFormat('pt-PT').format(numero)