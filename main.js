document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(
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
});
