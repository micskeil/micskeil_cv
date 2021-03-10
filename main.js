const coverHeight = $(".cover").height();
const cvHeight = $(".cv-full").height();
gsap.to(".cv-full", { duration: 0, height: "0px" });

function closeCover() {
  gsap.to(".cover", { duration: 1.5, height: "0px" });

  document.getElementById("close_cover").classList.remove("d-flex");
  document.getElementById("close_cover").classList.add("d-none");

  document.getElementById("open_cover").classList.remove("d-none");
  document.getElementById("open_cover").classList.add("d-flex");
}

function openCover() {
  gsap.to(".cover", { duration: 1.5, height: coverHeight });

  document.getElementById("close_cover").classList.remove("d-none");
  document.getElementById("close_cover").classList.add("d-flex");

  document.getElementById("open_cover").classList.remove("d-flex");
  document.getElementById("open_cover").classList.add("d-none");
}

function openCV() {
  gsap.to(".cv-full", { duration: 1.5, height: cvHeight });

  document.getElementById("close_cv").classList.remove("d-none");
  document.getElementById("close_cv").classList.add("d-flex");

  document.getElementById("open_cv").classList.remove("d-flex");
  document.getElementById("open_cv").classList.add("d-none");
}

function closeCV() {
  gsap.to(".cv-full", { duration: 1.5, height: "0px" });

  document.getElementById("open_cv").classList.remove("d-none");
  document.getElementById("open_cv").classList.add("d-flex");

  document.getElementById("close_cv").classList.remove("d-flex");
  document.getElementById("close_cv").classList.add("d-none");
}

$(document).ready(() => {
  $(".portfolio_item").on("mouseenter", (event) => {
    $(event.currentTarget).children().toggleClass("d-flex");
    $(event.currentTarget).children().toggleClass("d-none");
  });

  $(".portfolio_item").on("mouseleave", (event) => {
    $(event.currentTarget).children().toggleClass("d-flex");
    $(event.currentTarget).children().toggleClass("d-none");
  });
});

gsap.from(".brand-letter", {
  duration: 0.5,
  color: "white",
  stagger: 0.5,
});

gsap.from(".avatar", { duration: 3, ease: "back.out(1.4)", x: "-50vw" });
gsap.from(".personal-info", { duration: 3, ease: "back.out(1.4)", x: "50vw" });
gsap.from(".icon", { duration: 3, rotate: 360 });
gsap.from(".resume-text", { duration: 5, opacity: 0 });
