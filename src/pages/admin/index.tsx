import React from 'react';
import { useSession } from 'next-auth/client';
import LoginInterface from '../../components/LoginInterface';

export default function Admin() {
  const [ session, loading ] = useSession();
  
  return (
    <div>
      {loading ? <h1>Carregando...</h1> : <div>{session ? <h1>Vc `e um ADM!! Que legal :)</h1> : <LoginInterface />}</div>}
    </div>
  );
;}