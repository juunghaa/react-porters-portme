import React, {useState} from 'react';
import './ProfileSidebar.css';
import { FaUser, FaUsers, FaCog } from "react-icons/fa";

export default function ProfileSidebar() {
  return (
    <aside className="profile-sidebar">
        <div className="profile-photo">
            <p>프로필 사진</p>
        </div>
        <div className="profile-info">
            <p><strong>이름:</strong> 김아주</p>
            <ul>
                <li>자격증 정보들</li>
            </ul>
        </div>
        <div className="skills">
            <p><strong>Skills</strong></p>
            <div className="skill-tags">
            {["Notion", "Figma", "MySQL", "PowerPoint", "HTML/CSS", "Google Analytics 4"].map((skill, i) => (
            <span className="skill-tag" key={i}>{skill}</span>
            ))}
            </div>
        </div>

        <div className="profile-buttons">
            <button className="icon-button">
                <FaUser size={24} />
                <span>프로필 수정</span></button>
            <button className="icon-button">
                <FaUsers size={24} />
                <span>커뮤니티</span></button>
            <button className="icon-button">
                <FaCog size={24} />
                <span>설정</span></button>
    
        </div>

    </aside>
  );
}
