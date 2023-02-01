import { Fragment, useEffect, useState } from 'react';

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const { naver } = window;
  const NAVER_CLIENT_ID = 'UcF0uFjl81TtBmCgi8Jo'; // 발급 받은 Client ID 입력
  const NAVER_CALLBACK_URL = 'http://localhost:3000/users/naver/info'; // 작성했던 Callback URL 입력

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'white', type: 3, height: 37 },
      callbackHandle: true,
    });
    naverLogin.init();
    console.log(naverLogin.user);
    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        // 아래처럼 선택하여 추출이 가능하고,
        const userid = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
        // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
        // setUserInfo(naverLogin.user);
      }
    });
    // 요기!
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    // console.log, alert 창을 통해 토큰이 잘 추출 되는지 확인하자!
    localStorage.setItem('abc', token);
    setGetToken(token);
  };

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  return (
    <>
      <div id="naverIdLogin"></div>
    </>
  );
};

export default NaverLogin;
