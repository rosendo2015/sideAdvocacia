const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const btnMobileOpen = document.querySelector("#btn-mobile-open");
const btnMobileClose = document.querySelector("#btn-mobile-close");
const ul = document.querySelector("ul");
const topo = document.querySelector("#topo");
const li1 = document.querySelector("#li1");
const li2 = document.querySelector("#li2");
const li3 = document.querySelector("#li3");
const li4 = document.querySelector("#li4");

function getDistanceFromTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTop(event.target) - 90;
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function openCloseMenu() {
  ul.classList.remove("active");
  btnMobileClose.classList.toggle("hiden");
  btnMobileOpen.classList.toggle("hiden");
}

btnMobileOpen.addEventListener("click", () => {
  ul.classList.toggle("active");
  btnMobileClose.classList.remove("hiden");
  btnMobileOpen.classList.add("hiden");
});
btnMobileClose.addEventListener("click", () => {
  ul.classList.toggle("active");
  btnMobileClose.classList.add("hiden");
  btnMobileOpen.classList.remove("hiden");
});
topo.addEventListener("click", () => {
  openCloseMenu();
});
li1.addEventListener("click", () => {
  openCloseMenu();
  li1.classList.add("cliked");
  li2.classList.remove("cliked");
  li3.classList.remove("cliked");
  li4.classList.remove("cliked");
});
li2.addEventListener("click", () => {
  openCloseMenu();
  li1.classList.remove("cliked");
  li2.classList.add("cliked");
  li3.classList.remove("cliked");
  li4.classList.remove("cliked");
});
li3.addEventListener("click", () => {
  openCloseMenu();
  li1.classList.remove("cliked");
  li2.classList.remove("cliked");
  li3.classList.add("cliked");
  li4.classList.remove("cliked");
});
li4.addEventListener("click", () => {
  openCloseMenu();
  li1.classList.remove("cliked");
  li2.classList.remove("cliked");
  li3.classList.remove("cliked");
  li4.classList.add("cliked");
});
