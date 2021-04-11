import Head from "next/head";
import React from "react";
import Sidebar from "../../components/Sidebar";

import { Container } from '../../styles/team';

function Team() {
  return (
    <Container className="container">
      <Head>
        <title>Equipe | VoltzMC</title>
      </Head>

      <Sidebar page="team"/>

      <h1>Equipe</h1>
    </Container>
  )
}

export default Team;
