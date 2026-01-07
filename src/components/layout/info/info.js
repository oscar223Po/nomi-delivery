// Підключення функціоналу "Чортоги Фрілансера"
import { addTouchAttr, bodyLockStatus, bodyLockToggle, FLS } from "@js/common/functions.js"

import './info.scss'

export function infoInit() {
	document.addEventListener("click", function (e) {
		if (bodyLockStatus && e.target.closest('[data-fls-info]')) {
			bodyLockToggle()
			document.documentElement.toggleAttribute("data-fls-info-open")
		}
	})
}
window.addEventListener('load', () => {
	infoInit()
})