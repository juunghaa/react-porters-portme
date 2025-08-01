import React, { useState } from "react";
import {
    Home,
    Grid3X3,
    Circle,
    Edit3,
    MessageSquare,
    Folder,
    User
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('home'); // 현재 활성화된 메뉴

    const menuItems = [

        { id: 'home', icon: Home, label: '홈' },
        { id: 'dashboard', icon: Grid3X3, label: '대시보드' },
        { id: 'projects', icon: Circle, label: '프로젝트' },
        { id: 'edit', icon: Edit3, label: '편집' },
        { id: 'messages', icon: MessageSquare, label: '메시지' },
        { id: 'files', icon: Folder, label: '파일' },
        { id: 'profile', icon: User, label: '프로필' }
    ];

    return (
        <div className="sidebar">

            <div className="sidebar-logo">
                <h3>로고</h3>
            </div>

            <div className="sidebar-menu">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <button
                            key={item.id}
                            className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
                            onClick={() => setActiveItem(item.id)}
                            title={item.label}
                        >
                            <IconComponent size={20}/>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;