import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const gsapAnimations = {

    init: function () {

        function Marquee(selector, speed) {
            const parentSelector = document.querySelector(selector);
            const clone = parentSelector.innerHTML;
            const firstElement = parentSelector.children[0];
            let i = 0;

            // parentSelector.insertAdjacentHTML('beforeend', clone);
            parentSelector.children[0].insertAdjacentHTML('beforeend', clone);
            parentSelector.children[0].insertAdjacentHTML('beforeend', clone);

            setInterval(function () {
                firstElement.style.marginLeft = `-${i}px`;

                if (i > firstElement.clientWidth) {
                    i = 0;
                }
                // console.log(i, firstElement.clientWidth);
                i = i + speed;
            }, 0);
        }

        // window.addEventListener('load', Marquee('.marquee', 2));


        // loop through each "h2" element and create an animation/ScrollTrigger for each
        gsap.utils.toArray(".animation").forEach(element => {
            gsap.to(element, {
                opacity: 1,
                ease: "none",
                // y: "-=50px",
                scrollTrigger: {
                    trigger: element,
                    start: "center 90%",
                    end: "center 0",
                    // markers: true,
                    toggleActions: "play reverse play reverse"
                }
            })
        });

        // gsap.set(".clients__img-wrap", {
        //     x: (i) => i * 50
        // });

        // gsap.to(".clients__img-wrap", {
        //     duration: 5,
        //     ease: "none",
        //     x: "-=500",
        //     modifiers: {
        //         x: gsap.utils.unitize(x => parseFloat(x) % 500)
        //     },
        //     repeat: -1
        // });
    }
};

export default gsapAnimations;