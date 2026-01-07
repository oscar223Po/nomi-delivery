import "./panels.scss"

export function panelsInit() {
	const panels = document.querySelectorAll('[data-panel]')
	if (!panels.length) return

	const stack = []

	const openPanel = (id) => {
		const panel = document.querySelector(`[data-panel="${id}"]`)
		if (!panel) return

		panel.classList.add('is-active')
		stack.push(panel)
	}

	const closePanel = () => {
		const panel = stack.pop()
		panel?.classList.remove('is-active')
	}

	document.addEventListener('click', (e) => {
		const openBtn = e.target.closest('[data-open-panel]')
		const closeBtn = e.target.closest('[data-panel-close]')

		if (openBtn) {
			openPanel(openBtn.dataset.openPanel)
		}

		if (closeBtn) {
			closePanel()
		}
	})
}
