function closeCover() {
    document.getElementById("cover").classList.remove("d-block");
    document.getElementById("cover").classList.add("d-none");
    
    document.getElementById("close_cover").classList.remove("d-flex");
    document.getElementById("close_cover").classList.add("d-none");

    document.getElementById("open_cover").classList.remove("d-none");
    document.getElementById("open_cover").classList.add("d-flex");

    document.getElementById("open_cv").classList.remove("d-flex");
    document.getElementById("open_cv").classList.add("d-none");

    document.getElementById("close_cv").classList.remove("d-flex");
    document.getElementById("close_cv").classList.add("d-none");

    document.getElementById("cv_full").classList.remove("d-flex");
    document.getElementById("cv_full").classList.add("d-none");

};

function openCover() {
    document.getElementById("cover").classList.remove("d-none");
    document.getElementById("cover").classList.add("d-block");

    document.getElementById("close_cover").classList.remove("d-none");
    document.getElementById("close_cover").classList.add("d-flex");


    document.getElementById("open_cover").classList.remove("d-flex");
    document.getElementById("open_cover").classList.add("d-none");
 
    document.getElementById("open_cv").classList.remove("d-none");
    document.getElementById("open_cv").classList.add("d-flex");

    document.getElementById("close_cv").classList.remove("d-flex");
    document.getElementById("open_cv").classList.add("d-none");
};

function openCV() {
    document.getElementById("cv_full").classList.remove("d-none");
    document.getElementById("cv_full").classList.add("d-flex");

    document.getElementById("close_cv").classList.remove("d-none");
    document.getElementById("close_cv").classList.add("d-flex");

    document.getElementById("open_cv").classList.remove("d-flex");
    document.getElementById("open_cv").classList.add("d-none");

}

function closeCV() {
    document.getElementById("cv_full").classList.remove("d-flex");
    document.getElementById("cv_full").classList.add("d-none");

    document.getElementById("open_cv").classList.remove("d-none");
    document.getElementById("open_cv").classList.add("d-flex");

    document.getElementById("close_cv").classList.remove("d-flex");
    document.getElementById("close_cv").classList.add("d-none");
    
}

$(document).ready( () => {

    $(".portfolio_item").on('mouseenter', event => {
        $(event.currentTarget).children().toggleClass('d-flex');
        $(event.currentTarget).children().toggleClass('d-none');
    });

    $(".portfolio_item").on('mouseleave', event => {
        $(event.currentTarget).children().toggleClass('d-flex');
        $(event.currentTarget).children().toggleClass('d-none');
    });
});