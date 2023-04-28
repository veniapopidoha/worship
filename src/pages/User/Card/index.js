import moment from 'moment';
import React, { useState } from 'react';
import {
  Date,
  MainConteiner,
  Table,
  Table2,
  TableDiv,
  Tr,
  Wrap,
} from './style';

export const Card = (props) => {
  const [visible, setVisible] = useState(false);
  const data = props.$data;

  const transformDate = moment(data.date, 'YYYY-MM-DD').format('LL');

  return (
    <MainConteiner>
      <Wrap
        $index={props.$index}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <Date>{transformDate}</Date>
      </Wrap>
      {visible && (
        <>
          <TableDiv>
            <Table>
              <tbody>
                <Tr>
                  <td>Drums</td>
                  {data.selected.drum.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Bass</td>
                  {data.selected.bass.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Acoustic</td>
                  {data.selected.acustic.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Electric</td>
                  {data.selected.electric.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Piano</td>
                  {data.selected.piano.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Сопрано</td>
                  {data.selected.vocalSoprano.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Альт</td>
                  {data.selected.vocalAlt.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Вокал Хлопці</td>
                  {data.selected.vocalBoys.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
                <Tr>
                  <td>Ведучий</td>
                  {data.selected.leader.map((name) => {
                    return <td>{name}</td>;
                  })}
                </Tr>
              </tbody>
            </Table>
          </TableDiv>
          <Table2>
            <tbody>
              {data.songs.map((name) => {
                return <tr>{name}</tr>;
              })}
            </tbody>
          </Table2>
        </>
      )}
    </MainConteiner>
  );
};
