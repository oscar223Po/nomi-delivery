import "./app.min.js";
/* empty css          */
import "./quantity.min.js";
document.addEventListener("click", (e) => {
  const button = e.target.closest(".item-cart__action");
  if (!button) return;
  button.classList.toggle("action-plus");
});
