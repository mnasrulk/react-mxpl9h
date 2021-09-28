import React from 'react';
import { NavLink } from 'react-router-dom';

const CollectionNav = () => {
  return (
    <div className="cNavWrapper">
      <nav className="cNav">
        <ul className="cNavList">
          <li>
            <NavLink to="/collection/playlist" activeStyle={activeStyle}>
              Playlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/collection/artist" activeStyle={activeStyle}>
              Artist
            </NavLink>
          </li>
          <li>
            <NavLink to="/collection/album" activeStyle={activeStyle}>
              Albums
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const activeStyle = {
  backgroundColor: '#333',
};

export default CollectionNav;
