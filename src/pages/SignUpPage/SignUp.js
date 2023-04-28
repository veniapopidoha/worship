import firebase from 'firebase';
import 'firebase/firestore';
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../../base';
import {
  Button,
  CheckboxConteiner,
  Form,
  Input,
  StyledLink,
  Title,
  Wrap,
} from './style';

const SignUp = ({ history }) => {
  const db = firebase.firestore();

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        email,
        password,
        name,
        drums,
        bass,
        acustic,
        electric,
        piano,
        vocalSoprano,
        vocalAlt,
        vocalBoys,
        leader,
        phone,
      } = event.target.elements;
      try {
        await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        
        db.collection('allUsers').doc(app.auth().currentUser.uid).set({
          name: name.value,
          phone: phone.value,
          drums: drums.checked,
          bass: bass.checked,
          acustic: acustic.checked,
          electric: electric.checked,
          piano: piano.checked,
          vocalSoprano: vocalSoprano.checked,
          vocalAlt: vocalAlt.checked,
          vocalBoys: vocalBoys.checked,
          leader: leader.checked,
        });
        history.push('/');
      } catch (error) {
        alert(error);
      }
      if (app.auth().currentUser != null) {
        app.auth().currentUser.updateProfile({
          displayName: name.value,
        });
      }
    },
    [history]
  );

  return (
    <Wrap>
      <Title>Зареєструватись</Title>
      <Form onSubmit={handleSignUp}>
        <Input name='email' type='email' placeholder='Email' />
        <Input name='phone' type='tel' placeholder='Номер телефону' />
        <Input name='name' type='text' placeholder='Прізвище Ім`я' />
        <Input name='password' type='password' placeholder='Пароль' />
        <CheckboxConteiner>
          <label>
            Барабани
            <input type='checkbox' name='drums'/>
          </label>
          <label>
            Бас
            <input type='checkbox' name='bass' />
          </label>
          <label>
            Акустика
            <input type='checkbox' name='acustic' />
          </label>
          <label>
            Електро Гітара
            <input type='checkbox' name='electric' />
          </label>
          <label>
            Клавіші
            <input type='checkbox' name='piano' />
          </label>
          <label>
            Вокал Сопрано
            <input type='checkbox' name='vocalSoprano' />
          </label>
          <label>
            Вокал Альт
            <input type='checkbox' name='vocalAlt' />
          </label>
          <label>
            Вокал Хлопці
            <input type='checkbox' name='vocalBoys' />
          </label>
          <label>
            Ведучий
            <input type='checkbox' name='leader' />
          </label>
        </CheckboxConteiner>
        <Button type='submit'>Зареєструватись</Button>
      </Form>
      <StyledLink to='/login'>Увійти</StyledLink>
    </Wrap>
  );
};

export default withRouter(SignUp);
