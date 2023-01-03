import React from 'react';
import Login from '../Components/Login';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
`;

export default LoginPage;
