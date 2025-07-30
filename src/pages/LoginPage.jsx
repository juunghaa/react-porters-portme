// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
import { login } from '../api';

export default function LoginPage({ onLoginSuccess }) {
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (email, password) => {
    // 백엔드 연동 코드 추가
    try {
        const res = await login(email, password);
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        onLoginSuccess();
        } catch (err) {
        console.error(err);
        if (
            err.message.includes('No active account') || 
            err.message.includes('Unable to log in')
          ) {
            setLoginError('이메일 또는 비밀번호가 올바르지 않아요');
          } else {
            setLoginError('로그인 중 오류가 발생했습니다');
          }
        }
    };
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     console.log('로그인 성공:', userCredential.user);
    //     // 로그인 성공 시 상태 업데이트나 페이지 이동 추가 가능
    //     onLoginSuccess(); //<<--상태업데이트페이지전환
    // })
    // .catch((error) => {
    //     // setError('로그인 실패: ' + error.message);
    //     console.log(error.code); // 코드 예: "auth/user-not-found", "auth/wrong-password"
    //     if (
    //         error.code === "auth/user-not-found" ||
    //         error.code === "auth/wrong-password"
    //     ) {
    //         setLoginError("이메일 또는 비밀번호가 올바르지 않아요");
    //     } else {
    //         setLoginError("로그인 중 오류가 발생했습니다");
    //     }
    // });   
    // };

  return (
    <LoginForm onSubmit={handleLogin} loginError={loginError} />
  );
}




