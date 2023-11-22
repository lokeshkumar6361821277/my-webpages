var tl = gsap.timeline();
tl.from(".circle", {opacity: 0.6,scale:10, duration: 1});
tl.from("nav",{x:-100,y:-100,scale:0,duration:1});
tl.from(".links",{x:100,scale:2,duration:1})
tl.from("#img", {x: 100,scale:0.3,opacity:0, duration: 1});
tl.from("#h1", {y: 50,scale:2,opacity:0 ,duration: 1});
tl.from("#arrows", {opacity: 0,scale:0, duration: 1});
tl.from("footer", {opacity: 0,scale:0, duration: "0.4"});
tl.from(".smalltext", {opacity: 0,scale:0, duration: "0.4"});
tl.from("#lok", {opacity: 0,scale:0, duration: "0.2"});


