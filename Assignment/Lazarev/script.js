document.querySelector("nav").addEventListener("mouseenter", function () {
    var tl = gsap.timeline()
    tl.to("#nav-bottom", {
        height: "21vh"
    });
    tl.to(".nav-part2 h5 span", {
        display: "block"
    });
});
