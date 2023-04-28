import styled from 'styled-components';

const purpleGradient =
  'background: linear-gradient( 120deg , #4C00C2 60%, #3B058E 40%)';
const greenGradient =
  'background: linear-gradient( 120deg , #00cdc9 60%, #02b7b3 40%)';

export const Wrap = styled.div`
  width: fit-content;
  border-radius: 20px;
  ${({ $index }) => ($index % 2 === 0 ? purpleGradient : greenGradient)};
  ${({ $index }) => ($index % 2 === 0 ? 'color: #fff' : 'color: #000')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;

export const Date = styled.h2`
  font-size: 14px;
  padding: 0 40px;
  @media screen and (max-width: 380px) {
    font-size: 12px;
    padding: 0 30px;
  }
`;

export const TableDiv = styled.div`
  overflow: scroll;
  width: 100vw;
`;

export const MainConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Table = styled.table`
  width: fit-content;
  overflow: scroll;
  border: 1px solid #000;
  border-spacing: 0;
  border-collapse: collapse;
  td {
    min-width: 80px;
    :first-child {
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
    }
    :not(:first-child) {
      border: 1px solid #000;
    }
  }
  @media screen and (max-width: 700px) {
    font-size: 11px;
  }
  @media screen and (max-width: 380px) {
    font-size: 10px;
  }
`;

export const Table2 = styled(Table)`
  margin-top: 10px;
`;

export const Tr = styled.tr``;

export const Button = styled.button`
  ${({ $active }) =>
    $active
      ? 'background: linear-gradient( 120deg , #4C00C2 60%, #3B058E 40%)'
      : 'background: #fff'};
  ${({ $active }) => ($active ? 'color: #fff;' : 'color: #000;')};
  padding: 5px 20px;
  border-radius: 20px;
  margin: 0 10px;
  @media screen and (max-width: 380px) {
    margin: 0 5px;
    font-size: 11px;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
