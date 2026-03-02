
// hide playlist

window.hidePlaylist = (state) => {

    let playlist = document.querySelector("ytd-playlist-panel-renderer");

    if (playlist) {

        playlist.style.display = state ? "none" : "";
    }
}
