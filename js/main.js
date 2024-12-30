const mediaQuery = window.matchMedia("(min-width: 768px)");
const body = document.body;
const header = document.querySelector(".js-header");
const tl = gsap.timeline();

// resizeReload
const resizeReload = () => {
  location.reload();
}

// smoothScroll
const smoothScroll = () => {
    const scrollElement = document.querySelectorAll("a[href^='#']");
  
    for(let i = 0; i < scrollElement.length; i++) {
      scrollElement[i].addEventListener("click", (e) => {
        e.preventDefault();
  
        const href = scrollElement[i].getAttribute("href");
        const target = document.getElementById(href.replace("#", ""));
  
        const rect = target.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const position = rect + offset;
  
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      });
    }
}

// intersectionObserver
const visible = () => {
    let ROOT_MARGIN_VALUE;
  
    if(mediaQuery.matches) {
      ROOT_MARGIN_VALUE = "0px 0px -10%";
    } else {
      ROOT_MARGIN_VALUE = "0px 0px 0px 0px";
    }
  
    const options = {
      rootMargin: ROOT_MARGIN_VALUE
    }
  
    const targetVisible = document.querySelectorAll(".js-observe-target");
    const targetVisibleModifier = "is-show";
  
    const visibleHandler = (entries) => {
      for(let i = 0; i < entries.length; i++) {
        if(entries[i].isIntersecting) {
          entries[i].target.classList.add(targetVisibleModifier);
          observer.unobserve(entries[i].target);
        }
      }
    };
  
    const observer = new IntersectionObserver(visibleHandler,options);
  
    for(let i = 0; i < targetVisible.length; i++) {
      observer.observe(targetVisible[i]);
    }
}

// footerParallax
const footer = document.querySelector(".js-footer");

const footerParallax = () => {
  const parallaxTrigger = document.querySelector(".js-parallax-trigger");
  const others = document.querySelector(".js-others");

  let scrollerEnd;
  let Y_PERCENT_VALUE;

  if(mediaQuery.matches) {
    scrollerEnd = "bottom 30%";
  } else {
    scrollerEnd = "bottom center";
  }

  if(others !== null) {
    if(mediaQuery.matches) {
      Y_PERCENT_VALUE = -30;
    } else {
      Y_PERCENT_VALUE = -5;
    }
  } else {
    Y_PERCENT_VALUE = -55;
  }

  gsap.set(footer, {
    opacity: 0.5,
    yPercent: Y_PERCENT_VALUE
  });

  gsap.to(footer, {
    opacity: 1,
    yPercent: 0,
    scrollTrigger: {
      trigger: parallaxTrigger,
      start: "bottom bottom",
      end: scrollerEnd,
      scrub: true
    }
  });
}

if(footer !== null) {
  footerParallax();
}

// splitText
const splitText = () => {
    const target = document.querySelectorAll(".js-split-target");
  
    for(let i = 0; i < target.length; i++) {
      const node = target[i].childNodes;
      const newText = [];
  
      for(let i = 0; i < node.length; i++) {
        if (node[i].nodeType === 3) {
          const text = node[i].textContent;
          const targetChar = text.split("");
  
          for (let i = 0; i < targetChar.length; i++) {
            newText.push(
              `<span class="split-text__wrapper"><span aria-hidden="true" style="display:inline-block; --char-index:${i}" class="letter js-letter">${targetChar[i]}</span></span>`
            );
          };
        } else {
          newText.push(node[i].outerHTML);
        }
      };
  
      target[i].innerHTML = newText.join("");
    };
  
    const visuallyHidden = () => {
      for(let i = 0; i < target.length; i++) {
        const visuallyHidden = document.createElement("span");
  
        visuallyHidden.innerHTML = target[i].textContent;
        visuallyHidden.classList.add("visually-hidden");
        target[i].appendChild(visuallyHidden);
      }
    }
  
    visuallyHidden();
  }