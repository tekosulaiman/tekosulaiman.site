document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const desktopNav = document.getElementById("desktop-nav");

  if (!toggle || !mobileMenu || !desktopNav) return;

  const mq = window.matchMedia("(max-width: 820px)");

  function handleViewport(e) {
    if (e.matches) {
      // MOBILE
      desktopNav.classList.add("hidden");
      mobileMenu.classList.add("hidden");
      toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("opacity-0");
        mobileMenu.classList.toggle("-translate-y-4");
      });
    } else {
      // DESKTOP
      desktopNav.classList.remove("hidden");
      mobileMenu.classList.add("hidden", "opacity-0", "-translate-y-4");
    }
  }

  handleViewport(mq);
  mq.addEventListener("change", handleViewport);
});
