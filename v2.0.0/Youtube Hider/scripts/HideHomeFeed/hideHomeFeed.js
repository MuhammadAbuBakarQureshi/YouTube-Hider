// // HIDE HOME FEED

window.hideHomeFeed = (state) => {

    let url = window.location.href;

    if (url == "https://www.youtube.com/") {

        const homeFeed = document.querySelector("ytd-rich-grid-renderer");
        if (homeFeed) homeFeed.style.display = state ? "none" : "";
    }
}

