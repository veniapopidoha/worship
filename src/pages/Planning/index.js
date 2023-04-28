import { Button } from '../LoginPage/style';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { CenterDiv, Form, Plus, Wrap } from './style';
import { DatePicker, Space, Select } from 'antd';
import { Input } from '../SignUpPage/style';

export const Planning = () => {
  const db = firebase.firestore();
  const [drums, setDrums] = useState([]);
  const [acustic, setAcustic] = useState([]);
  const [electric, setElectric] = useState([]);
  const [leader, setLeader] = useState([]);
  const [bass, setBass] = useState([]);
  const [piano, setPiano] = useState([]);
  const [vocalAlt, setVocalAlt] = useState([]);
  const [vocalBoys, setVocalBoys] = useState([]);
  const [vocalSoprano, setVocalSoprano] = useState([]);
  const [selected, setSelected] = useState({
    drum: [],
    acustic: [],
    electric: [],
    leader: [],
    bass: [],
    piano: [],
    vocalAlt: [],
    vocalBoys: [],
    vocalSoprano: [],
  });
  const [date, setDate] = useState();
  const [doc, setDoc] = useState();
  const [counter, setCounter] = useState(0);

  var AllUsers = db.collection('allUsers');

  var DateCollection = db.collection('Date');

  DateCollection.get().then((doc) => {
    setDoc(doc.size.toString());
  });

  const getPeople = () => {
    AllUsers.where('acustic', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setDrums((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('bass', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setBass((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('acustic', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setAcustic((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('electric', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setElectric((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('piano', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setPiano((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('vocalSoprano', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setVocalSoprano((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('vocalAlt', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setVocalAlt((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('vocalBoys', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setVocalBoys((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
    AllUsers.where('leader', '==', true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((users) => {
          var usersRef = db.collection('allUsers').doc(`${users.id}`);
          usersRef.get().then((doc) => {
            setLeader((current) => [...current, doc.data().name]);
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };

  const createPlan = async (event) => {
    event.preventDefault();
    const array = [];

    await Array.from(Array(counter)).map(async (c, index) => {
      const name = 'input' + index;
      const value = document.getElementsByName(name)[0].value;
      array.push(value);
    });

    try {
      await db.collection('Date').doc(doc).set({
        date: date,
        selected: selected,
        songs: array,
      });

      alert('Success!');
      window.location.replace('/');
    } catch (error) {
      alert(error);
    }
  };

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  useEffect(() => {
    getPeople();
  }, []);
  return (
    <Wrap>
      <Form onSubmit={createPlan} id='form'>
        <Space direction='vertical' size={12}>
          <DatePicker
            showTime
            onChange={(value, formated) => {
              setDate(formated);
            }}
          />
        </Space>
        <label>
          Барабани
          <Select
            required
            mode='multiple'
            name='drumsSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, drum: value })}
          >
            {drums.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Бас
          <Select
            required
            mode='multiple'
            name='bassSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, bass: value })}
          >
            {bass.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Акустика
          <Select
            mode='multiple'
            name='acusticSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, acustic: value })}
          >
            {acustic.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Електро Гітара
          <Select
            mode='multiple'
            name='electricSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, electric: value })}
          >
            {electric.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Клавіші
          <Select
            mode='multiple'
            name='pianoSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, piano: value })}
          >
            {piano.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Вокал Сопрано
          <Select
            mode='multiple'
            name='vocalSopranoSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) =>
              setSelected({ ...selected, vocalSoprano: value })
            }
          >
            {vocalSoprano.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Вокал Альт
          <Select
            mode='multiple'
            name='drumsSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, vocalAlt: value })}
          >
            {vocalAlt.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Вокал Хлопці
          <Select
            mode='multiple'
            name='drumsSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, vocalBoys: value })}
          >
            {vocalBoys.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <label>
          Ведучий
          <Select
            mode='multiple'
            name='drumsSelect'
            placeholder='Please select'
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setSelected({ ...selected, leader: value })}
          >
            {leader.map((name, i) => {
              return (
                <Select.Option key={i} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </label>
        <CenterDiv className='App'>
          <h1>Пісні</h1>
          <Plus type='button' onClick={handleClick}>
            +
          </Plus>

          {Array.from(Array(counter)).map((c, index) => {
            return (
              <Input key={index} type='text' name={`input${index}`}></Input>
            );
          })}
        </CenterDiv>

        <Button type='submit'>Створити</Button>
      </Form>
    </Wrap>
  );
};
