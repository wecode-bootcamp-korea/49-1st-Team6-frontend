import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './PostAdd.scss';
const PostAdd = () => {
  const [userprofile, setProfile] = useState('');
  const [userpost, setUserPost] = useState('');
  const navigate = useNavigate();
  const getUserInfo = () => {
    fetch('/data/mockData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('login-token'),
      },
      // body: JSON.stringify({}),
    }) //요청
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProfile(data);
      });
  };

  useEffect(() => {
    getUserInfo();
    return console.log(userprofile.nickname);
  }, []);

  const saveUserPost = event => {
    setUserPost(event.target.value);
  };

  const Active = userpost.length > 2;

  const userPost = () => {
    fetch('http://10.58.52.228:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: '토큰',
      },
      body: JSON.stringify({
        content: '유저가 작성 한 글',
      }),
    }) //요청
      .then(response => response.json())
      .then(result => console.log(result));
    navigate('/post-list');
  };

  return (
    <div className="post">
      <div className="postAdd">
        <img
          className="userprofile"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="프로필"
        />
        <div className="userWrapper">
          <div className="userNickName">{userprofile.nickname}</div>
          <textarea
            className="userPost"
            placeholder="스레드를 시작하세요."
            onChange={saveUserPost}
          />
        </div>
      </div>

      <div className="userBtn">
        <button className="userBtnc">취소</button>
        <button className="userBtnp" disabled={!Active} onClick={userPost}>
          게시
        </button>
      </div>
    </div>
  );
};
export default PostAdd;
