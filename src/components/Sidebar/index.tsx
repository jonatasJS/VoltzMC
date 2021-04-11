import { useContext } from 'react';
import Link from 'next/link';

import { FiHome as Home, FiHelpCircle as Help } from 'react-icons/fi';
import { HiOutlineLightBulb as Light } from 'react-icons/hi';
import { AiOutlineShoppingCart as Cart } from 'react-icons/ai';
import { FaDiscord as Discord } from 'react-icons/fa';
import { RiTeamLine as Team, RiShoppingBasketLine as Shop } from 'react-icons/ri';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, LightSwitch, LinkToHome } from './styles';

function Sidebar({ page }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const mode = `Modo ${theme}`;

  return (
    <Container>
      <LinkToHome style={{
        margin: '1.5rem'
      }}>
        <Link href="/">
          <img src="favicon.png" alt="VoltzMC" />
        </Link>
      </LinkToHome>
      <nav>
        <Link href="/">
          <Home size={32} className={(page == 'home') && page} title="Inicio" style={{ cursor: 'pointer' }}/>
        </Link> {/**
         * RiShoppingBasketLine
         */}
        <Link href="/shop">
          <Shop color="CCD6F6" className={(page == 'shop') && page} title="Loja" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="/cart">
          <Cart color="CCD6F6" className={(page == 'cart') && page} title="Carrinho" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="/team">
          <Team color="CCD6F6" className={(page == 'team') && page} title="Equipe" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="/#">
          <Discord className="discord" color="CCD6F6" title="Discord" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="/help">
          <Help color="CCD6F6" className={(page == 'help') && page} title="Ajuda" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <LightSwitch activeTheme={theme}>
          <Light title={mode} onClick={toggleTheme} size={32} />
        </LightSwitch>
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
