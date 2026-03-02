// HIDE RECOMMENDED VIDEOS

window.hideRecommendedVideos = (state) => {

    let upNextVideos = document.querySelector("#related");

    if (upNextVideos) {

        upNextVideos.style.display = state ? "none" : "";
    }
}

