import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  min-width: 300px;
  margin: 0 20vw;

  label {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Plus = styled.button`
  background-color: #fff;
  color: #00cdc9;
  font-size: 17px;
  border-radius: 50%;
  margin: 10px;
`;