import { bodyLock, bodyUnlock } from "@js/common/functions.js"
import "./controls.scss"

const CONTROL_TYPES = ["book", "done", "choose", "delivery", "finish"]

function isAnyControlOpen() {
	return CONTROL_TYPES.some((type) =>
		document.documentElement.hasAttribute(`data-fls-${type}-open`)
	)
}

function initControl(type) {
	document.addEventListener("click", (e) => {
		if (!e.target.closest(`[data-fls-${type}]`)) return

		const html = document.documentElement
		const isOpen = html.hasAttribute(`data-fls-${type}-open`)

		// закрываем все
		CONTROL_TYPES.forEach((t) => {
			html.removeAttribute(`data-fls-${t}-open`)
		})

		// если клик был НЕ по открытому — открываем
		if (!isOpen) {
			html.setAttribute(`data-fls-${type}-open`, "")
		}

		// управление скроллом
		if (isAnyControlOpen()) {
			bodyLock()
		} else {
			bodyUnlock()
		}
	})
}

function initAddressToggle(rootSelector, buttonSelector, activeClass) {
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
	initControl("book")
	initControl("done")
	initControl("choose")
	initControl("delivery")
	initControl("finish")

	initAddressToggle(
		".choose",
		".choose__button",
		"choose__button--active"
	)

	initAddressToggle(
		".delivery",
		".delivery__button",
		"delivery__button--active"
	)

	initAddressToggle(
		".count",
		".count__item",
		"count__item--active"
	)
})
