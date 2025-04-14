import React, { useRef, useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
  
    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
      };

    
      const handleMiniVdClick = () => {
        setHasClicked(true);
    
        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
      };
    
  
  return (
    <div className='relative overflow-x-hidden h-dvh w-screen '>
        <div id="video-frame" className='z-10 relative h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 '>
            <div>
                <div className="mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden  cursor-pointer rounded-lg">
                    <div onClick={handleMiniVdClick}
                    className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video
                        ref={nextVdRef}
                        src={getVideoSrc((currentIndex % totalVideos) + 1)}
                        loop
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>
            </div>
                <video src={getVideoSrc(currentIndex)}
                className='absolute left-0 top-0 size-full object-cover object-center'
                loop
                muted
                autoPlay
                
                ></video>
        </div>
      
    </div>
  )
}

export default Hero
