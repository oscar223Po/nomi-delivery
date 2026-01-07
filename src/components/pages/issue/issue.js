function initIssueToggle(rootSelector, buttonSelector, activeClass) {
  const root = document.querySelector(rootSelector)
  if (!root) return

  root.addEventListener("click", (e) => {
    const button = e.target.closest(buttonSelector)
    if (!button) return

    root.querySelector(`.${activeClass}`)?.classList.remove(activeClass)
    button.classList.add(activeClass)
  })
}

window.addEventListener("load", () => {

  initIssueToggle(
    ".time-issue",
    ".time-issue__button",
    "time-issue__button--active"
  )

  initIssueToggle(
    ".metod-issue",
    ".metod-issue__button",
    "metod-issue__button--active"
  )

})
