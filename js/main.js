/* Variáveis utilizadas no projeto */
let nome = "Jonathan Lopes"
let idade = 27
let n1 = 10
let n2 = 5
let frase = "Japão é a melhor seleção do mundo"
let lista = ["Alemanha", "Inglaterra", "Escócia"]
let fruta = { nome: "Maça", cor: "Vermelha" }
let frutas = [
  { nome: "Maça", cor: "Vermelha" },
  { nome: "Uva", cor: "Roxa" },
]
let count = 0
let date = new Date()

/* Execução dos comandos - Diversos */
console.log(date.getDate())
console.log(nome + " tem " + idade + " anos")
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toLocaleLowerCase())
console.log(frase.toUpperCase())
console.log(n1 + n2)
console.log(String(n1) + String(n2))

/* Execução dos comandos - Array */
console.log(lista[0])

lista.push("Brasil")
console.log(lista)

lista.pop()
console.log(lista)

console.log(lista.length)

console.log(lista.reverse())

console.log(lista.toString())

console.log(lista.join(" "))

console.log(frutas[1].nome)

/* Execução dos comandos - Objetos */
console.log(fruta.nome)

/* Execução dos comandos - Condicionais */

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}

while (count <= 5) {
  console.log(count)
  count++
}

for (let i = 0; i <= 5; i++) {
  console.log("For " + i)
}

function soma(n1, n2) {
  return n1 + n2
}
console.log(soma(10, 25))

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome)
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"))

function validarIdade(idade) {
  let validar

  if (idade >= 18) {
    validar = true
  } else {
    validar = false
  }

  return validar
}
console.log(validarIdade(20))

function buttonClick() {
  const title = document.querySelector("#title-click")
  title.textContent = "Redirecione"
}

function redirecionar() {
  window.open("https://google.com.br")
  window.location.href = "https://google.com.br"
}

function trocar(element) {
  element.textContent = "Obrigado por passar o mouse"
}

function voltar(element) {
  element.textContent = "Passe o mouse aqui"
}

function load(){
  console.log('Página carregada')
}

function changeThis(element){
  console.log(element.value)
}