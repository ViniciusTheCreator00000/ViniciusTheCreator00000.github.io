function adcExtrato() {

    let categoria = document.getElementById("opcoes")
    let valorCategoria = categoria.value

    let valorExtrato = document.getElementById("idValor").value
    let dataExtrato = document.getElementById("idData").value

    let table = document.getElementById("tabelaExtrato");
    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = valorCategoria;
    cell2.innerHTML = valorExtrato;
    cell3.innerHTML = dataExtrato;

};