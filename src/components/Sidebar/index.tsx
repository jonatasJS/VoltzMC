import Link from 'next/link';

import { FiHome as Home, FiHelpCircle as Help } from 'react-icons/fi';
import { AiOutlineShoppingCart as Cart } from 'react-icons/ai';
import { FaDiscord as Discord } from 'react-icons/fa';
import { RiTeamLine as Team, RiShoppingBasketLine as Shop } from 'react-icons/ri';

import { Container, LinkToHome } from './styles';

function Sidebar({ page }) {

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
          <Home size={32} className={(page == 'home') && page} title="Inicio" style={{ cursor: 'pointer' }}/>
        </Link> {/**
         * RiShoppingBasketLine
         */}
        <Link href="/shop">
          <Shop className={(page == 'shop') && page} title="Loja" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="/cart">
          <Cart className={(page == 'cart') && page} title="Carrinho" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="/team">
          <Team className={(page == 'team') && page} title="Equipe" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="https://discord.gg/AkH7PWR2Pm">
          <Discord className="discord" title="Discord" size={32} style={{ cursor: 'pointer' }}/>
        </Link>
        <Link href="/help">
          <Help className={(page == 'help') && page} title="Ajuda" size={32} style={{ cursor: 'pointer' }}/>
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
