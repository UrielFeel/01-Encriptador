const keys = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'

}

function encriptar (msj) {
  Object.entries(keys).forEach(key => {
    msj.replace(key[0], key[1])
  })
  return msj
}

function desencriptar (msj) {
  Object.entries(keys).forEach(key => {
    msj.replace(key[1], key[0])
  })
  return msj
}

const input = document.querySelector('.input')
const output = document.querySelector('.output')
const btnEncriptar = document.querySelector('.btn-encriptar')
const btnDesencriptar = document.querySelector('.btn-desencriptar')

btnEncriptar.onclick(() => {
  output.innerText = encriptar(input.value)
})

btnDesencriptar.onclick(() => {
  output.innerText = desencriptar(input.value)
})
