
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller();

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        var section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

allBoxes.forEach(box => {
    for (let i = 0; i < allRonds.length; i++) {
        if (allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {
            let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 });
            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            //Debug
            // .addIndicators()
            .addTo(controller);
        }
    }
});
