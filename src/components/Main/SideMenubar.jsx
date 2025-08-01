import React, { useState } from 'react';
import './SideMenubar.css';
import { FaHome, FaClipboardList, FaProjectDiagram, FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function SideMenubar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`sidebar-container ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="sidebar-logo">P</div>

      <div className="sidebar-item">
        <FaHome />
        {isExpanded && <span>홈</span>}
      </div>
      <div className="sidebar-item">
        <FaClipboardList />
        {isExpanded && <span>대시보드</span>}
      </div>
      <div className="sidebar-item">
        <FaProjectDiagram />
        {isExpanded && <span>프로젝트 정리</span>}
      </div>
      <div className="sidebar-item">
        <FaUser />
        {isExpanded && <span>전문가 피드백</span>}
      </div>
      <div className="sidebar-item">
        <FaSignOutAlt />
        {isExpanded && <span>로그아웃</span>}
      </div>
    </div>
  );
}
