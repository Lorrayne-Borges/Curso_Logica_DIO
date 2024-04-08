let num_vitorias = 3000
let num_derrotas = 107
let nivelAtual = " "

function resultadoRank(num_vitorias, num_derrotas){
	return num_vitorias - num_derrotas
}

let vitorias = resultadoRank(num_vitorias, num_derrotas)

console.log("O saldo de vitórias é: " + vitorias)

if (vitorias < 10){
nivelAtual = ("Ferro")
}

else if (vitorias >= 11 && vitorias <= 20){
nivelAtual = ("Bronze")
}

else if (vitorias >= 21 && vitorias <= 50){
nivelAtual = ("Prata")
}

else if (vitorias >= 51 && vitorias <= 80){
nivelAtual = ("Ouro")
}

else if (vitorias >= 81 && vitorias <= 90){
nivelAtual = ("Diamante")
}

else if (vitorias >= 91 && vitorias <= 100){
nivelAtual = ("Lenndário")
}

else {
nivelAtual = ("Imortal")
}

console.log("A heroina tem saldo de: " + vitorias + " e está no nível: " + nivelAtual)
