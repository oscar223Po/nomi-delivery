// Підключення функціоналу "Чортоги Фрілансера"
import { addTouchAttr, bodyLockStatus, bodyLockToggle, FLS } from "@js/common/functions.js"

import './chat.scss'

export function chatInit() {
	document.addEventListener("click", function (e) {
		if (bodyLockStatus && e.target.closest('[data-fls-chat]')) {
			bodyLockToggle()
			document.documentElement.toggleAttribute("data-fls-chat-open")
		}
	})
}
window.addEventListener('load', () => {
	chatInit()
})