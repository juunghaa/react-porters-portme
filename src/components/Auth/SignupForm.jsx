import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(''); //유효성 검사 추가하기
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [signupError, setSignupError] = useState(''); // 회원가입 실패 메시지
    const [name, setName] = useState(''); // 이름 필드 추가
    const [nameError, setNameError] = useState('');
    const [agree, setAgree] = useState(false); // 약관 동의 필드 추가
    const [agreeError, setAgreeError] = useState('');
    const [agreeMarketing, setAgreeMarketing] = useState(false);
    const [submit, onSubmit] = useState('');
    
    //async는 순차적 실행한다는 뜻이라고 봐도 됨
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log('회원가입 정보: ', {email, password, confirm})
        //Firebase 연동 코드 추가하기

        setError('');
        setEmailError('');
        setPasswordError('');
        setConfirmError('');
        setNameError('');
        setAgreeError('');
        
        let valid = true;

        if (!email.includes('@')) {
            setEmailError('올바른 메일 형식으로 입력해주세요.');
            valid = false;
        }
        if (password.length<6) {
            setPasswordError('비밀번호는 최소 6자 이상이어야 합니다.');
            valid = false;
        }
        if (password!==confirm){
            setConfirmError('비밀번호가 일치하지 않습니다.');
            valid = false;
        }
        if (!name.trim()) {
            setNameError('이름을 입력해주세요.');
            valid = false;
        }
        if (!agree) {
            setAgreeError('개인정보 수집 및 이용에 동의해주세요.');
            valid = false;
        }
          
        if (!valid) return;

        onSubmit({ email, password, name });
    };

        
    return(
        <form onSubmit={handleSubmit} className="login-form">
            {/* {error && <div className="signup-alert">{error}</div>} */}
            <h2 className="login-title">나를 보여주는 포트폴리오, 지금부터 시작해볼까요?</h2>
            <p className="login-subtitle">당신의 경험을 더 많은 사람에게<br />정확하게, 멋지게 전달할 수 있어요</p>


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
            <div className="input-group">
                <label htmlFor="confirm">비밀번호 확인</label>
                <input
                type="password"
                id="confirm"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className={confirmError ? 'input-error' : ''}
                />
                {confirmError && <p className="error-text">{confirmError}</p>}  
            </div>

            <div className="input-group">
                <label htmlFor="name">이름</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={nameError ? 'input-error' : ''}
                />
                {nameError && <p className="error-text">{nameError}</p>}
            </div>

            <div className="input-group checkbox-tight">
                <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="checkbox-text">
                {' '}[필수] 개인정보 수집 및 이용 동의
                </span>
                </label>
                {agreeError && <p className="error-text">{agreeError}</p>}
            </div>
            <div className="input-group checkbox-tight">
                <label className="checkbox-label">
                    <input
                    type="checkbox"
                    checked={agreeMarketing}
                    onChange={(e) => setAgreeMarketing(e.target.checked)}
                    />
                    <span className="checkbox-text">
                    {' '}[선택] 포트폴리오 작성 팁과 채용 소식을 받아볼게요.<br />
                    (광고·마케팅 수신 동의)
                    </span>

                </label>
            </div>

            {signupError && <p className="error-text">{signupError}</p>}
            
            <button type="submit" className="submit-button-big">가입하기</button>

        </form>
    );
}

