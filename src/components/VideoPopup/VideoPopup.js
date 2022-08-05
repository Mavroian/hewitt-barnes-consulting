import React from 'react';
import ModalVideo from 'react-modal-video';
import useGlobalContext from '../../hooks/useGlobalContext';
// for testing purposes
import home_video from '../../assets/video/home_video.mp4'

const VideoPopup = ({videoId}) => {
    const { isVideoOpen, setIsVideoOpen} = useGlobalContext();
    return (
        <>
            <ModalVideo channel='custom' url={"https://hewitt-barnes-consulting-space.fra1.digitaloceanspaces.com/home_video.mp4"} autoplay isOpen={isVideoOpen}
               onClose={() => setIsVideoOpen(false)} />
        </>
    );
};

export default VideoPopup;