import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import { loginUser } from '../redux/action/user';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      user: {
        email: 'team15@team.com',
        password: '123123',
      },
    };
    dispatch(loginUser(dataToSubmit)).then((response) => {
      if (response.payload) {
        if (response.payload.user) {
          // window.localStorage.setItem('token', response.payload~~~~)
          console.log('login1', response.payload);
          navigate('/');
        } else {
          console.log('login2', response.payload);
        }
      } else {
        alert('연결 오류');
      }
    });
  };

  return (
    <div>
      <PageTitle title="Login" />
      <div>Login</div>
      <form onSubmit={onSubmit}>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
