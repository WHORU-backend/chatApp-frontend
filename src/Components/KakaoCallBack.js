import useEffect from 'react';
import axios from 'axios';

const KakaoCallBack = () => {
  //   const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const KAKAO_CODE = params.get('code');

    const grant_type = 'authorization_code';
    const client_id = `${process.env.REACT_APP_KAKAO_CLIENT_ID}`;
    const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        {},
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then(res => {
        console(res);
      });
  }, []);
};

export default KakaoCallBack;

//   useEffect(() => {
//     fetch(`https://kauth.kakao.com/oauth/token`, {
//       method: 'POST',
//       //      headers: { 'Content-type': 'application/x-www-form-urlencoded;' },
//       headers: `grant_type=authorization_code&client_id=${REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.message === 'SUCCESS') {
//           localStorage.setItem('token', data.token);
//           localStorage.setItem('oken', data.kakao_token);
//           navigate('/');
//         }
//       });
//   }, []);
