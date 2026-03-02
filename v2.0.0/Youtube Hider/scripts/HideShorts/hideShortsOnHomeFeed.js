
// hide on home page

window.hideShortsOnHomeFeed = (state) => {

    let shortsOnHomeFeed = document.querySelectorAll("ytd-rich-section-renderer").forEach(el => el.style.display = state ? "none" : "");
}