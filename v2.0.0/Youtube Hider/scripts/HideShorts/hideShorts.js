window.hideShorts = (state) => {

    hideSidebarShortsButtons(state);
    hideShortsFeed(state);
    hideShortsOnHomeFeed(state);
    hideShortsOnSearchPage(state);
    hideShortsOnRecommendedVideos(state);
    hideShortsOnSearchPageHorizontal(state);

    // testing

    hideShortsOnChannel(state);
}
