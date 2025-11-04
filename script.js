const navBtn = document.querySelector("#nav-btn");
const sidebar = document.querySelector("#sidebar");
const closeBtn = document.querySelector("#close-btn");

navBtn.addEventListener("click", (e) => {
  sidebar.classList.add("show");
});
closeBtn.addEventListener("click", (e) => {
  sidebar.classList.remove("show");
});
