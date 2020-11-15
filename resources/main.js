function openCover() {
    document.getElementById("cover").style.display = "flex";
    document.getElementById("close_cover").style.display = "flex";
    document.getElementById("open_cover").style.display = "none";
    document.getElementById("open_cv").style.display = "flex";
};

function closeCover() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("close_cover").style.display = "none";
    document.getElementById("open_cover").style.display = "flex";
    document.getElementById("cv_full").style.display = "none";
    document.getElementById("open_cv").style.display = "none";

};

function openCV() {
    document.getElementById("cv_full").style.display = "flex";
    document.getElementById("close_cv").style.display = "flex";
    document.getElementById("close_cover").style.display = "none";
    document.getElementById("open_cv").style.display = "none";
}

function closeCV() {
    document.getElementById("cv_full").style.display = "none";
    document.getElementById("close_cv").style.display = "none";
    document.getElementById("close_cover").style.display = "flex";
    document.getElementById("open_cv").style.display = "flex"
}
