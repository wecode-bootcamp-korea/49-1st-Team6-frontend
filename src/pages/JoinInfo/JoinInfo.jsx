import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JoinInfo.scss';

const JoinInfo = () => {
  const [joinid, setJoinId] = useState('');
  const [joinpw, setJoinPw] = useState('');
  const [joinnickname, setNickName] = useState('');
  const [joinconfirm, setConfirm] = useState('');

  const handleClick = () => {
    fetch('http://127.0.1.1:8000/users/singUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: joinid,
        password: joinpw,
        nickname: joinnickname,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const saveJoinId = event => {
    setJoinId(event.target.value);
  };
  const saveJoinPw = event => {
    setJoinPw(event.target.value);
  };
  const saveConfirm = event => {
    setConfirm(event.target.value);
  };

  const saveNickName = event => {
    setNickName(event.target.value);
  };

  const isBtnActive =
    joinid.includes('@') && joinid.includes('.') && joinpw.length > 10;

  console.log(joinid, joinpw, joinconfirm, joinnickname);
  return (
    <div className="joinInfo">
      <Link className="back" to="/">
        <img src="/images/Back_arrow.jpg" alt="화살표" />
        뒤로
      </Link>
      <h1 className="join">회원가입</h1>
      <div className="basic">
        <div className="basicInfo">기본정보</div>
        <div className="essential">필수사항</div>
      </div>
      <div className="joinInfoBox">
        <div className="inputGap">
          <input
            className="userInput"
            placeholder="이메일"
            onChange={saveJoinId}
          />
          <input
            className="userInput"
            placeholder="비밀번호"
            onChange={saveJoinPw}
          />
          <input
            className="userInput"
            placeholder="비밀번호 확인"
            onChange={saveConfirm}
          />
        </div>
        <div className="userNickName">
          <div className="nickName">닉네임</div>
          <div className="choose">선택사항</div>
        </div>
        <input
          className="userInput"
          placeholder="닉네임"
          onChange={saveNickName}
        />

        <button
          className="loginBtn"
          disabled={!isBtnActive}
          onClick={handleClick}
        >
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default JoinInfo;
