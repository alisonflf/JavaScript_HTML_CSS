function validaSalvar(){
    var x = document.getElementById("edtEntrada").value;
    
    if(x === ""){
        alert("campo não preenchido");
    } else {
        alert("Qtde de caracteres digitados: " + x.length);
    }        
}

function inicializacao(){
    pegaData();
    testeArray();
}

function pegaData(){
    var dataAtual = new Date();
    document.getElementById("dataHoje").innerHTML = dataAtual.toLocaleDateString().toString();
}

function testeArray(){
    var textoFrutas = "";
    var frutas = new Array();
    frutas[0] = "Maça";
    frutas[1] = "Limão";
    frutas[2] = "Laranja";
    frutas[3] = "Pêra";
    
    textoFrutas = frutas[0].toString() + '\n';
    
    for (i=1; i < frutas.length; i++){
    
        textoFrutas = textoFrutas + frutas[i].toString() + '\n';
    
    }
    
    document.getElementById("edtText").innerHTML = textoFrutas;

}