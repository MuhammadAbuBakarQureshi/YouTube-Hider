// HIDE HOME FEED

const hideHomeFeed = (state) => {
    
    const homeFeed = document.querySelector("ytd-two-column-browse-results-renderer");
    if (homeFeed) homeFeed.style.display = state ? "none" : "";
}


// HIDE SHORTS

// hide sidebar shorts button

const hideSidebarShortsButtons = (state) => {

    let sidebarButtons = document.querySelectorAll("#endpoint").forEach(button => {

        if(button.title == "Shorts"){

            button.style.display = state ? "none" : "";
            return;
        }
    } )

}


// hide shorts feed

const hideShortsFeed = (state) => {

    let shortsFeed = document.querySelector("#shorts-container");

    if(shortsFeed){

        shortsFeed.style.display = state ? "none" : "" ;
    }
}


// hide on home page

const hideShortsOnHomeFeed = (state) => {
    
    let shortsOnHomeFeed = document.querySelectorAll("ytd-rich-section-renderer").forEach(el => el.style.display = state ? "none" : "");
}


// hide on search page

const hideShortsOnSearchPage = (state) => {

    let shortsOnSearchPage = document.querySelectorAll(".ytGridShelfViewModelHostHasBottomButton").forEach(el => el.style.display = state ? "none" : "");
}

// hide on recommended videos sidebar

const hideShortsOnRecommendedVideos = (state) => {

    let shortsOnRecommendedVideos = document.querySelectorAll("ytd-reel-shelf-renderer").forEach(((shortsShelf) => {

        shortsShelf.style.display = state ? "none" : "";
    }));
}

const hideShorts = (state) => {
    
    hideSidebarShortsButtons(state);
    hideShortsFeed(state);
    hideShortsOnHomeFeed(state);
    hideShortsOnSearchPage(state);
    hideShortsOnRecommendedVideos(state);
}




// VIDEO SIDEBAR

// hide playlist

const hidePlaylist = (state) => {

    let playlist = document.querySelector("ytd-playlist-panel-renderer");

    if(playlist){

        playlist.style.display = state ? "none" : "";
    }
}


// hide live chat

const hideLiveChat = (state) => {
    
    let liveChat = document.querySelector("#chat-container");

    if(liveChat){

        liveChat.style.display = state ? "none" : "";
    }
}


// HIDE RECOMMENDED VIDEOS

const hideRecommendedVideos = (state) => {

    let upNextVideos = document.querySelector("#related");

    if(upNextVideos){

        upNextVideos.style.display = state ? "none" : "";
    }
}



// HIDE COMMENTS



const hideComments = (state) => {

    let comments = document.querySelector("ytd-comments");

    if(comments){

        comments.style.display = state ? "none" : "";
    }
}



chrome.runtime.onMessage.addListener( ({action, state}) => {

    switch(action){

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

const  observe = new MutationObserver(() => {
  
    chrome.storage.sync.get(["toggleHomeFeed", "toggleShortsFeed", "toggleRecommendedVideos", "togglePlaylist", "toggleLivechat", "toggleComments"], (data) => {

        hideHomeFeed(data.toggleHomeFeed || false);
        hideShorts(data.toggleShortsFeed || false);
        hideRecommendedVideos(data.toggleRecommendedVideos || false);
        hidePlaylist(data.togglePlaylist || false);
        hideLiveChat(data.toggleLivechat || false);
        hideComments(data.toggleComments || false);
    })




    // hide the search bar from your new page

    let searchboxContainer = document.querySelector("#searchboxContainer");

    searchboxContainer.style.display = "none";
    
})

observe.observe(
    document.body, {
        childList: true,
        subtree: true
    }
);