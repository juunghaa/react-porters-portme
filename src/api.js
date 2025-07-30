
const BASE_URL = process.env.REACT_APP_API_URL;

// 로그인
export const login = async (email, password) => {
  const res = await fetch(`${BASE_URL}/api/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail || '로그인 실패');
  }

  // 토큰 및 사용자 정보 반환
  return data; // { access, refresh, user }
};

// 내 프로필 조회
export const getMyProfile = async (token) => {
  const res = await fetch(`${BASE_URL}/api/profiles/me/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return await res.json();
};

// 회원가입 
export const register = async (email, password1, password2) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/registration/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: email,
      password1,
      password2,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    // 백엔드에서 에러 메시지들이 객체로 올 수 있어서 예쁘게 정리
    const errorMessages = Object.values(data)
      .flat()
      .join(' ');
    throw new Error(errorMessages || '회원가입 실패');
  }
  return data; // { access, refresh, user }
};

// 구글 로그인 - 소셜 로그인 
export const googleLogin = async (access_token) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/google/implicit/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ access_token }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Google 로그인 실패');
  }
  return await res.data; // access, refresh, user
};
