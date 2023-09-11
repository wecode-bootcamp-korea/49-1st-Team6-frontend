import React from 'react';
import './PostAdd.scss';
const PostAdd = () => {
  return (
    <div className="postAdd">
      <img
        className="userprofile"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="프로필"
      />
      <div className="userWrapper">
        <div className="userNickName">name</div>
        <textarea className="userPost" placeholder="스레드를 시작하세요." />
      </div>
    </div>
    <div></div>


  );
};
export default PostAdd;
