// // 전체 뼈대 (버튼 목록 모달 열기 등의 기능 정리)

import React, { useState } from 'react';
import ActivityModal from './ActivityModal';


export default function ActivityEditor({ activity, onClose, onSubmit }) {
    
    return (
      <ActivityModal activity={activity} onClose={onClose} onSubmit={onSubmit} />
    );
  }
  