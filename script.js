// let é a fornma que cria a variável
// O que vem depois é o nome da variável
// No js pode ser var ou let do que eu me lembre
let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value;
// Aqui diz que dentro do HTML (innerHTML) o objeto indicado por "sizePassword"
// Vai receber como valor, o valor do elemento "sliderElement" (O slider)
// Significa que o valor do slider vai ser atribuído ao objeto "sizePassword"
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = ''

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
    alert('Senha copiada!')
}