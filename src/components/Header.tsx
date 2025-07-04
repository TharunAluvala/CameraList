/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Brand_Logo from '../Icons/Brand_Logo';
import Search_Icon from '../Icons/Search_Icon';

const Header = ({ searchTerm, setSearchTerm }: any) => (
    <div className="header-container">
    <div className="logo-container">
      <Brand_Logo />
    </div>
    <div className="header-content">
      <div className="header-top">
        <div>
          <h1 className="header-title">Cameras</h1>
          <p className="header-subtitle">Manage your cameras here.</p>
        </div>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="search-icon">
            <Search_Icon />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  

export default Header;