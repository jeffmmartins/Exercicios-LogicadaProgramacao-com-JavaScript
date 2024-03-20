const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#dvQuadro")

frm.addEventListener("submit", (e) => {
  e.preventDefault();                              // evita o envio do form

  const tarefa = frm.inTarefa.value;               // obtém o conteúdo digitado      

  const h5 = document.createElement("h5");             // cria o elemnto no HTML h5

  const texto = document.createTextNode(tarefa);       // cria um texto
  const radioBtn = document.createElement("input");    // criando elemneto no HTML
  radioBtn.type = "radio";                             //Define o tipo  como radio 
  radioBtn.id = "btnRadio"
  h5.appendChild(texto);                           // define que texo será filho de h5
  h5.appendChild(radioBtn);
  dvQuadro.appendChild(h5);                       // define que o h5 será filho de dvQuadro

  frm.inTarefa.value = "";                        // limpa o campo de edição
  frm.inTarefa.focus();                           // joga o cursor neste campo
})

frm.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  if(tarefas.length == 0){
    alert("Não há tarefas para selecionar");
    return;
  }

  let aux = -1;

  for (let i = 0; i < tarefas.length; i++) {
    if(tarefas[i].className == "tarefa-selecionada"){
      tarefas[i].className = "tarefa-normal";
      aux = i;
      break;
    }
  }

  if(aux == tarefas.length - 1) {
    aux = -1;
  }
  
  tarefas[aux + 1].className = "tarefa-selecionada";
})

frm.btRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");                   //obtém tags h5 da página

  let aux = -1;                                                     //variável auxiliar para indicar  a linha selecionada

  //percorre a lista de tarefas inseridas na pagina (elemestos h5)
  tarefas.forEach((tarefa, i) => {                                  
    if(tarefa.className == "tarefa-selecionada") {                  // verifica se a class tarefa selecionada 
      aux = i                                                       //muda o valor da variavel
    }
  });

  if(aux == -1){                                                    // verifica se há tarefa selecionada ou se a lista está vazia 
    alert("Selecione uma tarefa para remove-la"); 
    return;
  }

  //solicita confirmação 
  if(confirm(`Confirma Exclusão de ${tarefas[aux].innerText}?`)){
    dvQuadro.removeChild(tarefas[aux])
  }
})

window.addEventListener("load", () => {
  //verifica se ha tarefas salvas no navegador do usuario
  if(localStorage.getItem("tarefasDia")) {
    // cria um vetor com uma lista de tarefas (separadas por ;)
    const dados = localStorage.getItem("tarefasDia").split(";")
  
    //percorre os dados armazenados em LocalStorage
    dados.forEach(dado => {
      const h5  = document.createElement("h5")                      // cria um elemento h5
      const texto = document.createTextNode(dado)                   // cria um texto
      h5.appendChild(texto)                                         // define que o texto será filho do hh5
      dvQuadro.appendChild(h5)                                      // define que o h5 será filho de dvQuadros
    })
  }
})

