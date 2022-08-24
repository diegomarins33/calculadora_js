function addNumber(num) {
    var numero = document.getElementById("current-operacoes").innerHTML;
    document.getElementById("current-operacoes").innerHTML = numero + num;
}

function operadores(op) {
    var num = document.getElementById("current-operacoes").innerHTML
    num = num + op
    document.getElementById("previous-operacoes").innerHTML = num
    document.getElementById("current-operacoes").innerHTML = ""
}

function clearDisplay() {
    document.getElementById("current-operacoes").innerHTML = "";
    document.getElementById("previous-operacoes").innerHTML = "";
}
function deleteNumber() {
    var resultado = document.getElementById("current-operacoes").innerHTML;
    document.getElementById("current-operacoes").innerHTML = resultado.substring(
      0,
      resultado.length - 1
    );
}
function clearCurrent(){
    document.getElementById("current-operacoes").innerHTML = "";
}
function sum() {
    var current = document.getElementById("current-operacoes").innerHTML;
    var previous = document.getElementById("previous-operacoes").innerHTML;
    var res = previous + current
    if (current) {
      document.getElementById("current-operacoes").innerHTML = eval(res);
      document.getElementById("previous-operacoes").innerHTML = ""
    } else {
      document.getElementById("current-operacoes").innerHTML = "Nada...";
    }
}