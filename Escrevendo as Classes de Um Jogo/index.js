class Heroina {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "Feiticeira") {
            ataque = "Magia";
        } else if (this.tipo === "Guerreira") {
            ataque = "Espada e armadura";
        } else if (this.tipo === "Lutadora") {
            ataque = "Artes Marciais";
        } else if (this.tipo === "Atiradora de elite") {
            ataque = "Armas de fogo";
        }
        console.log(`A heroína: ${this.nome}, com idade de: ${this.idade} anos e que é do tipo: ${this.tipo}, atacou usando ${ataque}.`);
    }
}

const heroina1 = new Heroina("Feiticeira Escarlate", 30, "Feiticeira");
const heroina2 = new Heroina("Xena", 37, "Guerreira");
const heroina3 = new Heroina("Viúva Negra", 30, "Lutadora"); 
const heroina4 = new Heroina("Melissandre", 20, "Atiradora de elite");

heroina1.atacar()
heroina2.atacar()
heroina3.atacar()
heroina4.atacar()
