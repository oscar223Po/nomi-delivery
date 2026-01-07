import "./app.min.js";
import "./quantity.min.js";
/* empty css            */
function initSizeToggle(rootSelector, buttonSelector, activeClass) {
  const root = document.querySelector(rootSelector);
  if (!root) return;
  root.addEventListener("click", (e) => {
    const button = e.target.closest(buttonSelector);
    if (!button) return;
    root.querySelector(`.${activeClass}`)?.classList.remove(activeClass);
    button.classList.add(activeClass);
  });
}
window.addEventListener("load", () => {
  initSizeToggle(
    ".dish",
    ".size-dish__action",
    "size-dish__action--active"
  );
});
