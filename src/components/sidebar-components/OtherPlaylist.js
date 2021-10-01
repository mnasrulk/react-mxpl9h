import React from 'react';
import ListItem from './ListItem';

function OtherPlaylist({playlists}) {
    return (
        <div className="other-playlist-container">
            <ul className="other-list">
                {playlists.map((playlist) => <ListItem key={playlist.id} name={playlist.name} id={playlist.id}/>)}
            </ul>
        </div>
    );
}

export default OtherPlaylist;