const imClube = document.querySelector('#imgClube')
const dvTitulo = document.querySelector('#divTitulo')
const inRadios = document.querySelectorAll("input") // captura as tags do input da página


if(!localStorage.getItem("clube")){
  alert("Muito bem Vindo! Esta é a sua primeira visita ao nosso site")
}else if (localStorage.getItem("clube")){
  const informacoes = localStorage.getItem("clube").split(";")
  let tamanho = informacoes.length
  alert(`Que bom que você voltou está é sua visita de númmero ${tamanho} ao nosso site `)
}
  



const trocarClube = () => {
  const clubes = ["Brasil", "Pelotas", "Farroupilha"]  // vetor com lista de clubes
 
  let selecao
  //percorrer os Inradios pra verificar qual foi selecionado
  for (let i = 0; i < inRadios.length; i++){
    if(inRadios[i].checked){
      selecao = i  // se selecionado armazena o indice do radio selecionado
      break // e sai da repetiçao
    }
  }

  if (selecao <= 2 ){
    divTitulo.className = `row cores-${clubes[selecao]}` //modifica a cor 
    //muda a propriedade src com a imagem do clube selecionado
    imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
    imClube.className = "img-fluid" // muda estilo para exibir imagem
    imClube.Alt = `Simbolo do ${clubes[selecao]}` // texto alternativo
    localStorage.setItem("clube", clubes[selecao])
  }else {
    divTitulo.className= 'row' // tira a class de cor da divTitulo
    imClube.className = 'd-none' // oculta imagem
    imClube.alt = "" // limpa texto alterativo
    localStorage.removeItem("clube")
  }
}
// percorre os elementos para associar function ao evento change
for (const inRadio of inRadios){
  inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
  if (localStorage.getItem('clube')) { // se ja estiver salvo algum clube
    const clube = localStorage.getItem('clube') // obtem o nome do clube 
    if (clube == "Brasil") {
      inRadios[0].checked = true
    }else if (clube == "Pelotas") {
      inRadios[1].checked = true
    }else{
      inRadios[2].checked = true
    }
    trocarClube()
  }
}

// ao carregar a pagina, verifica se cliente ja selecionou clube anteriormente
window.addEventListener('load', verificarClube)