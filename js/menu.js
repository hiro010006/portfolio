// hamburgerMenu
const hamburger = () => {
    const hamburgerButton = document.querySelector(".js-nav-button");
    const hamburgerLink = document.querySelectorAll(".js-nav-link");
  
    hamburgerButton.addEventListener("click", () => {
      body.classList.toggle("is-open");
    });
  
    for(let i = 0; i < hamburgerLink.length; i++) {
      hamburgerLink[i].addEventListener("click", () => {
        body.classList.remove("is-open");
      });
    }
  
    header.addEventListener("transitionrun", () => {
      hamburgerButton.style.pointerEvents = "none";
    });
  
    header.addEventListener("transitionend", () => {
      hamburgerButton.style.pointerEvents = "auto";
    });
  }