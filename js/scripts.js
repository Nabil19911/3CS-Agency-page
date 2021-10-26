/*!
 * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", event => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Form Control
const form = document.querySelector("form");
const btn = document.getElementById("submitButton");

// console.log(message.childNodes[1]);
const validItems = (item, strName) => {
  if (item.value.length === 0) {
    item.nextElementSibling.classList.add("text-warning");
    item.nextElementSibling.classList.remove(`hidden-${strName}`);
    return false;
  } else {
    item.nextElementSibling.classList.remove("text-warning");
    item.nextElementSibling.classList.add(`hidden-${strName}`);
    return true;
  }
};

btn.addEventListener("click", e => {
  e.preventDefault();
  // Name validation
  let name = validItems(document.getElementById("name"), "name");
  // Email validation
  let email = validItems(document.getElementById("email"), "email");
  // Phone validation
  let phone = validItems(document.getElementById("phone"), "phone");
  // Message validation
  let message = validItems(document.getElementById("message"), "message");
  if (name && phone && email && message) {
    const message = document.querySelector(".success-message");
    message.childNodes[1].style.display = "none";
    message.childNodes[3].classList.remove("hidden");
    form.submit();
    form.reset();
  }
});
