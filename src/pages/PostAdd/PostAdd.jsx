import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './PostAdd.scss';
const PostAdd = () => {
  const [userProfile, setUserProfile] = useState({});
  const [userPost, setUserPost] = useState('');
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
        setUserProfile(data);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const saveUserPost = event => {
    setUserPost(event.target.value);
  };

  const isHandlePost = userPost.length > 2;

  const sendUserPost = () => {
    fetch('http://10.58.52.228:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        content: userPost,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => {
        if (data.message === 'userCreated') {
          navigate('/post-list');
        } else {
          alert('다시 시도해주세요');
        }
      });
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
          <div className="userNickName">{userProfile.nickname}</div>
          <textarea
            className="userPost"
            placeholder="스레드를 시작하세요."
            onChange={saveUserPost}
          />
        </div>
      </div>

      <div className="userBtn">
        <button className="userBtnc">취소</button>
        <button
          className="userBtnp"
          disabled={!isHandlePost}
          onClick={sendUserPost}
        >
          게시
        </button>
      </div>
    </div>
  );
};
export default PostAdd;
