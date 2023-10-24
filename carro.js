function verVogais() {
    let textComplt = document.getElementById("texto").value
    console.log(textComplt);

    let textVogais = textComplt.split('');
    console.log(textVogais);

    let vogais = ["a","e","i","o","u"];
    console.log(vogais);


    for (let i = 0; i < textVogais.lenght; i++) {
        if (
            textVogais[i] == vogais[0] || 
            textVogais[i] == vogais[1] ||
            textVogais[i] == vogais[2] ||
            textVogais[i] == vogais[3] ||
            textVogais[i] == vogais[4]
           ) {
            console.log("é uma vogal")
        }

        else {
            console.log("não é uma vogal")
        }
    };
};

function alterFonte() {
   document.getElementById("sesh").style.fontFamily = "Helvetica, sans-serif"
};

