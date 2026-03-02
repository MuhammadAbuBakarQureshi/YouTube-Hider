
// hide live chat

window.hideLiveChat = (state) => {

    let liveChat = document.querySelector("#chat-container");

    if (liveChat) {

        liveChat.style.display = state ? "none" : "";
    }
}