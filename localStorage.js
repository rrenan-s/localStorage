localStorage.setItem("teste", JSON.stringify(aluno))
let retorno = localStorage.getItem("teste")
let conversao = JSON.parse(retorno)