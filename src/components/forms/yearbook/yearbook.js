import { Calendar } from 'vanilla-calendar-pro'
import 'vanilla-calendar-pro/styles/index.css'
import 'vanilla-calendar-pro/styles/themes/slate-light.css'

const options = {
	type: 'default',
	selectedTheme: 'slate-light'
}

const calendar = new Calendar('[data-fls-yearbook]', options)
calendar.init()
