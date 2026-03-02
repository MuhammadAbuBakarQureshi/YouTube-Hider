chrome.runtime.onMessage.addListener(({ action, state }) => {

    switch (action) {

        case 'toggleHomeFeed':

            hideHomeFeed(state);
            break;

        case 'toggleShortsFeed':

            hideShorts(state);
            break;

        case 'toggleRecommendedVideos':

            hideRecommendedVideos(state);
            break;

        case 'togglePlaylist':

            hidePlaylist(state);
            break;

        case 'toggleLivechat':

            hideLiveChat(state);
            break;

        case 'toggleComments':

            hideComments(state);
            break;

        default:
            break;
    }
})



// on reload

const observe = new MutationObserver(() => {

    chrome.storage.sync.get(["toggleHomeFeed", "toggleShortsFeed", "toggleRecommendedVideos", "togglePlaylist", "toggleLivechat", "toggleComments"], (data) => {

        hideHomeFeed(data.toggleHomeFeed || false);
        hideShorts(data.toggleShortsFeed || false);
        hideRecommendedVideos(data.toggleRecommendedVideos || false);
        hidePlaylist(data.togglePlaylist || false);
        hideLiveChat(data.toggleLivechat || false);
        hideComments(data.toggleComments || false);
    })

})

observe.observe(
    document.body, {
    childList: true,
    subtree: true
}
);