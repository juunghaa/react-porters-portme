// GoogleLoginButton.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { googleLogin } from '../../api';

export default function GoogleLoginButton({ onLoginSuccess }) {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      const credential = provider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      if(!accessToken) {
        throw new Error('Google access token이 없습니다.');
      }

      const res = await googleLogin(accessToken);
      localStorage.setItem('access', res.access);
      localStorage.setItem('refresh', res.refresh);
      console.log('구글 로그인 성공:', result.user);
      onLoginSuccess();  // 로그인 성공시 상태 업데이트
    } catch (error) {
      console.error('구글 로그인 실패:', error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="google-login-button">
      <img src="/google-icon.svg" alt="Google logo image" width="20" height="20" />
      Google로 로그인
    </button>
  );
}
