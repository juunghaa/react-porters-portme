import React, { useState } from "react";
import { Bell, Search } from "lucide-react";
import "./Header.css";

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    /*showSearch라는 변수 만들어서 초기 상태는 false로. 검색창 먼저 보여주지 x, 버튼 눌렀을때만 ㄱ*/

    const toggleSearch = () => {
        setShowSearch((prev) => !prev); /*검색창이 안보이면 보이게, 보이면 안보이게 전환 용도*/
    };

    return (
        <header className="header">
            <div className="header-left">
                ooo님
            </div>

            <div className="header-right">
                {/* 검색창 */}
                <div className={`search-container ${showSearch ? 'visible' : 'hidden'}`}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        autoFocus={showSearch}
                    />
                </div>

                {/* 돋보기 버튼 */}
                <button onClick={toggleSearch} className="icon-button">
                    <Search />
                </button>

                {/* 벨 버튼 */}
                <button aria-label="Notifications" className="icon-button">
                    <Bell />
                </button>
            </div>
        </header>
    );

};

export default Header;
