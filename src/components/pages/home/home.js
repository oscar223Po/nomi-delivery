const actions = document.querySelector('.leader-hero__actions')
if (actions !== null) {
	actions.addEventListener('click', (e) => {
		const button = e.target.closest('.leader-hero__action')
		if (!button) return

		actions
			.querySelector('.leader-hero__action--active')
			?.classList.remove('leader-hero__action--active')

		button.classList.add('leader-hero__action--active')
	})
}

document.addEventListener('click', (e) => {
	const portion = e.target.closest('[data-fls-portion]')
	if (!portion) return

	const body = portion.querySelector('.portion__body')
	const addButton = portion.querySelector('.portion__button')
	const quantity = portion.querySelector('[data-fls-quantity-prt]')
	const input = quantity.querySelector('[data-fls-quantity-value-prt]')
	const minusBtn = portion.querySelector('[data-fls-quantity-minus-prt]')
	const plusBtn = portion.querySelector('[data-fls-quantity-plus-prt]')

	// Добавить
	if (e.target === addButton) {
		input.value = 1
		quantity.classList.remove('quantity-portion--hidden')
		addButton.classList.add('hidden')
		body.classList.add('portion__body--active')
		return
	}

	// Плюс
	if (e.target === plusBtn) {
		input.value = Number(input.value) + 1
		body.classList.add('portion__body--active')
		return
	}

	// Минус
	if (e.target === minusBtn) {
		const value = Number(input.value) - 1

		if (value <= 0) {
			input.value = 0
			quantity.classList.add('quantity-portion--hidden')
			addButton.classList.remove('hidden')
			body.classList.remove('portion__body--active')
		} else {
			input.value = value
		}
	}
})
