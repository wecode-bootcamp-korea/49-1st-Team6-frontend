import React from 'react';
import './PostList.scss';

const PostList = () => {
  return (
    <div className="postList">
      <div className="container">
        <div className="post">
          <div className="top">
            <div className="left">
              <div className="profileImage">
                <img src="/images/Profile_thumb.png" alt="" />
              </div>
              <div className="nickname">
                <p>이름</p>
              </div>
            </div>
            <div className="right">
              <div className="date">
                <p>년.월.일</p>
              </div>
            </div>
          </div>

          <div className="contents">
            <p>
              일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
              사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
              믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
              ELIZA의 이름을 따서 명명되었다.
            </p>
          </div>

          <div className="comment">
            <span>댓글</span>
            <span>0</span>
          </div>
        </div>

        <div className="write">
          <form action="#">
            <button>글 쓰기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostList;
