import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth';
import app from '../../base';
import { LogOut } from '../LoginPage/style';
import { Planning } from '../Planning';
import { StyledLink } from '../SignUpPage/style';
import { User } from '../User';
import { Title } from './style';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  const admin = process.env.REACT_APP_ADMIN_NAME;

  useEffect(() => {
    if(currentUser.displayName == admin) {
      setIsAdmin(true);
    }
  }, [])

  return (
    <>
      {isAdmin && <StyledLink to='create-plan'>Створити список</StyledLink>}
      <Title>{currentUser.displayName}</Title>
      <LogOut onClick={() => app.auth().signOut()}>Вийти</LogOut>
      <User />
    </>
  );
};

export default Home;
