/* -------------------------------------------------------------------------- */
/*                  Exercițiul 1: Calcularea sumei vârstelor                  */
/* -------------------------------------------------------------------------- */
console.log('Exercițiul 1: Calcularea sumei vârstelor');

var studenti = {
    student1: { nume: "John", varsta: 20 },
    student2: { nume: "Alice", varsta: 22 },
    student3: { nume: "Mark", varsta: 19 }
  };

  var varstaStudenti=0;
  for (var student in studenti) {
    varstaStudenti += studenti[student].varsta;
}

console.log("Suma vârstelor studenților este: " + varstaStudenti);

/* -------------------------------------------------------------------------- */
/*                Exercițiul 2: Concatenarea numelor de familie               */
/* -------------------------------------------------------------------------- */
console.log(' Exercițiul 2: Concatenarea numelor de familie');

var familii = {
    familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
    familie2: { numeTata: "Radu", numeMama: "Georgescu" }
  };

var numeFamilie = "";
for(var numfamilii in familii){
    numeFamilie += familii[numfamilii].numeTata + " " + familii[numfamilii].numeMama + ", ";
}

console.log("Numele familiilor sunt: "+ numeFamilie);

/* -------------------------------------------------------------------------- */
/*                Exercițiul 3: Găsirea celui mai mare punctaj                */
/* -------------------------------------------------------------------------- */
console.log(' Exercițiul 3: Găsirea celui mai mare punctaj');

var elevi = {
    elev1: { nume: "Maria", punctaj: 80 },
    elev2: { nume: "Alex", punctaj: 95 },
    elev3: { nume: "Andrei", punctaj: 85 }
  };

  var maxPunctaj=0;
  for (var elev in elevi){
    if(elevi[elev].punctaj > maxPunctaj){
        maxPunctaj = elevi[elev].punctaj
    }
  }
  console.log("Cel mai mare punctaj este: "+ maxPunctaj);

  /* -------------------------------------------------------------------------- */
  /*       Exercițiul 4: Verificarea existenței unui email într-un obiect       */
  /* -------------------------------------------------------------------------- */
  console.log(' Exercițiul 4: Verificarea existenței unui email într-un obiect');

  var utilizatori = {
    utilizator1: { nume: "John", email: "john@example.com" },
    utilizator2: { nume: "Alice", email: "alice@example.com" }
  };

  function verificaMail(EmailCautat){
    for ( var email in utilizatori){
        if(utilizatori[email].email == EmailCautat){
            return true;
        }
    }
    return false;
  }

var adresaCautata = "john@example.com";
var existaAdresa = verificaMail(adresaCautata);

console.log("Există adresa de email " + adresaCautata + "-> " + existaAdresa);

/* -------------------------------------------------------------------------- */
/*    Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect    */
/* -------------------------------------------------------------------------- */
console.log(' Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect ');
var angajati = {
    departament1: { nume: "John", varsta: 30 },
    departament2: { nume: "Alice", varsta: 35 },
    departament3: { nume: "Mark", varsta: 28 }
  };

var numarPersoane = Object.keys(angajati).length;

console.log("Numărul total de persoane este: " + numarPersoane);

/* -------------------------------------------------------------------------- */
/*    Exercițiul 6: Verificarea existenței unui departament într-un obiect    */
/* -------------------------------------------------------------------------- */
console.log(' Exercițiul 6: Verificarea existenței unui departament într-un obiect');
var companie = {
    departamentIT: { nume: "John", vechime: 5 },
    departamentVanzari: { nume: "Alice", vechime: 3 }
  };
  var departamentCautat = 'departamentIT';

  if (companie.hasOwnProperty(departamentCautat)) {
    console.log("Departamentul " + departamentCautat + " există în obiectul angajati.");
  } else {
    console.log("Departamentul " + departamentCautat + " nu există în obiectul angajati.");
  }

  /* -------------------------------------------------------------------------- */
  /*     Exercițiul 7: Verificarea existenței unei calificări într-un obiect    */
  /* -------------------------------------------------------------------------- */
  console.log(' Exercițiul 7: Verificarea existenței unei calificări într-un obiect ');
  var candidati = {
    candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
    candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] }
  };

  function verificaCalificare(calificareCautata) {
    
    for (var candidat in candidati) {
      if (candidati.hasOwnProperty(candidat)) {
        
        if (candidati[candidat].calificari.includes(calificareCautata)) {
          return true; 
        }
      }
    }
    return false; 
  }
  
  // Exemplu de utilizare
  var calificareCautata = "JavaScript";
  var existaCalificare = verificaCalificare(calificareCautata);
  
  console.log("Există calificarea " + calificareCautata + "? " + existaCalificare);
  