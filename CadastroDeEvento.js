let numeroParticipantes = 86
if (numeroParticipantes <= 100){
    console.log ("Quantidade de participantes permitida, prosseguir com cadastro!")
} else {
    console.log ("Quantiade máxima atingida, não é possível realizar cadastro")
}

let idadeParticipante = 25
if (idadeParticipante >= 18){
    console.log ("Idade permitida, prosseguir com cadastro")
} else{
    console.log ("Menor de 18 anos, cadastro não permitido")
}

let dataEvento = new Date ("02/15/2022")
let dataHoje = new Date ()
if (dataEvento > dataHoje){
    console.log ("Data permitida para evento, prosseguir com o cadastro")
} else {
    console.log ("Data inválida. Por favor tente outra data")
}

let nomePalestrantes = ("José, William, Beatriz e Lucas")
console.log ("Os palestrantes do evento serão:", nomePalestrantes)