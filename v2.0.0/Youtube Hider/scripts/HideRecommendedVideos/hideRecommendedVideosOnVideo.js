window.hideRecommendedVideosOnVideo = (state) => {
 
    let recommendedVideos = document.querySelector(".ytp-fullscreen-grid-stills-container");

    console.log(recommendedVideos);
    console.log("hi is ");
    

    recommendedVideos.style.display = state ? "none" : "";
}