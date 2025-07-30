import React, { useState } from 'react';
import ActivityEditor from '../components/Editor/ActivityEditor';
import './ActivityEditorPage.css'; // 스타일 파일 분리 시
import ActivityList from '../components/Editor/ActivityList';

export default function ActivityEditorPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activities, setActivities] = useState([]);
    const [details, setDetails] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleAddActivity = (newActivity) => {
        setActivities(prev => [...prev, newActivity]); // 상태 업데이트
        setIsModalOpen(false); // 모달 닫기
      };      
    const handleDeleteActivity = (indexToDelete) => {
        setActivities(prev => prev.filter((_, index) => index !== indexToDelete));
      };
    const handleViewActivity = (activity) => {
        setSelectedActivity(activity);
      };
    const handleCloseDetail = () => {
        setSelectedActivity(null);
      };   
      
    return (
        <div className="activity-editor-page">
        <h1>활동 에디터 페이지 화면 구성중~!!</h1>
        <ActivityList activities={activities} details={details} 
        onDelete={handleDeleteActivity}
        onView={handleViewActivity}
        />

        <button onClick={() => setIsModalOpen(true)}>활동 추가</button>
        {isModalOpen && !selectedActivity && (
        <ActivityEditor
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddActivity}  // ← 추가
        />
        )}
        {selectedActivity && (
        <ActivityEditor
            activity={selectedActivity}
            onClose={handleCloseDetail}
            onSubmit={handleAddActivity} // 수정 시에도 사용
        />
        )}

        </div>
    );
}