import axios from 'axios';

const url = 'http://127.0.0.1:8000';

//이메일 회원가입
export const localSignUpAPI = data => {
  return axios.post(
    url + '/users/signup',
    { ...data },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

//이메일 로그인
export const localLoginAPI = data => {
  return axios.post(
    url + '/users/signin',
    { ...data },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

//네이버 로그인
export const naverLoginAPI = data => {
  return axios.get(url + '/users/naver');
};
