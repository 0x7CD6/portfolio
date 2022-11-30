var scrollTimer;

function bodyScroll() {
    if (scrollTimer != -1)
        clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout("scrollFinished()", 500);
}

function scrollFinished() {
    window.location = toUrl;
}
