// 모달창 컴포넌트 기능 만들기 -> 활동 UI 구현하기 

import React, {useState, useEffect} from 'react';
import './ActivityModal.css'; // 스타일 따로 분리해도 OK

export default function ActivityModal({ activity={}, onClose, onSubmit }) {
  const [title, setTitle] = useState(activity.title || ''); // 초기값 설정
  const [details, setDetails] = useState('');
  const [tag, setTag] = useState(''); // 태그 상태 추가
//   const [isEditing, setIsEditing] = useState(!activity); // 새 활동일 경우 true
  const [isEditing, setIsEditing] = useState(false); // 새 활동일 경우 true
  
  //useEffect는 컴포넌트가 처음 렌더링될 때나 activity가 변경될 때마다 실행됨 
  //특정 값이 바뀔 떄만 실행 되도록 작성하였음 
  useEffect(() => {
      if(!activity || !activity.title) {
        setIsEditing(true); // 기존 활동을 편집하는 경우
      } else {
        setTitle(activity.title || '');
        setDetails(activity.details || '');
        setTag(activity.tag || '');
        setIsEditing(false); // 새 활동을 추가하는 경우
     }
    }, [activity]); // activity가 변경될 때마다 상태 업데이트

    const handleSubmit = () => {
      if (!title.trim() && !details.trim() && !tag.trim()) return;
      onSubmit({ title, details, tag }); // 필요한 활동 정보 모두 객체로 (부모로 전달)
    //   setIsEditing(false); // 제출 후 편집 모드 해제
      onClose();
    };

  return (
    <div className="modal">
      <div className="modal-content">

        <h3>활동 입력</h3>
        {isEditing ? (
            // 편집 모드일 때 입력 폼
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
            <input
                type="text"
                placeholder="태그 (예: 개발, 디자인)"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
            />
            {/* <button onClick={()=> setIsEditing(true)}>편집</button> */}
            <button onClick={onClose}>닫기</button>
            <button onClick={handleSubmit}>저장</button>
            </>
        ) : (
            // 보기 모드일 때 입력 폼 
            <>
              <h3>제목: {title}</h3>
              <p>세부사항: {details}</p>
              <p><strong>태그:</strong> {tag}</p>
              <div className="modal-buttons">
                <button onClick={() => setIsEditing(true)}>편집</button>
                <button onClick={onClose}>닫기</button>
              </div>
            </>
        )}
        
      </div>
    </div>
  );
}
