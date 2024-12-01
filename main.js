document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(
<<<<<<< HEAD
    '[aria-controls="primary-nav"]'
  );
  const nav = document.querySelector(".primary-nav");

  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", () => {
      const isNavOpened = hamburgerButton.getAttribute("aria-expanded");

      if (isNavOpened === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");
      } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
      }
    });
  } else {
    console.error("Hamburger button not found");
  }
=======
    '[aria-controls^="primary-nav"]'
  );
  const nav = document.querySelector(".primary-nav");

  hamburgerButton.addEventListener("click", () => {
    // check if the navigation is opened
    const isNavOpened = hamburgerButton.getAttribute("aria-expanded");

    if (isNavOpened === "false") {
      hamburgerButton.setAttribute("aria-expanded", "true");
    } else {
      hamburgerButton.setAttribute("aria-expanded", "false");
    }
  });
>>>>>>> 82cedd593c5dbee15ff359e1621b92d6ecd86c13
});
