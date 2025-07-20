// 로그인 UI
import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import GoogleLoginButton from './GoogleLoginButton';

export default function LoginForm({onLoginSuccess}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); //유효성 검사 추가하기

    const handleSubmit = (e)=>{
        e.preventDefault(); //새로고침 방지하고 현재 이메일비번 콘솔출력
        console.log('로그인 시도: ', {email, password});

        // 백엔드 연동 코드 추가
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('로그인 성공:', userCredential.user);
            // 로그인 성공 시 상태 업데이트나 페이지 이동 추가 가능
            onLoginSuccess(); //<<--상태업데이트페이지전환
        })
        .catch((error) => {
            setError('로그인 실패: ' + error.message);
        });  
    };

    return(
        <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">로그인하고 포트폴리오를 만들어보세요</h2>
            <p className="login-subtitle">지금까지 쌓은 경험을,<br />나만의 방식으로 정리할 수 있어요</p>

            <div className="input-group">
                <label htmlFor="email">이메일 주소</label>
                <input
                type="email"
                id="email"
                // placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="input-group">
                <label htmlFor="password">비밀번호</label>
                <input
                type="password"
                id="password"
                // placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
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


        /* 기존 코드 ->  */

            /* 이메일과 비밀번호 입력 폼 */
        //     <input type="email" placeholder="이메일" value={email}
        //     onChange={(e)=> setEmail(e.target.value)}
        //     required />
        //     {/* placeholder는 사용자에게 보여주는 회색 안내 문구임 */}
        //     {/* 인풋에 값이 입력되어야만 폼이 제출될 수 있도록 유효성 검사하는게 required */}
        //     <input type="password" placeholder="비밀번호" value={password}
        //     onChange={(e)=>setPassword(e.target.value)}
        //     required />

        //     {/* 에러 메시지 출력 */}
        //     {error && <p className="error-text">{error}</p>}

        //     <button type="submit">로그인</button>

        //     <GoogleLoginButton onLoginSuccess={onLoginSuccess} />

        // </form>
    );
}