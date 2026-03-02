
// hide on recommended videos sidebar

window.hideShortsOnRecommendedVideos = (state) => {

    let shortsOnRecommendedVideos = document.querySelectorAll("ytd-reel-shelf-renderer").forEach(((shortsShelf) => {

        shortsShelf.style.display = state ? "none" : "";
    }));
}
