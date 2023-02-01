import React, { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

const KakaoCallBack = () => {
  //   const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get('code');
  const grant_type = 'authorization_code';
  const client_id = `${process.env.REACT_APP_KAKAO_CLIENT_ID}`;
  const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const tokenInfo = qs.stringify({
    grant_type: 'authorization_code',
    client_id: client_id,
    redirect_uri: REDIRECT_URI,
    code: code,
  });
  const getToken = async () => {
    try {
      await axios
        .post(
          'https://kauth.kakao.com/oauth/token',
          {
            grant_type: 'authorization_code',
            client_id: client_id,
            redirect_uri: REDIRECT_URI,
            code: code,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          }
        )
        .then(res => console.log(res));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (code) {
      console.log(code);
      getToken();
    }
    // const params = new URL(document.location.toString()).searchParams;
    // const KAKAO_CODE = params.get('code');
    // axios
    //   .post(
    //     `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    //     {},
    //     {
    //       headers: {
    //         'Content-type': 'application/x-www-form-urlencoded',
    //       },
    //     }
    //   )
    //   .then(res => {
    //     console(res);
    //   });
  }, [code]);
  return <div>dsf</div>;
};

export default KakaoCallBack;
