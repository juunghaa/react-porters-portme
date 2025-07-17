// GoogleLoginButton.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

export default function GoogleLoginButton({ onLoginSuccess }) {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('구글 로그인 성공:', result.user);
      onLoginSuccess();  // 로그인 성공시 상태 업데이트
    } catch (error) {
      console.error('구글 로그인 실패:', error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="google-login-button">
      Google로 로그인
    </button>
  );
}
