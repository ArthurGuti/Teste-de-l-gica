// main.ts

// Função que será chamada quando o botão for clicado

const inputElement = document.getElementById("meuInput");
const valor = inputElement?.value;
const anos = inputElement?.value;
var somaAno = 2;

function obterValor() {
  var valor = document.getElementById("nome")?.value;
  console.log("O valor do input é: " + valor);
  alert("O valor do input é: " + valor);
}

function exibirValor() {
  var valor = document.getElementById("nomeLivro")?.value;
  console.log("O novo valor do input é: " + valor);
  document.getElementById("labelDisplay").innerText = valor;
}

function somar() {
    var anos = document.getElementById("idade")?.value;
    if (anos != null ) {
        anos = anos * somaAno
    }
    console.log("A sua idade vezes 2 é: " + anos );
    alert("A sua idade vezes 2 é: " + anos );
}
