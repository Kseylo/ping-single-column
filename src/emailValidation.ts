const form = document.getElementById('email-form')
const email = document.getElementById('email-input') as HTMLInputElement | null
const error = document.getElementById('email-error')

form?.addEventListener('submit', function (event) {
    if (!email?.validity.valid) {
        showError()
        event.preventDefault()
    }
})

function showError() {
    if (error) {
        if (email?.validity.valueMissing) {
            error.textContent =
                'Whoops! It looks like you forgot to add your email'
        }
        if (email?.validity.typeMismatch) {
            error.textContent = 'Please provide a valid email address'
        }
    }
}
