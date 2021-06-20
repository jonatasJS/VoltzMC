import { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { FiHome as Home, FiHelpCircle as Help } from 'react-icons/fi';
import { AiOutlineShoppingCart as Cart } from 'react-icons/ai';
import { FaDiscord as Discord } from 'react-icons/fa';
import { RiTeamLine as Team, RiShoppingBasketLine as Shop } from 'react-icons/ri';

import LinkNewPage from '../utils/LinkNewPage';

import { Container, LinkToHome } from './styles';


function Sidebar({ page, setSelected, selected }) {
  const path = Router;
  
  useEffect(() => {
    const route = path.asPath.replace('/overpower/vips', '').replace('/dark/vips', '').replace('/pvp/vips', '').replace('/geral/vips', '').replace('/', '');
    
    console.log(route);

    setSelected(path.asPath == '/' ? 'home' : route);
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
          <Home size={32} className={(selected == 'home') && selected} onClick={() => setSelected('home')} title="Inicio" style={{ cursor: 'pointer' }}/>
        </Link> {/**
         * RiShoppingBasketLine
         */}
        <Link href="/shop">
          <Shop className={(selected == 'shop') && selected} onClick={() => setSelected('shop')} title="Loja" size={32} style={{ cursor: 'pointer' }}/>
        </Link>

        <Link href="/cart">
          <Cart className={(selected == 'cart') && selected} onClick={() => setSelected('cart')} title="Carrinho" size={32} style={{ cursor: 'pointer' }}/>
        </Link>

        <Link href="/team">
          <Team className={(selected == 'team') && selected} onClick={() => setSelected('team')} title="Equipe" size={32} style={{ cursor: 'pointer' }}/>
        </Link>

        <LinkNewPage link="https://discord.gg/AkH7PWR2Pm">
          <Discord className="discord" title="Discord" size={32} style={{ cursor: 'pointer' }}/>
        </LinkNewPage>

        <Link href="/help">
          <Help className={(selected == 'help') && selected} onClick={() => setSelected('help')} title="Ajuda" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
      </nav>
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
