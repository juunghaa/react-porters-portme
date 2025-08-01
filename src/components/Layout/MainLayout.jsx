import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header/Header.jsx';
import Sidebar from 'src/components/Sidebar/Sidebar.jsx';
import RightPanel from 'src/components/RightPanel/RightPanel.jsx';
import './MainLayout.css';

const MainLayout = () => ( //함수형 컴포넌트 선언
    <div className="layout-container">
        <Sidebar />
        <div className="main-content">
            <Header />
            <div className="content-area">
                <Outlet />  {/* 여기가 각각 다른 페이지가 보여지는 내용 삽입 */}
            </div>
        </div>
        <RightPanel />
    </div>
);

export default MainLayout;
