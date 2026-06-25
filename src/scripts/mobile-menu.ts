export function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const panel = document.getElementById("mobile-menu-panel");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");
  if (!btn || !panel || !backdrop || !iconMenu || !iconClose) return;

  if (btn.dataset.menuBound === "true") return;
  btn.dataset.menuBound = "true";

  let open = false;

  const setOpen = (next: boolean) => {
    open = next;
    btn.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
    panel.classList.toggle("pointer-events-none", !open);
    panel.classList.toggle("opacity-0", !open);
    panel.classList.toggle("opacity-100", open);
    iconMenu.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
    document.body.classList.toggle("overflow-hidden", open);
  };

  btn.addEventListener("click", () => setOpen(!open));
  backdrop.addEventListener("click", () => setOpen(false));
  panel.querySelectorAll("[data-mobile-nav-link]").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && open) setOpen(false);
  });
}

initMobileMenu();
document.addEventListener("astro:page-load", initMobileMenu);
