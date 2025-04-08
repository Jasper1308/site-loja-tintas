var tinta1 = window.document.getElementById("tinta1")
var tinta2 = window.document.getElementById("tinta2")
var tinta3 = window.document.getElementById("tinta3")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    tinta1.style ="display:none"
    tinta3.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda() {  
    tinta1.style ="display: flex"
    tinta3.style ="display: none"
    setadireita.style ="display: flex"
    setaesquerda.style ="display: none"
}