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




let startX, endX;

// For desktop
window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to("#marque", {
            transform: "translateX(-200%)",
            duration: 1.5,
            repeat: -1,
            ease: "none"
        });
    } else {
        gsap.to("#marque", {
            transform: "translateX(0%)",
            duration: 1.5,
            repeat: -1,
            ease: "none"
        });
    }
});

// For mobile
window.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
});

window.addEventListener("touchmove", function (e) {
    endX = e.touches[0].clientX;
});

window.addEventListener("touchend", function () {
    if (startX > endX) {
        // Swipe left
        gsap.to("#marque", {
            transform: "translateX(-200%)",
            duration: 1.5,
            repeat: -1,
            ease: "none"
        });
    } else if (startX < endX) {
        // Swipe right
        gsap.to("#marque", {
            transform: "translateX(0%)",
            duration: 1.5,
            repeat: -1,
            ease: "none"
        });
    }
});
