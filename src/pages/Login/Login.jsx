import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userid, setUserId] = useState('');
  const [userpw, setUserPw] = useState('');
  const navigate = useNavigate();

  const saveUserId = event => {
    setUserId(event.target.value);
  };
  const saveUserPw = event => {
    setUserPw(event.target.value);
  };

  const goToPostList = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: '',
        password: '',
      }),
    }) //요청
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('login-token', data.accessToken);
        }
        console.log(data);
        navigate('/post-list');
      });

    // console.log(data)
  };
  console.log(userid, userpw);

  const isBtnActive = userid.includes('@') && userid.includes('.');

  return (
    <>
      <div className="login">
        <div className="imglogo">
          <img className="logo" src="/images/Logo.png" alt="로고이미지" />
          <img
            className="wecode"
            src="/images/logo_wecode.png"
            alt="위코드이미지"
          />
        </div>

        <div className="inputBox">
          <div className="inputGap">
            <input
              className="userInput"
              placeholder="이메일"
              name="input_id"
              onChange={saveUserId}
            />
            <input
              className="userInput"
              placeholder="비밀번호"
              name="input_pw"
              onChange={saveUserPw}
              disabled={!isBtnActive}
            />
            <button className="loginBtn" onClick={goToPostList}>
              로그인
            </button>
          </div>
        </div>
      </div>

      <div className="joinBar">
        <Link className="join" to="/join-info">
          회원가입
        </Link>
        <div className="bar">|</div>
        <div className="pwSearch">비밀번호찾기</div>
      </div>
    </>
  );
};

export default Login;
