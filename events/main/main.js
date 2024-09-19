function helloUser() {
    const userName = localStorage.getItem('userName')
    document.querySelector('.name__user span').textContent = 'Привет, ' + userName
}

helloUser()

document.querySelector(".exit").addEventListener("click", ()=>{
    localStorage.clear()
    location.href = "../index.html"
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


document.querySelector(".btn").addEventListener("click", async () => {
    // Вызов функции events с аргументами
    await events("хелло", "Описание события", "Дата события", "Цена события");
});




// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     try {
//         await events(name_event.value, opisanie.value, data.value, price.value);
//         location.href = '../admin/admin.html';
//     } catch (error) {
//         console.error('Ошибка при отправке события:', error);
//         // Здесь вы можете добавить обработку ошибки, если это необходимо
//     }
// });



async function events(name_event, opisanie, data, price) {
    return fetch('https://cbc797784d352c7f.mokky.dev/ivents', {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name_event,
            opisanie,
            data,
            price
        })
    });
}
