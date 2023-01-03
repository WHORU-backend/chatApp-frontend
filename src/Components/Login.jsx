import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import NaverLogin from './NaverLogin';
import { naverLoginAPI, localLoginAPI, localSignUpAPI } from '../Api/Api';

const Login = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeLoginInfo = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onChangeSignUpInfo = e => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const onLogin = () => {
    console.log(loginData);
    localLoginAPI(loginData).then(res => {
      console.log(res);
    });
  };

  const onSignUp = () => {
    localSignUpAPI(signUpData).then(res => {
      console.log(res);
    });
  };

  return (
    <Wrap>
      <Container>
        <Title>후 알 유</Title>
        <LoginForm>
          <LoginInfo
            placeholder="아이디"
            name="email"
            onChange={onChangeLoginInfo}
          />
          <LoginInfo
            placeholder="비밀번호"
            type="password"
            name="password"
            onChange={onChangeLoginInfo}
          />
          <LoginBtn onClick={onLogin}>로그인</LoginBtn>
          <SocialSignUp>
            <NaverLogin />
            <div>dsad</div>
          </SocialSignUp>
          {/* <FindInfo>
            <FindInfoText>아이디 찾기 </FindInfoText>|
            <FindInfoText> 비밀번호 찾기</FindInfoText>
          </FindInfo> */}
          <LocalSignUp>
            <LocalSignUpBtn
              onClick={() => {
                setModalOpen(prev => !prev);
              }}
            >
              회원가입
            </LocalSignUpBtn>
            <Modal
              isOpen={ModalOpen}
              onRequestClose={() => setModalOpen(false)}
              style={ModalStyle}
              ariaHideApp={false}
            >
              <ModalTitle>회원가입</ModalTitle>
              <ModalInfoLabel>이름</ModalInfoLabel>
              <ModalInfo name="name" onChange={onChangeSignUpInfo} />
              <ModalInfoLabel>아이디</ModalInfoLabel>
              <ModalInfo name="email" onChange={onChangeSignUpInfo} />
              <ModalInfoLabel>비밀번호</ModalInfoLabel>
              <ModalInfo
                type="password"
                name="password"
                onChange={onChangeSignUpInfo}
              />
              <ModalSignUpBtn onClick={onSignUp}>회원 가입</ModalSignUpBtn>
            </Modal>
          </LocalSignUp>
        </LoginForm>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-width: 488px;
  padding: 40px 0px 40px 0px;
  border: 2px solid #f5fafa;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Title = styled.div`
  color: #f5fafa;
  text-align: center;
  font-size: 25px;
`;

const LoginForm = styled.div`
  width: 100%;
  text-align: center;
`;

const LoginInfo = styled.input`
  width: 70%;
  height: 48px;
  margin-top: 8px;
  padding: 0 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 15px;
`;

const LoginBtn = styled.button`
  width: 70%;
  height: 48px;
  margin-top: 8px;
  border: none;
  background-color: #4e8df5;
  color: white;
  cursor: pointer;
`;

const FindInfo = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 8px;
  color: white;
  font-size: 0.5vw;
`;

const FindInfoText = styled.span`
  cursor: pointer;
  &:hover {
    color: blue;
    opacity: 0.5;
  }
`;

const LocalSignUp = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 900;
  color: black;
`;

const LocalSignUpBtn = styled.span`
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const SocialSignUp = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
`;

const ModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    zIndex: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: 'white',
    overflow: 'auto',
    top: '28%',
    margin: '0 auto',
    width: '400px',
    height: '430px',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    borderRadius: '10px',
    zIndex: 10,
  },
};

const ModalTitle = styled.div`
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
`;

const ModalInfo = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  padding: 0 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 15px;
`;

const ModalInfoLabel = styled.label`
  margin-top: 20px;
  font-weight: 700;
`;

const ModalSignUpBtn = styled.button`
  width: 90%;
  height: 48px;
  margin: 0 auto;
  margin-top: 40px;
  border: none;
  background-color: #4e8df5;
  color: white;
  cursor: pointer;
`;

export default Login;
