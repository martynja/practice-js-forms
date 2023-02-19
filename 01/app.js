document.addEventListener('DOMContentLoaded', init)


function init() {
    console.log('DOM')
    addUser()
}

function addUser() {
    const form = document.querySelector('form')

    form.addEventListener('submit', e => {
        e.preventDefault()

        const list = document.querySelector('.users-list')
        const newLi = document.createElement('li')
        const { firstName, lastName } = e.target.elements
        const user = {
            firstName: firstName.value, lastName: lastName.value
        }

        newLi.className = 'user-list__person'
        newLi.innerText = `${user.firstName} ${user.lastName}`
        list.appendChild(newLi)

        form.reset()

    })

}