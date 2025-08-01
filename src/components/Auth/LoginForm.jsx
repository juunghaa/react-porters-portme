// 로그인 UI

import React, {useState} from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('로그인 시도: ', {email, password});

        // 백엔드 연동 코드 추가
        //Firebase Auth
        //signInWithEmailAndPassword(email,password)
    };

    return(
        <form onSubmit={handleSubmit} className="login-form">
            <h2>로그인</h2>
            <input type="email" placeholder="이메일" value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required />
            {/* placeholder는 사용자에게 보여주는 회색 안내 문구임 */}
            {/* 인풋에 값이 입력되어야만 폼이 제출될 수 있도록 유효성 검사하는게 required */}
            <input type="password" placeholder="비밀번호" value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required />

            <button type="submit">로그인</button>
        </form>
    );
}