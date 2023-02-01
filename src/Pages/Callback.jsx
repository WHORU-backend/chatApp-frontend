import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    console.log(token);
    axios
      .post(
        'http://172.20.10.2:8000/users/naver/info',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => console.log(res));
    localStorage.setItem('abc', token);
  };

  useEffect(() => {
    userAccessToken();
  }, []);

  return <div>하위위</div>;
};

export default Callback;
