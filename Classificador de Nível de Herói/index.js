let nome_heroi = "Daenerys mãe dos dragões"
let qtd_xp = 100000
let nivel_heroi

if (qtd_xp < 1000){
nivel_heroi = "Ferro" }
else if (qtd_xp === 1001 && qtd_xp <= 2000){
nivel_heroi = "Bronze"}
else if (qtd_xp >= 2001 && qtd_xp <= 5000){
nivel_heroi = "Prata"}
else if (qtd_xp >= 5001 && qtd_xp <= 7000){
nivel_heroi = "Ouro"}
else if (qtd_xp >= 7001 && qtd_xp <= 8000){
nivel_heroi = "Platina"}
else if (qtd_xp >= 8001 && qtd_xp <= 9000){
nivel_heroi = "Ascendente"}
else if (qtd_xp >= 9001 && qtd_xp <= 10000){
nivel_heroi = "Imortal"}
else {
    nivel_heroi = "Radiante"
}

console.log("A heroína de nome:", nome_heroi, "-", "Está no nível:", nivel_heroi)
