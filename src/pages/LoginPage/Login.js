import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../base.js';
import { AuthContext } from '../../Auth.js';
import { Button, Form, Input, Title, Wrap } from './style.js';
import { StyledLink } from '../SignUpPage/style.js';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <Wrap>
      <Title>Увійти</Title>
      <Form onSubmit={handleLogin}>
        <Input name='email' type='email' placeholder='Email' />
        <Input name='password' type='password' placeholder='Пароль' />
        <Button type='submit'>Увійти</Button>
      </Form>
      <StyledLink to='/signup'>Зареєструватись</StyledLink>
    </Wrap>
  );
};

export default withRouter(Login);
