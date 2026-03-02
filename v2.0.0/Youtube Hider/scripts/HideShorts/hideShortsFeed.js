// hide shorts feed

window.hideShortsFeed = (state) => {

    // replacing #shorts-container with ytd-shorts due to youtube updates
    let shortsFeed = document.querySelector("ytd-shorts");

    if (shortsFeed) {

        shortsFeed.style.display = state ? "none" : "";
    }
}
