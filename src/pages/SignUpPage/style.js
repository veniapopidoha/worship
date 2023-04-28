import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const StyledLink = styled(Link)`
  color: #000;
  font-size: 14px;
`;

export const CheckboxConteiner = styled.div`
  display: flex;
  width: 90%;
  max-width: 500px;
  flex-direction: row;
  flex-wrap: wrap;
  label {
    border: 1px solid #000;
    margin: 5px;
    padding: 2px;
  }
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
  background: linear-gradient(120deg, #4c00c2 60%, #3b058e 40%);
  border: none;
  color: #fff;
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
