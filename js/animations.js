const fixedBackground = () => {
  body.classList.add("is-fixed");
}

const firstAnimation = () => {
  sessionStorage.setItem("finished", true);

  const unfixedBackground = () => {
    body.classList.remove("is-fixed");
  }

  gsap.set([".js-loading-logo01", ".js-mainvisual__inner"], {
    autoAlpha: 0
  })
  gsap.set([".js-polygon01", ".js-polygon02", ".js-polygon03", ".js-polygon04"], {
    clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
    autoAlpha: 1,
    zIndex: 40
  })
  gsap.set(".js-header__container", {
    xPercent: "-100",
    autoAlpha: 0,
    zIndex: 45
  })

  tl.to(".js-loading-logo01", {
    display: "block",
    autoAlpha: 1,
    duration: 0.4,
    ease: "none",
    delay: 0.5
  })
    .to(".js-loading-logo01", {
      display: "block",
      duration: 0.2,
      ease: "none"
  })
    .to(".js-loading", {
      xPercent: "-100",
      duration: 0.8,
      ease: "power4.inOut"
  }, "+=0.2")
    .to(".js-polygon04", {
      clipPath: "polygon(0 0, 0 100%, 4% 100%, 20% 0%)",
      duration: 0.6,
      autoAlpha: 0.5,
      ease: 'power2.out'
  }, "-=0.4")
    .to(".js-polygon03", {
      clipPath: "polygon(0 0, 0 100%, 0% 100%, 20% 100%)",
      duration: 0.6,
      autoAlpha: 0.5,
      ease: 'power2.out'
  }, "-=0.4")
    .to(".js-polygon02", {
      clipPath: "polygon(0 0, 0 100%, 0% 100%, 10% 100%)",
      duration: 0.6,
      autoAlpha: 0.5,
      ease: 'power2.out'
  }, "-=0.4")
    .to(".js-polygon01", {
      clipPath: "polygon(0 0, 0 100%, 0% 100%, 10% 0%)",
      duration: 0.6,
      autoAlpha: 0.5,
      ease: 'power2.out'
  }, "-=0.4")
    .to(".js-header__container", {
      xPercent: "0",
      duration: 0.5,
      autoAlpha: 1
  })

    .to(".js-loading-wrapper", {
      autoAlpha: 0,
      duration: 0.2,
      onComplete: unfixedBackground, fvAnimation, visible
  }, "+=1.4")
};

const destroy = () => {
  gsap.to(".js-loading", {
    autoAlpha: 0,
    duration: 1.0,
    ease: "ease"
  })
}

const fvAnimation = () => {
  const mainvisual = document.querySelector(".js-mainvisual");
  const about = document.querySelector(".js-about");
  const works = document.querySelector(".js-works");

  if(mainvisual !== null) {
    const mvAnimation = () => {
      /*const resetStyle = () => {
        header.style.transform = "";
        header.style.pointerEvents = "auto";
      }*/

      gsap.set(".js-mv-scroll", {
        autoAlpha: 0
      })

      gsap.set([".js-mv-split-text .js-letter", ".js-mv-copy"], {
        autoAlpha: 0,
        yPercent: 100
      })

      gsap.set(".js-mainvisual__inner", {
        autoAlpha: 1
      })

      /*gsap.set(".js-mv-line", {
        scaleX: 0,
        transformOrigin: "0 0"
      })*/

      /*gsap.set(".js-header", {
        autoAlpha: 0,
        y: -50,
        pointerEvents: "none"
      })*/

      tl.to(".js-mv-split-text .js-letter", {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: "power4.out"
      })
      /*.to(".js-mv-line", {
        scaleX: 1,
        duration: 1.2,
        ease: "power4.out"
      }, "-=1.5")*/
      .to(".js-mv-copy", {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1.4,
        ease: "power4.out"
      }, "<")
      .to(".js-mv-scroll", {
        autoAlpha: 1,
        duration: 1.4,
        ease: "power4.out"
      }, "-=2.8")
      /*.to(".js-header", {
        y: 0,
        autoAlpha: 1,
        duration: 1.4,
        ease: "power4.out",
        onComplete: resetStyle
      }, "<")*/
    }

    mvAnimation();
  }

  if(about !== null) {
    const aboutFvAnimation = () => {
      gsap.set(".js-about-image", {
        autoAlpha: 0,
        y: 30,
        rotation: 6
      })

      gsap.set(".js-about-circle", {
        autoAlpha: 0,
        y: 10,
        rotation: -30
      })

      tl.to(".js-about-image", {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "ease"
      })
      .to(".js-about-circle", {
        autoAlpha: 1,
        y: 0,
        rotation: 0,
        duration: 1.0,
        ease: "ease"
      }, "-=0.1")
    }

    aboutFvAnimation();
  }

  if(works !== null) {
    const worksFvAnimation = () => {
      const EASING = CustomEase.create('default', '0.73, 0, 0.17, 1');

      gsap.set(".js-works-heading .js-letter", {
        yPercent: 100
      })

      gsap.set(".js-works-meta", {
        autoAlpha: 0
      })

      gsap.set(".js-works-image", {
        autoAlpha: 0,
        y: 15
      })

      tl.to(".js-works-heading .js-letter", {
        yPercent: 0,
        duration: 1.0,
        stagger: 0.01,
        ease: EASING
      })
      .to(".js-works-meta", {
        autoAlpha: 1,
        duration: 1.3,
        ease: "ease"
      })
      .to(".js-works-image", {
        autoAlpha: 1,
        y: 0,
        duration: 1.3,
        ease: "ease"
      }, "-=0.8")
    }

    worksFvAnimation();
  }
}

// loadingAnimation
const loadingAnimation = () => {
  fvAnimation();
}