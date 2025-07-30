// // 전체 뼈대 (버튼 목록 모달 열기 등의 기능 정리)

import React, { useState } from 'react';
import ActivityModal from './ActivityModal';


export default function ActivityEditor({ onClose, onSubmit }) {
    // const [title, setTitle] = useState(activity?.title || '');
    // const [details, setDetails] = useState('');
  
    // const handleSubmit = () => {
    //   if (!title.trim() || !details.trim()) return;
    //   onSubmit({ title, details}); // 필요한 활동 정보 모두 객체로 (부모로 전달)
    // };
    // const handleDetails =()=>{
    //     if (!details.trim()) return;
    //     onSubmit({ details }); // 필요한 활동 정보 모두 객체로 (부모로 전달)
    // }
  
    return (
      <ActivityModal onClose={onClose} onSubmit={onSubmit} />

    );
  }
  