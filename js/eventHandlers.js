mediaQuery.addEventListener("change", resizeReload);
mediaQuery.addEventListener("change", visible);

window.addEventListener("load", () => {
    if (sessionStorage.getItem("finished")) {
      destroy();
      fvAnimation();
      visible();
    } else {
      fixedBackground();
      firstAnimation();
    }
});

smoothScroll();
hamburger();
splitText();
loadingAnimation();