// 작성된 활동 목록을 보여주는 리스트

import React, {useState} from 'react';

export default function ActivityList({ activities =[], details=[], onDelete, onView}) {
  if (!activities || activities.length === 0) {
    return <p>아직 추가된 활동이 없어요.</p>;
  }

  return (
    <ul className="activity-list">
      {activities.map((activity, index) => (
        <li key={index}>
        <span onClick={() => onView(activity, index)}>{activity.title} {activity.tag && `(${activity.tag})`}</span>
        <button onClick={() => onDelete(index)}>삭제</button>
        </li>
            
            // {activity.title}</li>
      ))}
    </ul>
  );
}

