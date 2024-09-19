
const login = document.querySelector('#adminLogin')
const password = document.querySelector('#adminPassword')
async function getAdminInfo() {
    const response = await fetch('https://cbc797784d352c7f.mokky.dev/admin')
    const infoAdmin = await response.json()
    return infoAdmin
}

async function authAdmin() {
    const data = await getAdminInfo()
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        if (data[0].login === login.value && data[0].passwordUser === password.value) {
            localStorage.setItem('admin', 'admin')
            location.href = '../admin.html'
            console.log('dasdsad')
        }
    })
}

authAdmin()
