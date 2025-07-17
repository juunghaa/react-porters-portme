import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function LogoutButton({onLogout}) {
    const handleClick =()=> {
        signOut(auth).then(()=>{
            console.log("로그아웃 성공");
            onLogout();
        }).catch((error)=>{
            alert("로그아웃 실패: "+error.message);
        })
        if (typeof onLogout === 'function') {
            onLogout();
        }
    };

    return (
        <button onClick={handleClick} className="logout-button">
            로그아웃
        </button>
    );
}