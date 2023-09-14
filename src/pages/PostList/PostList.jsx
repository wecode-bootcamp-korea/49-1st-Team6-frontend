import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../../components/List/List.jsx';
import './PostList.scss';
// import '/data/data.json';

const PostList = () => {
  const [threadList, setThreadList] = useState([]);

  useEffect(() => {
    fetch('/data/Data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setThreadList(data);
      });
  }, []);

  const navigate = useNavigate();

  const goToEditing = () => {
    navigate('/post-editing');
  };

  return (
    <div className="postList">
      {threadList.map(thread => {
        return <List key={threadList.postId} list={thread} />;
      })}
      <div className="write">
        <button onClick={goToEditing}>글 쓰기</button>
      </div>
    </div>
  );
};

export default PostList;
