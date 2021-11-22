document.addEventListener("click", element => {
    const isShareButton = element.target.matches("[data-share-button]");
    var shareButton = document.querySelector("[data-share-button]");
    var shareMenu = document.querySelector(".share-menu");
    if (isShareButton) {
        shareButton.classList.toggle("active");
        
        if (shareButton.classList.contains("active")) {
            shareMenu.style.opacity = "1";
            shareMenu.style.pointerEvents = "auto";
        }
        else {
            shareMenu.style.opacity = "0";
            shareMenu.style.pointerEvents = "none";
        }
    }
    else {
        shareButton.classList.remove("active");
        shareMenu.style.opacity = "0";
        shareMenu.style.pointerEvents = "none";
    }
})