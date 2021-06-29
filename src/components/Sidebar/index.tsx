import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { FiHome as Home, FiHelpCircle as Help } from 'react-icons/fi';
import { AiOutlineShoppingCart as Cart } from 'react-icons/ai';
import { FaDiscord as Discord } from 'react-icons/fa';
import { RiTeamLine as Team, RiShoppingBasketLine as Shop } from 'react-icons/ri';

import LinkNewPage from '../utils/LinkNewPage';
import UserInfo from '../UserInfo';

import { Container, LinkToHome } from './styles';


function Sidebar({ page, setSelected, selected }) {
  const [ selectedPage, setSelectedPage ] = useState('none');
  const path = Router;
  
  useEffect(() => {
    const route = path.asPath.replace('/overpower/vips', '').replace('/dark/vips', '').replace('/pvp/vips', '').replace('/geral/vips', '').replace('/', '');
    
    console.log(route);

    setSelectedPage(path.asPath == '/' ? 'home' : route);
  }, []);

  return (
    <Container>
      <LinkToHome style={{
        margin: '1.5rem'
      }}>
        <Link href="/">
          <img src="/favicon.png" alt="VoltzMC" />
        </Link>
      </LinkToHome>
      <nav>
        <Link href="/">
          <Home size={32} className={(selectedPage == 'home') && selectedPage} onClick={() => setSelectedPage('home')} title="Inicio" style={{ cursor: 'pointer' }}/>
        </Link> {/**
         * RiShoppingBasketLine
         */}
        <Link href="/shop">
          <Shop className={(selectedPage == 'shop') && selectedPage} onClick={() => setSelectedPage('shop')} title="Loja" size={32} style={{ cursor: 'pointer' }}/>
        </Link>

        <Link href="/cart">
          <Cart className={(selectedPage == 'cart') && selectedPage} onClick={() => setSelectedPage('cart')} title="Carrinho" size={32} style={{ cursor: 'pointer' }}/>
        </Link>

        <Link href="/team">
          <Team className={(selectedPage == 'team') && selectedPage} onClick={() => setSelectedPage('team')} title="Equipe" size={32} style={{ cursor: 'pointer' }}/>
        </Link>

        <LinkNewPage link="https://discord.gg/AkH7PWR2Pm">
          <Discord className="discord" title="Discord" size={32} style={{ cursor: 'pointer' }}/>
        </LinkNewPage>

        <Link href="/help">
          <Help className={(selectedPage == 'help') && selected} onClick={() => setSelectedPage('help')} title="Ajuda" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
      </nav>
      <UserInfo />
    </Container>
  );
};

export default Sidebar;

/* 
util.status('jogar.voltzmc.com.br')
  .then((response) => {
    const data = {
      host: response.host,
      version: 'Minecraft Java 1.8.x-1.16.x',
      onlinePlayers: response.onlinePlayers,
      maxPlayers: response.maxPlayers,
      description: response.description.descriptionText,
      favicon: response.favicon,
    }

    return data.favicon;
  })
  .catch((err) => {
    console.error(err);
  })
*/
