import React from 'react';
import {Route} from 'react-router-dom';

import AboutNavItem from './AboutNavItem'
import RowGrid from './RowGrid'
import ArtistRow from './ArtistRow'

const AboutMenu = ({
  id,
  related,
  tracks,
  album,
  single,
  appear,
  compilation,
  playContextTrack
}) => {
  return (
    <>
      <nav className="menuNav">
        <ul className="menuNavList">
          <AboutNavItem label='Overview' to={`/artist/${id}`}/>
          <AboutNavItem label='Related Artist' to={`/artist/${id}/related`}/>
        </ul>
      </nav>

      <div style={{paddingTop: '1.5em', position:"relative"}}>
        <Route exact path={`/artist/${id}`}>
          
      </div>
    </>
  )
}