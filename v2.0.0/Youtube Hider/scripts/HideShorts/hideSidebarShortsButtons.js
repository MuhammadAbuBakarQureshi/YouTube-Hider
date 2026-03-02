
// hide sidebar shorts button

window.hideSidebarShortsButtons = (state) => {

    let sidebarButtons = document.querySelectorAll("#endpoint").forEach(button => {

        if (button.title == "Shorts") {

            button.style.display = state ? "none" : "";
            return;
        }
    })
}

