import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Kakao = () => {
  const navigate = useNavigate();

  const REACT_APP_KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REACT_APP_KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const params = new URL(window.location.href).searchParams;
  const KAKAO_CODE = params.get('code');

  useEffect(() => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded;' },
      body: `grant_type=authorization_code&client_id=${REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.token);
          localStorage.setItem('oken', data.kakao_token);
          navigate('/');
        }
      });
  }, []);
};

export default Kakao;
