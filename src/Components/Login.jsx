import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const goToSign = () => {
    navigate('/');
  };
  const REACT_APP_KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REACT_APP_KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const REACT_APP_KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = REACT_APP_KAKAO_AUTH_URL;
  };
  return (
    <Wrap>
      <Container>
        <Title>후 알 유</Title>
        <LoginForm>
          <LoginInfo placeholder="아이디" />
          <LoginInfo placeholder="비밀번호" />
          <LoginBtn>로그인</LoginBtn>
          <SocialLogin>
            <KakaoSignUpBtn
              src="/images/Login/kakao_login_medium_button.png"
              alt="kakao_login"
              onClick={kakaoLogin}
            />
          </SocialLogin>
          <FindInfo>
            <FindInfoText>아이디 찾기 </FindInfoText>|
            <FindInfoText> 비밀번호 찾기</FindInfoText>
          </FindInfo>
          <LocalSignUp>
            <LocalSignUpBtn onClick={goToSign}>회원가입</LocalSignUpBtn>
          </LocalSignUp>
          <SocialSignUp />
        </LoginForm>
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 820px;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  height: 50%;
  padding: 40px 30px 40px 30px;
  border: 2px solid #f5fafa;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Title = styled.div`
  color: #f5fafa;
  text-align: center;
  font-size: 3vw;
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

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoSignUpBtn = styled.img`
  height: 35px;
  margin-top: 8px;
  margin-right: 10px;
  cursor: pointer;
`;

const FindInfo = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 8px;
  color: white;
  font-size: 1vw;
`;

const FindInfoText = styled.span`
  cursor: pointer;
  transition: color 0.2s ease 0s;
  &:hover {
    color: #4e8df5;
  }
`;

const LocalSignUp = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 900;
  color: black;
`;

const LocalSignUpBtn = styled.span`
  cursor: pointer;
  border-bottom: 1px solid black;
`;

const SocialSignUp = styled.div`
  display: flex;
`;

export default Login;
