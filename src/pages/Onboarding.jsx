import React from 'react';
import './Onboarding.css'; // 스타일 파일 분리 시

export default function Onboarding({ onStart }) {
  return (
    <div className="onboarding-container">
      <div className="onboarding-box">
        <h1 className="onboarding-title">나만의 포트폴리오를 시작해볼까요?</h1>
        <p className="onboarding-description">
          지금까지 쌓아온 경험을 정리하고 <br />
          더 많은 사람에게 멋지게 보여줄 수 있어요.
        </p>
        <button className="onboarding-button" onClick={onStart}>
          시작하기
        </button>
      </div>
    </div>
  );
}
