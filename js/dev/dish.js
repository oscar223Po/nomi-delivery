import "./app.min.js";
function formQuantity() {
  document.addEventListener("click", quantityActions);
  document.addEventListener("input", quantityActions);
  function quantityActions(e) {
    const type = e.type;
    const targetElement = e.target;
    if (type === "click") {
      if (targetElement.closest("[data-fls-quantity-plus]") || targetElement.closest("[data-fls-quantity-minus]")) {
        const valueElement = targetElement.closest("[data-fls-quantity]").querySelector("[data-fls-quantity-value]");
        let value = parseInt(valueElement.value);
        if (targetElement.hasAttribute("data-fls-quantity-plus")) {
          value++;
          if (+valueElement.dataset.flsQuantityMax && +valueElement.dataset.flsQuantityMax < value) {
            value = valueElement.dataset.flsQuantityMax;
          }
        } else {
          --value;
          if (+valueElement.dataset.flsQuantityMin) {
            if (+valueElement.dataset.flsQuantityMin > value) {
              value = valueElement.dataset.flsQuantityMin;
            }
          } else if (value < 1) {
            value = 1;
          }
        }
        targetElement.closest("[data-fls-quantity]").querySelector("[data-fls-quantity-value]").value = value;
      }
    } else if (type === "input") {
      if (targetElement.closest("[data-fls-quantity-value]")) {
        const valueElement = targetElement.closest("[data-fls-quantity-value]");
        valueElement.value == 0 || /[^0-9]/gi.test(valueElement.value) ? valueElement.value = 1 : null;
      }
    }
  }
}
document.querySelector("[data-fls-quantity]") ? window.addEventListener("load", formQuantity) : null;
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
