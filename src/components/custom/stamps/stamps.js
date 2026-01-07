import "./stamps.scss"

const STAMP_TYPES = ["calendar", "time", "count", "review", "card", "promo", "intime"]
const lockEl = document.querySelector(".control-lock")

function updateControlLock() {
	const isAnyOpen = STAMP_TYPES.some((type) =>
		document.documentElement.hasAttribute(`data-fls-${type}-open`)
	)

	lockEl?.classList.toggle("control-lock--active", isAnyOpen)
}

function initStamp(type) {
	document.addEventListener("click", (e) => {
		if (!e.target.closest(`[data-fls-${type}]`)) return

		STAMP_TYPES.forEach((t) => {
			if (t !== type) {
				document.documentElement.removeAttribute(`data-fls-${t}-open`)
			}
		})

		document.documentElement.toggleAttribute(`data-fls-${type}-open`)

		updateControlLock()
	})
}

function truncateChars(text, maxLength = 50) {
	const trimmed = text.trim()
	if (trimmed.length <= maxLength) return trimmed
	return trimmed.slice(0, maxLength) + "…"
}

function initStampSaver({ type, buttonSelector, inputSelector }) {
	const saveButtons = document.querySelectorAll(
		`[data-control="${type}"] [data-fls-button]`
	)

	saveButtons.forEach((saveBtn) => {
		saveBtn.addEventListener("click", () => {
			const stampWrapper = saveBtn.closest(`[data-control="${type}"]`)
			if (!stampWrapper) return

			const input = stampWrapper.querySelector(inputSelector)
			if (!input) return

			const value = input.value.trim()
			if (!value) return

			const targetButton = document.querySelector(buttonSelector)
			if (!targetButton) return

			const span = targetButton.querySelector("span")
			if (!span) return

			span.textContent = truncateChars(value, 50)

			// закрываем модалку тем же механизмом
			document.documentElement.removeAttribute(`data-fls-${type}-open`)
			updateControlLock()
		})
	})
}

window.addEventListener("load", () => {
	initStamp("calendar")
	initStamp("time")
	initStamp("count")
	initStamp("review")
	initStamp("card")
	initStamp("promo")
	initStamp("intime")

	initStampSaver({
		type: "review",
		buttonSelector: ".button-issue-review",
		inputSelector: "textarea"
	})

	initStampSaver({
		type: "promo",
		buttonSelector: ".button-issue-promo",
		inputSelector: "input"
	})
})
