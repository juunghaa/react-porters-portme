// 모달창 컴포넌트 기능 만들기 -> 활동 UI 구현하기 

import React, {useState} from 'react';
import './ActivityModal.css'; // 스타일 따로 분리해도 OK

export default function ActivityModal({ activity={}, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [isEditing, setIsEditing] = useState(!activity.title); // 새 활동일 경우 true

  const handleSubmit = () => {
    if (!title.trim() && !details.trim()) return;
    onSubmit({ title, details });
    setIsEditing(false); // 제출 후 편집 모드 해제
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">

        <h3>활동 입력</h3>
        {/* <input type="text" placeholder="활동 이름" />
        <textarea placeholder="활동 설명"></textarea> */}

        {isEditing ? (
            <>
            <input
            type="text"
            placeholder="활동 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder="활동 상세 설명"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            />
            <button onClick={()=> setIsEditing(true)}>편집</button>
            <button onClick={onClose}>닫기</button>
            <button onClick={handleSubmit}>저장</button>
            </>
        ) : (
            <>
              <h3>{title}</h3>
              <p>{details}</p>
              <div className="modal-buttons">
                <button onClick={() => setIsEditing(true)}>편집</button>
                <button onClick={onClose}>닫기</button>
              </div>
            </>
        )}
        

        <input
        type="text"
        placeholder="활동 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder="활동 상세 설명"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        />
        <button onClick={()=> setIsEditing(true)}>편집</button>
        <button onClick={onClose}>닫기</button>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
}
