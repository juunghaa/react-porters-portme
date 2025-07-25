// pages/LoginPage.jsx를 만들어서 로그인 페이지(디자인)를 관리해야 하는데
//제가 재사용 UI 로그인 폼 자체(component)에 페이지 디자인을 넣어버려서..
//나중에 component와 page를 나눠야할 듯 합니다..
//우선 급한건 아닌 것 같아서 냅뒀어요!!

// 로그인 UI
import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import GoogleLoginButton from './GoogleLoginButton';

export default function LoginForm({onLoginSuccess}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); //유효성 검사 추가하기
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault(); //새로고침 방지하고 현재 이메일비번 콘솔출력
        setLoginError("이메일 또는 비밀번호가 올바르지 않아요"); //로그인 실패 테스트용 코드

        console.log('로그인 시도: ', {email, password});

        let valid = true;

        // 에러 초기화
        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('이메일을 입력해주세요.');
            valid = false;
        } else if (!email.includes('@')) {
            setEmailError('올바른 메일 형식으로 입력해주세요.');
            valid = false;
        }

        if (!password) {
            setPasswordError('비밀번호를 입력해주세요.');
            valid = false;
        }

        if (!valid) return;

        // 백엔드 연동 코드 추가
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('로그인 성공:', userCredential.user);
            // 로그인 성공 시 상태 업데이트나 페이지 이동 추가 가능
            onLoginSuccess(); //<<--상태업데이트페이지전환
        })
        .catch((error) => {
            // setError('로그인 실패: ' + error.message);
            console.log(error.code); // 코드 예: "auth/user-not-found", "auth/wrong-password"
            if (
                error.code === "auth/user-not-found" ||
                error.code === "auth/wrong-password"
              ) {
                setLoginError("이메일 또는 비밀번호가 올바르지 않아요");
              } else {
                setLoginError("로그인 중 오류가 발생했습니다");
              }
        });   
    };

    return(
        <form onSubmit={handleSubmit} className="login-form">
            {loginError && (
            <div className="login-alert">
                ⚠️ {loginError}
            </div>
            )}
            
            <h2 className="login-title">로그인하고 포트폴리오를 만들어보세요</h2>
            <p className="login-subtitle">지금까지 쌓은 경험을,<br />나만의 방식으로 정리할 수 있어요</p>

            <div className="input-group">
                <label htmlFor="email">이메일 주소</label>
                <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? 'input-error' : ''}
                />
                {emailError && <p className="error-text">{emailError}</p>}

            </div>

            <div className="input-group">
                <label htmlFor="password">비밀번호</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={passwordError ? 'input-error' : ''}
                />
                {passwordError && <p className="error-text">{passwordError}</p>}

            </div>

            {error && <p className="error-text">{error}</p>}

            <div className="login-options">
                <a href="#">회원가입 | 비밀번호 찾기</a>
                <button type="submit" className="submit-button">로그인</button>
            </div>

            <div className="divider">또는</div>

  <GoogleLoginButton onLoginSuccess={onLoginSuccess} />
  {/* <NaverLoginButton /> 여기에 추가하면 돼 */}
</form>

    );
}