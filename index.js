const keys = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'

}

function encriptar (msj) {
  let encryptedMsj = ''

  for (let i = 0; i < msj.length; i++) {
    if (Object.keys(keys).includes(msj[i])) {
      encryptedMsj += keys[msj[i]]
    } else {
      encryptedMsj += msj[i]
    }
  }
  return encryptedMsj
}

function desencriptar (msj) {
  Object.entries(keys).forEach(key => {
    msj = msj.replace(key[1], key[0])
  })
  return msj
}

function copyToClipBoard (msj) {
  navigator.clipboard.writeText(msj)
    .then(() => {
      console.log('Text copied to clipboard...')
    })
    .catch(err => {
      console.log('Something went wrong', err)
    })
}

const input = document.querySelector('#input')
const output = document.querySelector('#output')
const btnEncriptar = document.querySelector('#encriptar')
const btnDesencriptar = document.querySelector('#btn-desencriptar')
const btnCopy = document.querySelector('#copy')

btnEncriptar.addEventListener('click', (e) => {
  console.log('encriptando...')
  output.innerText = encriptar(input.value)
  input.value = ''
})

btnDesencriptar.onclick = () => {
  console.log('desencriptando')
  output.innerText = desencriptar(input.value)
  input.value = ''
}

btnCopy.onclick = () => {
  if (!navigator.clipboard) console.log('Clipboard API not available')
  else {
    copyToClipBoard(output.innerText)
  }
}
