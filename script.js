const btnMobileOpen = document.querySelector("#btn-mobile-open");
const btnMobileClose = document.querySelector("#btn-mobile-close");
const ul = document.querySelector("ul");
const topo = document.querySelector("#topo");
const li1 = document.querySelector("#li1");
const li2 = document.querySelector("#li2");
const li3 = document.querySelector("#li3");
const li4 = document.querySelector("#li4");

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
topo.addEventListener('click', ()=>{
  ul.classList.remove("active");
  btnMobileClose.classList.toggle("hiden");
  btnMobileOpen.classList.toggle("hiden");
})
li1.addEventListener('click', ()=>{
  ul.classList.remove("active");
  btnMobileClose.classList.toggle("hiden");
  btnMobileOpen.classList.toggle("hiden");
})
li2.addEventListener('click', ()=>{
  ul.classList.remove("active");
  btnMobileClose.classList.toggle("hiden");
  btnMobileOpen.classList.toggle("hiden");
})
li3.addEventListener('click', ()=>{
  ul.classList.remove("active");
  btnMobileClose.classList.toggle("hiden");
  btnMobileOpen.classList.toggle("hiden");
})
li4.addEventListener('click', ()=>{
  ul.classList.remove("active");
  btnMobileClose.classList.toggle("hiden");
  btnMobileOpen.classList.toggle("hiden");
})
