import React, {useContext} from 'react';
import Icon from '../icons';
import {LoginContext, MessageContext} from '../../utilities/context';

function CreatePlaylist() {
    const loggedIn = useContext(LoginContext)
    const setMessage = useContext(MessageContext)

    return(
        <>
        {loggedIn?
        <button className="create-button no-outline" onClick={() => setMessage('Oops, it look like I chose not to implement this feature')}>
            <div className="playlist-icon">
                <Icon name='Create'/>
            </div>
            <span className="featured-label">Create Playlist</span>
        </button>
        :
        <button className="create-button no-outline" data-tip='create' data-for='tooltip' data-event='click' onClick={() => setMessage('Opps, it look like I chose not to implement this feature')}>
            <div className="playlist-icon">
                <Icon name='Create'/>
            </div>
            <span className="featured-label">Create Playlist</span>
        </button>}



        </>
    );

}

export default CreatePlaylist;