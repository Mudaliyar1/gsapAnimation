// var path="M 100 100 Q 500 20 1000 100";    

// var finalPath="M 100 100 Q 500 100 1000 100";

// var box=document.querySelector("#box");

// box.addEventListener("mouseenter",function(dets){

//      path=`M 100 100 Q ${dets.x} ${dets.y} 1000 100`;
//     gsap.to("svg path",{
//         attr:{d:path},
//         ease:"power3.inOut",
//     })
// })


// box.addEventListener("mouseleave",function(){
//     gsap.to("svg path",{
//         attr:{d:finalPath},
//         ease:"elastic.out(1,0.2)"
//     })
// })



// var body=document.querySelector("#body");
// var cursor=document.querySelector("#cursor");

// body.addEventListener("mousemove",function(dets){
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:1,
//         ease:'back.out'
//     })
// })




let startX = 0;
let endX = 0;

// For desktop (wheel event)
window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        // Scroll down
        gsap.to("#marque", {
            transform: "translateX(-200%)",
            duration: 1.5,
            repeat: -1,
            ease: "none"
        });
    } else {
        // Scroll up
        gsap.to("#marque", {
            transform: "translateX(0%)",
            duration: 1.5,
            repeat: -1,
            ease: "none"
        });
    }
});

// For mobile (touch event)
window.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX; // Capture the starting X coordinate
});

window.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX; // Capture the ending X coordinate

    if (startX > endX + 50) {
        // Swipe left
        gsap.to("#marque", {
            transform: "translateX(-200%)",
            duration: 0.7,
            repeat: -1,
            ease: "none"
        });
    } else if (startX < endX - 50) {
        // Swipe right
        gsap.to("#marque", {
            transform: "translateX(0%)",
            duration: 0.7,
            repeat: -1,
            ease: "none"
        });
    }
});
