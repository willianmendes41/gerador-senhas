const btnEl = document.querySelector(".btn")

const inputEl = document.getElementById("input")

const copyIconEl = document.querySelector(".fa-copy")

const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", () => {
    createPassword()
})

copyIconEl.addEventListener("click", () => {
    copyPassword()
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%¨&*()_+?:{}[]"
    const passwordLength = 14
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
    }
    inputEl.value = password
}

function copyPassword(){
    if (inputEl.value) {
        navigator.clipboard.writeText(inputEl.value)
        alertContainerEl.innerText = "Senha copiada!"
        alertContainerEl.classList.remove("active")
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 2000)
    }
}



