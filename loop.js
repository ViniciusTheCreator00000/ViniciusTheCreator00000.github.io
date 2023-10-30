
function f() {
var frase = document.getElementById("fraseTop").value;
var fraseDividida = frase.split("");
console.log(fraseDividida);

var vogais = ["a", "e", "i", "o", "u"]
console.log(vogais)

var resposta = document.getElementById("diagnostico");

var a = "";
var b = "";

for (let i = 0; i < fraseDividida.length; i++) {
    
    if (fraseDividida[i] == vogais[0] || fraseDividida[i] == vogais[1] || fraseDividida[i] == vogais[2] || fraseDividida[i] == vogais[3] || fraseDividida[i] == vogais[4]) {
        a = fraseDividida[i] + " é uma vogal <br>";
        console.log(a);

    }
    else {
        a = fraseDividida[i] + " não é uma vogal <br>";
        console.log(a)
        
    }
    
    var b = b + a;
};

resposta.innerHTML = b;

console.log("fim do loop");
}

function m() {
var fraseDois = document.getElementById("fraseMutavel");
fraseDois.style.fontFamily = "Helvetica, sans-serif"
}