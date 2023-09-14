import React from 'react';
import './List.scss';

const List = ({ list }) => {
  const { profileImage, nickname, createAt, content, comment } = list;

  return (
    <div className="container">
      <div className="post">
        <div className="top">
          <div className="left">
            <div className="profileImage">
              <img src={profileImage} alt="" />
            </div>
            <div className="nickname">
              <p>{nickname}</p>
            </div>
          </div>
          <div className="right">
            <div className="date">
              <p>{createAt}</p>
            </div>
          </div>
        </div>

        <div className="contents">
          <p>{content}</p>
        </div>

        <div className="comment">
          <span>댓글</span>
          <span>{comment}</span>
        </div>
      </div>
    </div>
  );
};

export default List;
