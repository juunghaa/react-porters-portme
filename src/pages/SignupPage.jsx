import React, { useState } from 'react';
import SignupForm from '../components/Auth/SignupForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
import { register } from '../api';

export default function SignupPage({ onRegisterSuccess }) {
  const [signupError, setSignupError] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  
  const handleRegister = async (e) => {
    e.preventDefault();
    setSignupError('');
  
    if (password1 !== password2) {
        setSignupError('비밀번호가 일치하지 않아요.');
        return;
    }
  
    try {
        const res = await register(email, password1, password2);
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        onRegisterSuccess(); // 회원가입 성공 후 이동
    } catch (err) {
        setSignupError(err.message);
    }
};
  
    return (
      <SignupForm onSubmit={handleRegister} signupError={signupError} />
    //<SignupForm onSuccess={() => navigate('/welcome')} /> 나중에 페이지 이동
    );
  }
  
//   const handleSignup = async ({ email, password, name }) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert('회원가입이 완료되었습니다!');
//         // 회원가입 이후 처리 (ex: 로그인 상태 전환 등)
//       onLoginSuccess(); // 로그인 상태 전환
//     } catch (err) {
//       console.error(err);
//       setSignupError('회원가입에 실패했습니다. 다시 시도해주세요.');
//     }
//   };

//   return (
//     <SignupForm onSubmit={handleSignup} signupError={signupError} />
//   );
//}
