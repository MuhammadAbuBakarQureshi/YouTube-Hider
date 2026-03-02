// hide on search page

window.hideShortsOnSearchPage = (state) => {

    // replacing .ytGridShelfViewModelHostHasBottomButton with ytd-grid-shelf-renderer due to youtube updates
    let shortsOnSearchPage = document.querySelectorAll("grid-shelf-view-model").forEach(el => el.style.display = state ? "none" : "");
}
