/*import React, {useState} from 'react';
import LoginForm from './components/Auth/LoginForm';
import LogoutButton from './components/Auth/LogoutButton';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess=()=>{
    setIsLoggedIn(true);
  };
  const handleLogout=()=>{
    setIsLoggedIn(false);
    console.log("로그아웃 되었습니다.");
  };

  return (
    <main>
      {isLoggedIn ? (
        <>
        <h2>환영합니다앙</h2>
        <LogoutButton onLogout={handleLogout}/>
        </>) : (
        <LoginForm onLoginSuccess={handleLoginSuccess}/>
        )
      }
    </main>
  );
}*/

// App.jsx (일단 로그인 띄고 메인페이지만 보아게 수정)
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RightPanel from './components/RightPanel/RightPanel';


function App() {
    return (
        <div className="App">
            {/* 사이드바, 메인 영역  배치 */}
            <div style={{display: 'flex', minHeight: '100vh'}}>
                {/* 왼쪽 사이드바 */}
                <Sidebar/>

                {/* 가운데 메인 영역 */}
                <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <Header/>
                    <div style={{padding: '20px', backgroundColor: '#f9fafb', flex: 1}}>
                        <h1>Header와 Sidebar를 테스트 중이다</h1>
                        <p>바쁘다 바빠</p>
                        <p>왼쪽 사이드바를 만들었어용</p>
                    </div>
                </div>

                {/* 오른쪽 패널 */}
                <RightPanel/>
            </div>
        </div>
    );
}

export default App;