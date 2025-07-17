import React, {useState} from 'react';
import LoginForm from './components/Auth/LoginForm';
import LogoutButton from './components/Auth/LogoutButton';
import SignupForm from './components/Auth/SignupForm';
import MainPage from './components/Main/MainPage';
import FeatureButtons from './components/Main/FeatureButtons';
import ProgressTracker from './components/Main/ProgressTracker';
import RecentSlides from './components/Main/RecentSlides';
import './App.css';

// 나중에 로그인 이후 로그인폼 감추고 메인만 보이도록 정리하거나.. 페이지 관리 필요 

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
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/login" element={<LoginForm />} />
    //     <Route path="/signup" element={<SignupForm />} />

    //   </Routes>
    //   </Router>  


    // 하나의 페이지 안에서 보여줄 화면을 바꾸는 방식...
      <main>
        <MainPage />

      {isLoggedIn ? (
        <>
        <h2>환영합니다앙</h2>
        <LogoutButton onLogout={handleLogout}/>
        <MainPage />
        </>) : (
        <LoginForm onLoginSuccess={handleLoginSuccess}/>
        )
      }
    </main>
    
    
  );
}