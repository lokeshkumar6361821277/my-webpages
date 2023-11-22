let tl=gsap.timeline();

tl.from('#navv,.page1',{
    y:'-100vh',
    x:'-50vw',
    scale:'0.1',
    rotate:360,
    duration:1.5,
    delay:1,
})



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    getDirection: true,
});

const cursor = new MouseFollower({
    container: '.wrapper',
    speed: 0.5
});


