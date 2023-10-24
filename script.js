function transfer() {
  let a = document.getElementById("n_complet").value;
  const minhaLista = a.split(" ",10);
 
  document.getElementById("nome").value = minhaLista[0];
  document.getElementById("sobrenome").value = minhaLista[1];
};

function calcular() {
  let b = document.getElementById("n_complet02").value;
  let c = document.getElementById("peso").value;
  let d = document.getElementById("altura").value;
  let e = c / (d * d)

  document.getElementById("texto").innerHTML = "<br>Olá," + b + ".<br>O seu IMC é de<br>" + e.toFixed(1) 
};