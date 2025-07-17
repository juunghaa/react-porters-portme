import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(''); //유효성 검사 추가하기

    //async는 순차적 실행한다는 뜻이라고 봐도 됨
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log('회원가입 정보: ', {email, password, confirm})
        //Firebase 연동 코드 추가하기

        setError('');
        if (!email.includes('@')) {
            setError("유효한 이메일을 입력해주세요.");
            return;
        }
        if (password.length<6) {
            setError("비밀번호는 최소 6자 이상이어야 합니다.");
            return;
        }
        if (password!==confirm){
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("회원가입이 완료되었습니다!");
            // 회원가입 이후 처리 (ex: 로그인 상태 전환 등)
          } catch (err) {
            setError("회원가입에 실패했습니다. 다시 시도해주세요.");
            console.error(err);
          }
        };

    return(
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>회원가입</h2>
            <input type="email" placeholder="이메일" value={email}
            onChange={(e)=> setEmail(e.target.value)} required />
            <input type="password" placeholder="비밀번호" value={password}
            onChange={(e)=>setPassword(e.target.value)} required />
            <input type="password" placeholder="비밀번호 확인" value={confirm}
            onChange={(e)=>setConfirm(e.target.value)} required />
            
            {error && <p className="error-text">{error}</p>}
            
            <button type="submit">가입하기</button>
        </form>
    );
}

