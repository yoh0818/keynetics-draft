
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");


  if (!sidebar || !overlay || !openBtn || !closeBtn) return;

  function openMenu(){
    sidebar.classList.add("is-open");
    overlay.classList.add("is-open");
    overlay.hidden = false;
    sidebar.setAttribute("aria-hidden","false");
    openBtn.setAttribute("aria-expanded","true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeMenu(){
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
    sidebar.setAttribute("aria-hidden","true");
    openBtn.setAttribute("aria-expanded","false");
    overlay.hidden = true;
    document.body.style.overflow = "";
    openBtn.focus();
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("is-open")) closeMenu();
  });

 
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlist a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("is-active");
  });
});