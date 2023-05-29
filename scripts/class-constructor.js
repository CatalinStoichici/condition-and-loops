function Carte(titlu, autor, anPublicatie) {
    this.titlu = titlu;
    this.autor = autor;
    this.anPublicatie = anPublicatie;
  }
  
  Carte.prototype.afiseazaDetalii = function() {
    console.log("Titlu: " + this.titlu);
    console.log("Autor: " + this.autor);
    console.log("An Publicatie: " + this.anPublicatie);
  };

  // Inițializare obiect nou folosind constructorul
  var carteNoua = new Carte("Titlul cartii", "Autorul cartii", 2023);
  
  // Afișare obiect în consolă
  console.log(carteNoua);

  // Afișare detaliile cărții utilizând metoda "afiseazaDetalii"
carteNoua.afiseazaDetalii();

//Exercitiul 3

var calculator = {
    rezultat: 0,
    aduna: function(number){
        this.rezultat += number; 
    },
    scade: function(numar){
        this.rezultat -= numar;
    },
    AfiseazaRezultat: function(){
        console.log("Rezultat:" + this.rezultat);
    },
};
//Adunare
calculator.aduna(5);
calculator.AfiseazaRezultat();
//Scadere
calculator.scade(2);
calculator.AfiseazaRezultat();

//Exercitiu 4

function Persoana(name, age){
    this.name = name;
    this.age = age;
}

var PersoanaNoua = new Persoana("Catalin", "23");

Persoana.prototype.prezintaTe(){
    console.log(`
    Numele persoanei este: ${this.name},
    are varsta de  ${this.age}`);
};
PersoanaNoua.prezintaTe();

/* -------------------------------------------------------------------------- */
/*                    Exercițiul cu constructor functions:                    */
/* -------------------------------------------------------------------------- */

function Masina(marca, model, anFabricatie){
    this.marca = marca;
    this.model = model;
    this.anFabricatie = anFabricatie;

    Masina.nrMasiniCreate +=1;
}
Masina.nrMasiniCreate = 0;
Masina.prototype.afiseazaDetalii = function(){
    console.log(`
    Marca masinii:  ${this.marca}, 
    Model: ${this.model}, 
    An de fabricatie ${this.anFabricatie}
    `);
}

var Masina1 = new Masina("Tesla", "model S", "2014");
var Masina2 = new Masina("BMW", "3 series", "2015");

Masina1.afiseazaDetalii();

Masina2.afiseazaDetalii();


var Masina3 = new Masina("BMW", "3 series", "2015");
console.log(Masina);

/* -------------------------------------------------------------------------- */
/*                          Exercițiul cu prototype:                          */
/* -------------------------------------------------------------------------- */

Array.prototype.filtrareNrPare = function(){
    return this.filter(number => number % 2 == 0);
}

const input= [ 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
const output = input.filtrareNrPare();
console.log(output);

/* -------------------------------------------------------------------------- */
/*                    Exercițiul cu clase: FormaGeometrica                    */
/* -------------------------------------------------------------------------- */

class FormaGeometrica{
    static Descriere(){
        console.log("Aceasta este o forma geometrica");
    }
}

class Cerc extends FormaGeometrica{
    constructor(raza){
        super();
        this.raza = raza;
    }
    calculArie(){
        return Math.PI * this.raza * this.raza;
    }
    calculPerimetru(){
        return 2 * Math.PI * this.raza;
    }
}
class Patrat extends FormaGeometrica{
    constructor(latura){
        super();
        this.latura= latura;
    }
    calculArie()
    {
        return this.latura * this.latura;
    }
    calculPerimetru(){
        return 4 * this.latura;
    }
}

FormaGeometrica.Descriere();

const cerc = new Cerc(5);
console.log("Aria cercului este: " + cerc.calculArie());
console.log("Perimetrul cercului este: " + cerc.calculPerimetru());

const patrat = new Patrat(4);
console.log("Aria patratului este: " + patrat.calculArie());
console.log("Perimetrul patratului este: " + patrat.calculPerimetru());
