// const navToggle = document.querySelector("primary-nav");

// const navToggle = document.querySelector('[aria-controls="primary-nav"]');
// const primarynav = document.querySelector("#primary-nav");
// navToggle.addEventListener("click", () => {
//   const navopened = navToggle.getAttribute("aria-expanded");
//   if (navopened === "false") {
//     navToggle.setAttribute("aria-expanded", "true");
//   } else {
//     navToggle.setAttribute("aria-expanded", "false");
//   }
// });

// const hamburgerButton = document.querySelector(
//   '[aria-controls="primary-navigation"]'
// );
// const nav = document.querySelector(".primary-navigation");

// hamburgerButton.addEventListener("click", () => {
//   // check if the navigation is opened
//   const isNavOpened = hamburgerButton.getAttribute("aria-expanded");

//   if (isNavOpened === "false") {
//     hamburgerButton.setAttribute("aria-expanded", "true");
//   } else {
//     hamburgerButton.setAttribute("aria-expanded", "false");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector('[aria-controls="primary-nav"]');
  const primarynav = document.querySelector("#primary-nav");

  navToggle.addEventListener("click", () => {
    const navopened = navToggle.getAttribute("aria-expanded");
    if (navopened === "false") {
      navToggle.setAttribute("aria-expanded", "true");
    } else {
      navToggle.setAttribute("aria-expanded", "false");
    }
    console.log(navopened);
  });
});
