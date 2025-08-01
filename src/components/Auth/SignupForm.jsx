// 로그인 UI 만들기

import React, {useState} from 'react';

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('회원가입 정보: ', {email, password, confirm})
        //Firebase 연동하게되면 여기 코드 추가하기
    };

    return(
        <form onSubmit = {handleSubmit}>
            <h2>회원가입</h2>
            <input type="email" placeholder="이메일" value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="비밀번호" value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" placeholder="비밀번호 확인" value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}/>
            <button type="submit">가입하기</button>
        </form>
    );
}

