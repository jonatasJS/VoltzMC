import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

export default function HomeTemplate(req, res) {
  const router = useRouter();
  const { asPath } = router;

  return (
  <Container className="container">
    <Head>
      <title>Erro 404 | VoltzMC</title>
    </Head>

    <Sidebar key="" setSelected="" selected="" page="404" />
    <section>
      <h1>404</h1>
      {asPath ? <p>Rota <strong>'{ asPath }'</strong> não foi encontrada!</p> : <p>Página não encontrada!</p>}
      <p>Clique no ícone da página para voltar a <strong style={{ 
        fontWeight: "bold"
       }}>Home</strong></p>
    </section>
  </Container>
)}
