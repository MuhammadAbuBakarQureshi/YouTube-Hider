window.hideComments = (state) => {

    let comments = document.querySelector("ytd-comments");

    if (comments) {

        comments.style.display = state ? "none" : "";
    }
}
