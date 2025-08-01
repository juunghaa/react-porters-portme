// src/components/Main/MainPage.jsx
import React from 'react';
import FeatureButtons from './FeatureButtons';
//import ProgressTracker from './ProgressTracker';
//import RecentSlides from './RecentSlides';
import ProfileSidebar from './ProfileSidebar';
import PortfolioSection from './PortfolioSection';
import ActivitySection from './ActivitySection';
import './MainPage.css';
import SideMenubar from './SideMenubar'; // 추가

export default function MainPage() {
  return (
    <div className="main-container">
        <SideMenubar /> {/* 왼쪽 사이드바 */}

        <div className="main-content">
            <PortfolioSection className="portfolio-section"/>

            <ActivitySection className="activity-section"/>
        </div>

        <div className="sidebar">
            <ProfileSidebar />
        </div>

      {/* <FeatureButtons /> */}

      {/* <ProgressTracker />

      <RecentSlides /> */}
    </div>
  );
}

//메인화면에는.. 프로필이랑 My Portfolio랑 My Activity 넣어야댐 