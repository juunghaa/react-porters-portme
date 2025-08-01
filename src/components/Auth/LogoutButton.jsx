import React from 'react';

export default function LogoutButton({onLogout}) {
    const handleClick =()=> {
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