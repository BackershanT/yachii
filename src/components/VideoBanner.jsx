const VideoBanner = () => {
  return (
  
    <div id="home" className="video-banner-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        poster="/images/banner.png"
        className="w-100 video-bg"
      >
        <source src="/video/Trim.webm" type="video/webm" />
        <source src="/video/Trim.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <video autoPlay muted loop playsInline className="video-bg">
        <source src="/video/Trim.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
    
  );
};

export default VideoBanner;
