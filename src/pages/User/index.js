import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthContext } from '../../Auth';
import { Card } from './Card';
import { Button, Conteiner } from './Card/style';
import moment from 'moment';

export const User = () => {
  const db = firebase.firestore();
  const { currentUser } = useContext(AuthContext);
  const [allTurn, setAllTurn] = useState([]);
  const [myTurn, setMyTurn] = useState([]);
  const [mainTurns, setMainTurns] = useState([]);
  const [main, setMain] = useState(false);
  const [active, setActive] = useState(true);

  const DateCollection = db.collection('Date');
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).valueOf();

  const getMyTurns = () => {
    DateCollection.get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          setMainTurns((current) => [...current, users.data()]);
          const planInfo = users.data().selected;
          Object.values(planInfo).map(async (value) => {
            await value.map((elements) => {
              if (elements === currentUser.displayName) {
                setAllTurn((current) => [...current, users.data()]);
              }
            });
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };

  const deleteDublicateAll = () => {
    const deletedDublicates = [
      ...new Map(allTurn.map((v) => [v.date, v])).values(),
    ];
    setMyTurn(deletedDublicates);
  };

  const deleteDublicateMain = () => {
    const deletedDublicates = [
      ...new Map(mainTurns.map((v) => [v.date, v])).values(),
    ];
    setMainTurns(deletedDublicates);
  };

  useEffect(() => {
    deleteDublicateAll();
    deleteDublicateMain();
  }, [allTurn]);

  useEffect(() => {
    getMyTurns();
  }, []);

  console.log(myTurn)

  return (
    <Conteiner>
      <div>
        <Button
          $active={active}
          onClick={() => {
            setMain(false);
            setActive(!active);
          }}
        >
          Мої списки
        </Button>
        <Button
          $active={!active}
          onClick={() => {
            setMain(true);
            setActive(!active);
          }}
        >
          Загальні списки
        </Button>
      </div>
      {main
        ? mainTurns.map((data, i) => {
            const isAfter = moment(data.date).isAfter(today, 'day');
            if (isAfter) {
              return <Card $data={data} $index={i} key={i} />;
            }
          })
        : myTurn.map((data, i) => {
            const isAfter = moment(data.date).isAfter(today, 'day');
            if (isAfter) {
              return <Card $data={data} $index={i} key={i} />;
            }
          })}
    </Conteiner>
  );
};
