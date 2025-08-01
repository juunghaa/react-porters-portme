import React from "react";
import { MoreHorizontal } from "lucide-react";
import "./RightPanel.css";

const RightPanel = () => {
    // 임시
    const userData = {
        name: "김포트",
        role: "Product Owner",
        avatar: "https://via.placeholder.com/80x80/6366f1/ffffff?text=김포트"
    };

    // 통계 데이터
    const stats = [
        { icon: "👋", count: 8, label: "나의 활동" },
        { icon: "🎯", count: 2, label: "포트폴리오" },
        { icon: "📄", count: 3, label: "지원 이력" }
    ];

    // 작업 팁 리스트
    const workTips = [
        {
            id: 1,
            category: "포트폴리오 팁",
            title: "포트폴리오는 첫인상이 중요해요",
            description: "처음 3초 안에 당신의 전문성을 보여줄 수 있는 대표 작업을 선택해야 해요.",
            bgColor: "#f0f9ff"
        },
        {
            id: 2,
            category: "활동 정리 팁",
            title: "숫자로 성과를 표현하세요",
            description: "구체적인 지표와 결과를 포함하면 더욱 임팩트 있게 어필할 수 있어요",
            bgColor: "#f0f4ff"
        },
        {
            id: 3,
            category: "작성 팁",
            title: "스토리텔링의 힘",
            description: "단순한 나열보다는 문제-해결-결과의 구조로 경험을 정리해보세요.",
            bgColor: "#fdf4ff"
        }
    ];

    // 인기글 리스트
    const popularPosts = [
        {
            id: 1,
            title: "어쩌구",
            company: "김OO",
            tag: "금융 플랫폼 PO"
        },
        {
            id: 2,
            title: "어쩌구",
            company: "유OO",
            tag: "모바일 앱 기획자"
        },
        {
            id: 3,
            title: "샬라샬라",
            company: "오OO",
            tag: "서비스 기획자"
        }
    ];

    return (
        <div className="right-panel">
            {/* 프로필 섹션 */}
            <div className="profile-section">
                <div className="profile-avatar">
                    <img src={userData.avatar} alt="프로필" />
                </div>
                <h3 className="profile-name">{userData.name}</h3>
                <p className="profile-role">{userData.role}</p>

                {/* 통계 */}
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <span className="stat-icon">{stat.icon}</span>
                            <span className="stat-count">{stat.count}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 작업 팁 부분 */}
            <div className="section">
                <div className="section-header">
                    <h4>작업 팁</h4>
                    <button className="more-button">
                        <MoreHorizontal size={16} />
                    </button>
                </div>

                <div className="tips-container">
                    {workTips.map((tip) => (
                        <div
                            key={tip.id}
                            className="tip-card"
                            style={{ backgroundColor: tip.bgColor }}
                        >
                            <div className="tip-category">{tip.category}</div>
                            <h5 className="tip-title">{tip.title}</h5>
                            <p className="tip-description">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 인기글 부분 */}
            <div className="section">
                <h4 className="section-title">인기있는 글</h4>

                <div className="posts-container">
                    {popularPosts.map((post) => (
                        <div key={post.id} className="post-item">
                            <h6 className="post-title">{post.title}</h6>
                            <div className="post-meta">
                                <span className="post-company">{post.company}</span>
                                <span className="post-tag">{post.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightPanel;