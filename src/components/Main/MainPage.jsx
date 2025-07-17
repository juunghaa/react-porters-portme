// src/components/Main/MainPage.jsx
import React from 'react';
import FeatureButtons from './FeatureButtons';
//import ProgressTracker from './ProgressTracker';
//import RecentSlides from './RecentSlides';
import ProfileSidebar from './ProfileSidebar';
import PortfolioSection from './PortfolioSection';
import ActivitySection from './ActivitySection';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-container">
        <div className="sidebar">
            <ProfileSidebar />
        </div>

        <div className="main-content">
            <PortfolioSection className="portfolio-section"/>

            <ActivitySection className="activity-section"/>
        </div>

      {/* <FeatureButtons /> */}

      {/* <ProgressTracker />

      <RecentSlides /> */}
    </div>
  );
}

//메인화면에는.. 프로필이랑 My Portfolio랑 My Activity 넣어야댐 