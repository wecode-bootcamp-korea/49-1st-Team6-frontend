import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import JoinDone from './pages/JoinDone/JoinDone';
import JoinInfo from './pages/JoinInfo/JoinInfo';
import PostAdd from './pages/PostAdd/PostAdd';
import PostDetail from './pages/PostDetail/PostDetail';
import PostEditing from './pages/PostEditing/PostEditing';
import PostList from './pages/PostList/PostList';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join-done" element={<JoinDone />} />
        <Route path="/join-info" element={<JoinInfo />} />
        <Route path="/post-add" element={<PostAdd />} />
        <Route path="/post-detail" element={<PostDetail />} />
        <Route path="/post-editing" element={<PostEditing />} />
        <Route path="/post-list" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;









