// DOM elements 
const signUp = document.getElementById('sign-up')
const errorMessage = document.getElementById('error-message')
const emailInput = document.getElementById('email-input')
const submitBtn = document.getElementById('submit-btn')
const successMessage = document.getElementById('success-message')
const successEmail = document.getElementById('success-email')
const dismissMesage = document.getElementById('dismiss-message')

// Function for submiting
function submit() {
    const email = emailInput.value.trim()
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!email) {
        errorMessage.classList.remove('hidden')
        emailInput.classList.add('text-Tomato', 'border-Tomato', 'bg-red-200')
    } else if (!isValidEmail) {
        errorMessage.classList.remove('hidden')
        emailInput.classList.add('text-Tomato', 'border-Tomato', 'bg-red-200')
    } else {
        setTimeout(() => {
            signUp.classList.add('hidden')
            successMessage.classList.remove('hidden')
            successEmail.textContent = email
        }, 400)
    }
}

// Submitting on button
submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    submit()
})

// Submitting on keyboard (Enter)
emailInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        submit()
    }
})

// Function for dismiss message
dismissMesage.addEventListener('click', () => {
    setTimeout(() => {
        signUp.classList.remove('hidden')
        successMessage.classList.add('hidden')
        emailInput.value = ''
        errorMessage.classList.add('hidden')
        emailInput.classList.remove('text-Tomato', 'border-Tomato', 'bg-red-200')
    }, 400)
})