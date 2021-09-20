document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

var nome= prompt("Qual é seu nome?")
alert(nome+ ", Seja bem-vindo(a)!")

function validaFormulario() {
  if(document.getElementById("nome").value != "" &&document.getElementById("email").value != "" && document.getElementById("telefone").value != "" ){alert("Prontinho! você receberá dos dados por email.")
  }else{
   alert("Por favor, preencha os campos nome e email.")
  }
}

