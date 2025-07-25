import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const sliderRef = useRef(null);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, isLastVideo, videoId, isPlaying } = video;

  useGSAP(() => {
    // Animate slider position
    gsap.to('#silder',{
      transform:`translateX(${-100 * videoId}%)`,
      duration:2,
    })

    // Create scroll trigger for video playback
    ScrollTrigger.create({
      trigger: "#silder",
      start: "top center",
      onEnter: () => {
        setVideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }));
        if (videoRef.current[videoId]) {
          videoRef.current[videoId].play();
        }
      },
      onLeaveBack: () => {
        setVideo((pre) => ({ ...pre, isPlaying: false }));
        if (videoRef.current[videoId]) {
          videoRef.current[videoId].pause();
        }
      }
    });
  }, [isEnd, videoId]);

  const [loadedData, setloadedData] = useState([]);

  const handelLoadedMataData = (i, e) => setloadedData((pre) => [...pre, e]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    let progresssStatus = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress of the video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != progresssStatus) {
            progresssStatus = progress;
          }
          gsap.to(videoDivRef.current[videoId], {
            width:
              window.innerWidth < 760
                ? "10vw"
                : window.innerWidth < 1200
                ? "10vw"
                : "4vw",
          });
          gsap.to(span[videoId],{
            width:`${progresssStatus}%`,
            backgroundColor:'white',
          })
        },
        onComplete: () => {
          if(isPlaying){
            gsap.to(videoDivRef.current[videoId],{
              width:'12px'
            })
            gsap.to(span[videoId],{
              backgroundColor:'#afafaf'
            })
          }
        },
      });

      if(videoId === 0){
        anim.restart()
      }

      const animUpdate = () =>{
        anim.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration)
      }
      if (isPlaying) {
        gsap.ticker.add(animUpdate)
      } else {
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay]);

  const handelProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prevVideo) => ({
          ...prevVideo,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
        break;
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
         case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      default:
        break;
    }
    return video;
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="silder" ref={sliderRef} className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  className={`${
                    list.id === 2 && 'translate-x-44 pointer-events-none'
                  }`}
                  onEnded={()=>{
                    i !== 3
                      ?
                    handelProcess('video-end',i) :
                    handelProcess('video-last')
                  }}
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onLoadedMetadata={(e) => handelLoadedMataData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-300 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handelProcess("video-reset")
                : !isPlaying
                ? () => handelProcess("play")
                : () => handelProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
