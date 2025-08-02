import React, { useState } from 'react';
import ActivityEditor from '../components/Editor/ActivityEditor';
import ActivityList from '../components/Editor/ActivityList';
import './ActivityEditorPage.css'; // 스타일 파일 분리 시
import DetailBox from '../components/Editor/DetailBox'; // 상세 정보 박스 컴포넌트

export default function ActivityEditorPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activities, setActivities] = useState([]);
    const [details, setDetails] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(undefined);
    const [filterTag, setFilterTag] = useState(null);
    const [editIndex, setEditIndex] = useState(null); //어떤 활동을 수정중인지 기억해야함...

    const handleAddActivity = (newActivity) => {
        if(editIndex !== null) {
            // 수정 모드인 경우
            setActivities(prev => {
                const updated = [...prev];
                updated[editIndex] = newActivity;
                return updated; });
            setEditIndex(null); // 수정 모드 해제
            setSelectedActivity(null);
        } else {
            // 추가 모드인 경우
            setActivities(prev => [...prev, newActivity]);
        }
        setIsModalOpen(false); // 모달 닫기
      };      
    const handleDeleteActivity = (indexToDelete) => {
        setActivities(prev => prev.filter((_, index) => index !== indexToDelete));
      };
    const handleViewActivity = (activity, index) => {
        setSelectedActivity(activity);
        setEditIndex(index);
      };
    const handleCloseDetail = () => {
        setIsModalOpen(false);
        setSelectedActivity(null);
        setEditIndex(null);
      };   
      
    return (
        <div className="activity-editor-page">
        <h1>활동 추가하기</h1>
        <h5>포트폴리오에 들어갈 자신의 활동을 작성해보세요.</h5>
        <DetailBox />

        <ActivityList activities={activities} details={details} 
        onDelete={handleDeleteActivity}
        onView={handleViewActivity}
        />

        <button onClick={() => setIsModalOpen(true)}>활동 추가</button>

        {(isModalOpen || selectedActivity) && (
        <ActivityEditor
            activity={selectedActivity || {}}
            onClose={handleCloseDetail}
            onSubmit={handleAddActivity} // 수정 시에도 사용
            />
        )}

        <div className="tag-filter">
            {['a', 'b', 'c'].map(tag => (
                <button key={tag} onClick={() => setFilterTag(tag)}>
                    {tag}
                </button>
            ))}
            <button onClick={() => setFilterTag(null)}>모두 보기</button>
        </div>

            <ActivityList
                activities={filterTag ? activities.filter(a => a.tag === filterTag) : activities}
                onDelete={handleDeleteActivity}
                onView={handleViewActivity}
                />
        </div>
    );
}

//일부러 app.jsx 메인페이지 안에 활동에디터 페이지 넣어서 로컬로 확인하면서 개발중입니당