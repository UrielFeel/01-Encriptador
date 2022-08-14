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
  let decryptedMsj = msj
  Object.entries(keys).forEach(key => {
    decryptedMsj = decryptedMsj.replaceAll(key[1], key[0])
  })
  return decryptedMsj
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
  if (input.value === '') return

  console.log('encriptando...')
  document.querySelector('.msj').style = 'display: initial'
  document.querySelector('.no-msj').style = 'display: none'

  output.innerText = encriptar(input.value)
  input.value = ''
})

btnDesencriptar.onclick = () => {
  if (input.value === '') return

  document.querySelector('.msj').style = 'display: initial'
  document.querySelector('.no-msj').style = 'display: none'

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
