import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToInfo = () => {
    navigate('/join-info');
  };

  return (
    <div className="login">
     <div>로그인페이지</div>
    </div>
  );
};

export default Login;