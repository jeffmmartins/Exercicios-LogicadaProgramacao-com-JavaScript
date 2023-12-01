const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const fruta = frm.inFruta.value 
  const num = Number(frm.inNumero.value)
  let resultado = ''

  for ( let i = 1; i <= num ; i++){
  resultado = resultado + fruta + ' *'
  }
  resp.innerText = resultado.slice(0,-1)
})