
import React from 'react';
import { useSession } from 'next-auth/client';


import { Container } from './style';

export default function UserInfo() {
  const [ session, loading ] = useSession();
  // const UserImage = new Image();

  if(session && session.user.image.length >= 1) {
    console.log(session.user.image.length)
    return (
      <Container>
        <img src={session ? session.user.image.replace('.png', '.gif') : '/icons/user.svg'} title={session ? session.user.name : ''} alt={session ? session.user.name : ''} />
      </Container>
    )
  } else {
    return (
      <Container>
        <img src={session ? session.user.image : '/icons/user.svg'} title={session ? session.user.name : ''} alt={session ? session.user.name : ''} />
      </Container>
    )
  }
}









// mais tarde: Rose Aventura