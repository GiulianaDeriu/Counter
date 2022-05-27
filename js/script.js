const counter = document.querySelector('#counter')
const button = document.querySelectorAll('.btn')

let count = 0

	button.addEventListener('click', (e) => {
		const styles = e.currentTarget.classList

		if (styles.contains('increase')) {
			count++
		} else if (styles.contains('decrease')) {
			count--
		} else {
			count = 0
		}

		if (count > 0) {
			counter.style.color = 'green'
		}

		if (count < 0) {
			counter.style.color = 'red'
		}

		if (count === 0) {
			counter.style.color = 'grey'
		}

		counter.textContent = count

})
