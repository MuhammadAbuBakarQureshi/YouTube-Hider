let toggleButtons = document.querySelectorAll(".switch");

function sendToContent(action, state){

    chrome.storage.sync.set({

        [action]: state
    })

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

        chrome.tabs.sendMessage(tabs[0].id, {
            
            action, state
        })
    })
}

toggleButtons.forEach((toggleButton) => {
    
    toggleButton.addEventListener("change", (e) => {

    let input = toggleButton.querySelector("input");

        sendToContent(input.id, e.target.checked);
    })
})


document.addEventListener("DOMContentLoaded", () => {

    chrome.storage.sync.get(["toggleHomeFeed", "toggleShortsFeed", "toggleRecommendedVideos", "togglePlaylist", "toggleLivechat", "toggleComments"], (data) => {

        toggleHomeFeed.checked = data.toggleHomeFeed || false;
        toggleShortsFeed.checked = data.toggleShortsFeed || false;
        toggleRecommendedVideos.checked = data.toggleRecommendedVideos || false;
        togglePlaylist.checked = data.togglePlaylist || false;
        toggleLivechat.checked = data.toggleLivechat || false;
        toggleComments.checked = data.toggleComments || false;
    })
})