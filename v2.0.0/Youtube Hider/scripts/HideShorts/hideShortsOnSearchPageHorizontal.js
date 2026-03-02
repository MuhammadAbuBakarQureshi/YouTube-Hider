
// hide shorts on search page shown as horizontal list

window.hideShortsOnSearchPageHorizontal = (state) => {

    let shortsOnSearchPageHorizontal = document.querySelectorAll("[overlay-style='SHORTS']");
    shortsOnSearchPageHorizontal.forEach(el => {

        mainElement = el.closest("ytd-video-renderer");
        if (mainElement) {
            mainElement.style.display = state ? "none" : "";
        }
    });
}
