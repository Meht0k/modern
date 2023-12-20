"use strict";
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco();

var tl = gsap.timeline();
function headerEffect() {

    // Slide Bar 

    tl.from('.video-text h1', {
        transform: "rotate(10deg)",
        y: "100%",
        duration: 1.5,
        stagger: .2
    }, "animation")


    var menu = document.querySelector('.menu')
    var logo = document.querySelector('.logo a')
    var menuP = document.querySelectorAll('.menu p')
    var navbar = document.querySelector('.navbar')
    var slideBar = document.querySelector('.slide-bar')




    menu.addEventListener('click', () => {
        if (slideBar.style.top == "-100%") {
            slideBar.style.top = "10vh";
            setTimeout(() => {
                navbar.style.backgroundColor = "#ff5f38"
            }, 200);
            logo.style.opacity = "0";
            menuP.forEach((elem) => {
                setTimeout(() => {
                    elem.innerHTML = "CLOSE"
                    elem.style.color = "#000"
                }, 500);

            });
            console.log("if")
        } else {
            slideBar.style.top = "-100%";
            setTimeout(() => {
                navbar.style.backgroundColor = "transparent"
            }, 200);
            setTimeout(() => {
                logo.style.opacity = "1";
            }, 500);
            menuP.forEach((elem) => {
                setTimeout(() => {
                    elem.innerHTML = "MENU"
                    elem.style.color = "#FFF"
                }, 500);
            });
            console.log("else")
        }

    })
}
headerEffect();

//Cursor
function mousemoveEffect() {

    var page1 = document.querySelector('#page1');
    var cursor = document.querySelector('.cursor');


    page1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })

    })
    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            opacity: 1
        })

    })
    page1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            opacity: 0
        })

    })
}
mousemoveEffect();





function textEffect() {

    tl.from('.page2t-left h1', {
        stagger: .5,
        duration: .8,
        y: 120,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page2',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            delay: .3,
            start: "top 60%",
            end: "top 65%",
        }
    })


    tl.from('.page2-bottom h1', {
        stagger: .5,
        duration: .8,
        y: 120,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page2',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            delay: .3,
            start: "top 55%",
            end: "top 65%",
        }
    })
    tl.from('.page3-content h2', {
        stagger: .5,
        duration: .8,
        y: 100,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page3',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            start: "top 60%",
            end: "top 65%",
        }
    })
    tl.from('.page4-top h5', {
        stagger: .5,
        duration: .8,
        y: 100,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page4',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            start: "top 60%",
            end: "top 65%",
        }
    })
    tl.from('.h5 h5', {
        stagger: .5,
        duration: .8,
        y: 100,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page4',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            start: "top 60%",
            end: "top 65%",
        }
    })
    tl.from('.page6h5 h5', {
        stagger: .5,
        duration: .8,
        y: 100,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page6',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            start: "top 60%",
            end: "top 65%",
        }
    })
    tl.from('.page6-h4 h4', {
        stagger: .5,
        duration: .8,
        y: 100,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page6',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            start: "top 60%",
            end: "top 65%",
        }
    })
    tl.to('.footer-l-s h5', {

        duration: .8,
        top: 0,
        yoyo: true,
        scrollTrigger: {
            trigger: '#page9',
            scroller: "#main",
            // markers: true,
            scrub: 5,
            start: "top 15%",
            end: "top 20%",
        }
    })

}
textEffect();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});










