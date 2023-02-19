document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM')
    register()
}

function register() {
    const form = document.querySelector('form')

    form.addEventListener('submit', e => {
        e.preventDefault()
        const errors = []

        const [email, pass1, pass2, accept] = e.target.elements
        const user = {
            email: email.value,
            pass1: pass1.value,
            pass2: pass2.value,
            accept: accept.checked,
        }

        if (!validateEmail(user.email)) {
            errors.push(email)
        }
        if (!validatePass(user.pass1, user.pass2)) {
            errors.push(pass1)
            errors.push(pass2)
        }
        if (!user.accept) {
            errors.push(accept)
        }


        if (errors.length > 0) {
            document.querySelectorAll('label').forEach(item =>
                item.style.color = 'black')

            errors.forEach(item => {
                document.querySelector(`label[for=${item.id}]`).style.color = 'red'
            })
        }
        else {
            document.querySelectorAll('label').forEach(item =>
                item.style.color = 'black')
            console.log('DONE')
            form.reset()
        }
    })
}

function validateEmail(email) {
    const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i
    const emailCheck = reg.test(email)

    return emailCheck
}

function validatePass(pass1, pass2) {

    if (pass1 === pass2) {
        if (pass1.length > 6) {
            console.log(`Walidacja hasła: OK (ma ${pass1.length} znaków) `)
            return true
        } else {
            console.log(`Hasło jest za krótkie - wymagane jest min. 7 znaków) `)
            return false
        }
    } else {
        console.log(`Hasła różnią się od siebie`)
        return false
    }

}

