let idadeParticipante = 25
if (idadeParticipante >= 18){
    console.log ("Idade permitida, prossiga com o cadastro!")
} else {
    console.log ("Menor de 18 anos, cadastro não permitido")
}

let dataEvento = new Date ("11/15/2022")
let dataHoje = new Date ()
if (dataEvento > dataHoje){
    console.log ("Data permitida para o evento, prossiga com o cadastro")
}else {
    console.log ("Data inválida. Por favor tente outra data")
}

let numeroParticipantes = 86
if (numeroParticipantes <= 100){
    console.log ("Cadastro aprovado!")
} else {
    console.log ("Quantiade máxima atingida, não é possível realizar cadastro")
}

let nomePalestrantes = ("José, William, Beatriz e Lucas")
let listaParticipantes = ("Agnes, Brenda, Carlos, Cícera, Monique, Neto, Paulo...")
console.log ("Os palestrantes do evento serão:", nomePalestrantes)
console.log ("Lista dos participantes:", listaParticipantes)