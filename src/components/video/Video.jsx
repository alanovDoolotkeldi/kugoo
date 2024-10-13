import React, { useRef, useState } from "react";
// import ReactVideo from "react.video";
import { FaPause, FaPlay } from "react-icons/fa";
function Video() {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoSource = "http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4";
  
    const onClickPlay = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
    const onClickStop = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  
    const handlePlay = () => {
      setIsPlaying(true);
    };
  
    const handlePause = () => {
      setIsPlaying(false);
    };
  
    const videoStyle = {
      width: "100%",
      height: 630,
      borderRadius:10,
    };
  
    return (
      <div className="video">
        <div className="video-container">
          <video
            ref={videoRef}
            style={videoStyle}
            muted={muted}
            controls
            src={videoSource}
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source style={videoStyle} src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  
          {/* Conditionally render the play button only when the video is not playing */}
          {!isPlaying && (
            <div className="play" onClick={onClickPlay}>
            <FaPlay style={{color:"#6F73EE",width:"36px",height:"36px"}}/>
            </div>
          )}
          {isPlaying && (
            <div className="pause" onClick={onClickStop}>
              <FaPause style={{color:"#6F73EE",width:"36px",height:"36px"}}/>
            </div>
          )}
        </div>
      </div>
    );
  }
export default Video;
