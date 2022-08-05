import React from 'react';
import ModalVideo from 'react-modal-video';
import useGlobalContext from '../../hooks/useGlobalContext';
// for testing purposes
import home_video from '../../assets/video/home_video.mp4'

const VideoPopup = ({videoId}) => {
    const { isVideoOpen, setIsVideoOpen} = useGlobalContext();
    return (
        <>
            <ModalVideo channel='custom' url={home_video} autoplay isOpen={isVideoOpen}
               onClose={() => setIsVideoOpen(false)} />
        </>
    );
};

export default VideoPopup;