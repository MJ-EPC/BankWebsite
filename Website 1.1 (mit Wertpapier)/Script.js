var Eingabeuberprufung = false;
var ausgabe = 0;
var Kontozahl = 0;


function myFunction(){
                
    var input = document.getElementById("Summeneingabe").value;
    if (input > 0) {

        Eingabeuberprufung = true;

    }
    else{

        Eingabeuberprufung = false;
    }
    //document.write(input);
}

function Papiereins(){
    
    if(Eingabeuberprufung == true){
    var input = document.getElementById("Summeneingabe").value;
    var Platzhalter = input * 2.01;
    ausgabe += Platzhalter; //        Platzhalter für reelle Zahl
    document.getElementById('ausgabe').innerHTML = ausgabe;
    Kontozahl = Kontozahl -  input;
    document.getElementById('Konten').innerHTML = Kontozahl;
    }
}


function Papierzwei(){

    if(Eingabeuberprufung == true){
    var input = document.getElementById("Summeneingabe").value;
    var Platzhalter = input * 1.79;
    ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
    document.getElementById('ausgabe').innerHTML = ausgabe;
    Kontozahl = Kontozahl -  input;
    document.getElementById('Konten').innerHTML = Kontozahl;
    }
    
}

function Papierdrei(){
    if(Eingabeuberprufung == true){
    var input = document.getElementById("Summeneingabe").value;
    var Platzhalter = input * 1.58;  // 
    ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
    document.getElementById('ausgabe').innerHTML = ausgabe;
    Kontozahl = Kontozahl -  input;
    document.getElementById('Konten').innerHTML = Kontozahl;
    }
    
}

function Papiervier(){
    if(Eingabeuberprufung == true){
    var input = document.getElementById("Summeneingabe").value;
    var Platzhalter = input * 0.77;
    ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                            Platzhalter für reelle Zahl
    document.getElementById('ausgabe').innerHTML = ausgabe;
    Kontozahl = Kontozahl -  input;
    document.getElementById('Konten').innerHTML = Kontozahl;
    }
    
}

function Papierfunf(){
    if(Eingabeuberprufung == true){
    var input = document.getElementById("Summeneingabe").value;
    var Platzhalter = input * 1.43;
    ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
    document.getElementById('ausgabe').innerHTML = ausgabe;
    Kontozahl = Kontozahl -  input
    document.getElementById('Konten').innerHTML = Kontozahl;
    }
    
}
function Kontostand(){
    
    Kontozahl = document.getElementById("Konto").value;
    document.getElementById('Konten').innerHTML = Kontozahl;

}
