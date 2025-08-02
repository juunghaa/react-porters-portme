// 왼쪽 디테일 박스 -> 사진 추가, 첨부파일, 태그 기능!!

import React, {useState} from 'react';
import './DetailBox.css';

export default function DetailBox({ onAddImage, onAddFile, onAddTag }) {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [allTags, setAllTags] = useState(['서비스 기획', '프로젝트 관리', '디자인', '기획', '프론트엔드']);
  const [tagInput, setTagInput] = useState('');
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...fileURLs]);
    onAddImage?.(files); // 기존 props 함수 호출
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles]);
    onAddFile?.(newFiles); // 여러 개 파일 전달
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setTagInput(value);
  
    // 검색된 태그 필터링
    if (value.trim()) {
      const filtered = allTags.filter(tag => tag.includes(value));
      setFilteredTags(filtered);
    } else {
      setFilteredTags([]);
    }
  };
  
  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
    setTagInput(tag); // input에 표시
    setFilteredTags([]);
    onAddTag?.(tag); // 선택된 태그 props로 전달
  };
  

  return (
    <div className="detail-box">
      <h2>사진 추가</h2>
      <div className="image-preview-container">
        {images.map((src, i) => (
          <div key={i} className="image-box">
            <img src={src} alt={`preview-${i}`} />
          </div>
        ))}
        <label htmlFor="image-upload" className="image-box add-box">+</label>
      </div>

      <h2>첨부파일</h2>
      <input 
        type="file" 
        accept="image/*" 
        multiple 
        style={{ display: 'none' }} 
        id="image-upload" 
        onChange={handleImageChange}
      />

      <div className="file-section">
        <input 
          type="file" 
          id="file-upload" 
          style={{ display: 'none' }} 
          multiple
          onChange={handleFileChange} 
        />
        <label htmlFor="file-upload" className="file-upload-box">파일 선택</label>
        <div className="file-list">
          {files.map((file, i) => {
            const fileURL = URL.createObjectURL(file);
            return (
              <p key={i} className="file-name">
                <a
                  href={fileURL}
                  download={file.name}
                  className="file-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.name}
                </a>
              </p>
            );
          })}
        </div>
      </div>

      <h2>태그</h2>
      <div className="tag-input">
        <input
          type="text"
          value={tagInput}
          onChange={handleInputChange}
          placeholder="태그 검색"
        />

        {filteredTags.length > 0 && (
          <ul className="tag-suggestions">
            {filteredTags.map((tag, i) => (
              <li key={i} onClick={() => handleSelectTag(tag)}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

        {selectedTag && (
          <div className="selected-tag">
          <span className="tag">{selectedTag}</span>
          </div>
        )}

    </div>
  );
}