const login = document.getElementById('login')
const password = document.getElementById('password')
const form = document.querySelector('form')

async function getUsers(login, password) {
    const response = await fetch('https://cbc797784d352c7f.mokky.dev/users')
    const data = await response.json()
    let isUserAuthenticated = false;

    data.forEach(user => {
        if (user.login === login && user.passwordUser === password) {
            isUserAuthenticated = true;
            localStorage.setItem('userName', user.fullName)
            localStorage.setItem('userID', user.id)
            location.href = '../main/main.html';
        }
    });

    if (!isUserAuthenticated) {
        const errorElement = document.createElement('span')
        errorElement.textContent = 'Неправильный логин или пароль'
        errorElement.classList.add('text-danger')
        form.append(errorElement)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    getUsers(login.value, password.value)
})
