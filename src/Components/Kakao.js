import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CLIENT_ID, REDIRECT_URI } from './\bOAtu';

const Kakao = () => {
  const navigate = useNavigate();

  const params = new URL(window.location.href).searchParams;
  const KAKAO_CODE = params.get('code');

  useEffect(() => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded;' },
      body: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === '로그인 성공하였습니다.') {
          localStorage.setItem('Token', data.token);
          localStorage.setItem('KaKaoToken', data.kakao_token);
          navigate('/');
        }
      });
  }, []);
};

export default Kakao;
