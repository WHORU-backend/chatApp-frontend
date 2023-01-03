import { Fragment, useEffect } from 'react';

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const { naver } = window;
  const NAVER_CLIENT_ID = 'UcF0uFjl81TtBmCgi8Jo'; // 발급 받은 Client ID 입력
  const NAVER_CALLBACK_URL = 'http://localhost:3000/users/naver/info'; // 작성했던 Callback URL 입력

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: true,
      loginButton: { color: 'white', type: 3, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();
    // console.log(naverLogin);
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    // console.log, alert 창을 통해 토큰이 잘 추출 되는지 확인하자!
    alert(token);

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
