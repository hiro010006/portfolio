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

function setSkillsProgress(element) {
  const percentage = parseFloat(element.dataset.percentage);
  const radius = parseFloat(element.dataset.radius);

  if (isNaN(percentage) || isNaN(radius)) {
    console.error('データ属性が正しく設定されていません。');
    return;
  }

  const circumference = 2 * Math.PI * radius;
  const dashArray = `${(percentage / 100) * circumference} ${circumference}`;

  element.setAttribute("stroke-dasharray", dashArray);
}

document.querySelectorAll(".skills-progress").forEach(setSkillsProgress);

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