const tl=gsap.timeline();
const image1=document.querySelector('.first');
const body=document.querySelector('#container');


tl.from('#anim1',{opacity:0,scale:0,duration:1})
tl.from('#anim2',{opacity:1,scale:0,duration:1})
tl.from('#anim3',{opacity:0,scale:0,duration:2})

gsap.from('.p',{
    x:2,
    stagger:1
})





let doSome=()=>{
    image1.style.height="0px";
    image1.style.transition="0.5s";
    image1.style.height="27em";
    image1.classList.toggle('imgchanger');
    body.classList.toggle('container2');
}
setInterval('doSome();',3000);
   


