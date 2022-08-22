import React from 'react';
import ModalVideo from 'react-modal-video';
import useGlobalContext from '../../hooks/useGlobalContext';


const VideoPopup = ({videoId}) => {
    const { isVideoOpen, setIsVideoOpen} = useGlobalContext();
    return (
        <>
            <ModalVideo channel='custom' url={"https://hewitt-barnes-consulting-space.fra1.cdn.digitaloceanspaces.com/hbc_intro.mp4"} autoplay isOpen={isVideoOpen}
               onClose={() => setIsVideoOpen(false)} />
        </>
    );
};

export default VideoPopup;