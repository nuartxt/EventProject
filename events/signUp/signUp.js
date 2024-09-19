const login = document.getElementById('login')
const email = document.getElementById('email')
const passwordUser = document.getElementById('password')
const fullName = document.getElementById('fullName')
const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addUser(login.value, email.value, passwordUser.value, fullName.value)
        .then(() => {
            location.href = '../auth/auth.html'
        })
})

async function addUser(login, email, passwordUser, fullName) {
    await fetch('https://cbc797784d352c7f.mokky.dev/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login,
            email,
            passwordUser,
            fullName
        })
    })
}