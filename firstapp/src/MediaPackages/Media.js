import React from 'react';
import ReactPlayer from 'react-player/youtube';

export const MediaApp = () => {
    return(
        <div>
            <Video/>
        </div>
    )
}

const Video = () => {
    return(
        <ReactPlayer 
          url="https://youtu.be/81Ub0SMxZQo" 
          playing={false}
          volume={0.5}
        />
    )
}