import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Input = styled.input`
  border-radius: 30px;
  width: 90%;
  max-width: 500px;
  outline: none;
  border: none;
  background-color: #d3d8e1;
  padding: 10px 7px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: linear-gradient(120deg, #00cdc9 60%, #02b7b3 40%);
  border: none;
  color: #000;
  padding: 10px 30px;
  border-radius: 30px;
  width: 70%;
  margin-bottom: 10px;
  max-width: 300px;
`;

export const LogOut = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 5px !important;
  width: 70px;
  border-radius: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1``;
