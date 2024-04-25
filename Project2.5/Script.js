var Eingabeuberprufung = false;
var ausgabe = 0;
var Kontozahl = 0;
var Seitenzahl = 1;


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
        switch(Seitenzahl){
            case 1:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 2.01;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 2:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.15;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 3:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.89;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 4:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.52;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
        }



    
    }
}


function Papierzwei(){

    if(Eingabeuberprufung == true){

        switch(Seitenzahl){
            case 1:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.79;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 2:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.22;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;


            case 3:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.45;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 4:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.37;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
        }



   
    }
    
}

function Papierdrei(){
    if(Eingabeuberprufung == true){

        switch(Seitenzahl){
            case 1:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.58;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 2:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.19;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 3:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.17;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 4:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.63;  // 
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
        }



    
    }
    
}

function Papiervier(){

    
    if(Eingabeuberprufung == true){


        switch(Seitenzahl){
            case 1:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 0.77;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                            Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 2:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.11;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                            Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 3:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.28;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                            Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 4:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.25;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                            Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input;
                document.getElementById('Konten').innerHTML = Kontozahl;
        }



    
    }
    
}

function Papierfunf(){
    if(Eingabeuberprufung == true){

        switch(Seitenzahl){
            case 1:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.43;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 2:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.26;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 3:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.33;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input
                document.getElementById('Konten').innerHTML = Kontozahl;
            case 4:
                var input = document.getElementById("Summeneingabe").value;
                var Platzhalter = input * 1.48;
                ausgabe += Platzhalter; //        Platzhalter für reelle Zahl                           Platzhalter für reelle Zahl
                document.getElementById('ausgabe').innerHTML = ausgabe;
                Kontozahl = Kontozahl -  input
                document.getElementById('Konten').innerHTML = Kontozahl;
        }



   




    }
    
}
function Kontostand(){
    
    Kontozahl = document.getElementById("Konto").value;
    document.getElementById('Konten').innerHTML = Kontozahl;

}

function Weiter(){
    
    Seitenzahl += 1;
    document.getElementById("Seitenzahl").innerHTML = 'Seite ' + Seitenzahl;
    switch(Seitenzahl){
        case 1:

            document.getElementById("einsein").innerHTML = 'Bitcoin';
            document.getElementById("einzwei").innerHTML = '+101%';
            document.getElementById("einsdrei").innerHTML = '62.159$';

            document.getElementById("zweieins").innerHTML = 'Ethereum';
            document.getElementById("zweizwei").innerHTML = '+79%';
            document.getElementById("zweidrei").innerHTML = '2.973$';

            document.getElementById("dreieins").innerHTML = 'Deutsche Bank AG';
            document.getElementById("dreizwei").innerHTML = '+58%';
            document.getElementById("dreidrei").innerHTML = '15.29$';

            document.getElementById("viereins").innerHTML = 'Tesla inc.';
            document.getElementById("vierzwei").innerHTML = '-33%';
            document.getElementById("vierdrei").innerHTML = '134.24$';

            document.getElementById("funfeins").innerHTML = 'JP Morgen';
            document.getElementById("funfzwei").innerHTML = '+43%';
            document.getElementById("funfdrei").innerHTML = '177.8$';





            break;
        case 2:
            
            document.getElementById("einsein").innerHTML = 'Apple Inc.';
            document.getElementById("einzwei").innerHTML = '+15%';
            document.getElementById("einsdrei").innerHTML = '172.65$';
        
            document.getElementById("zweieins").innerHTML = 'Microsoft Corporation';
            document.getElementById("zweizwei").innerHTML = '+22%';
            document.getElementById("zweidrei").innerHTML = '315.30$';
        
             document.getElementById("dreieins").innerHTML = 'Alphabet Inc.';
            document.getElementById("dreizwei").innerHTML = '+19%';
            document.getElementById("dreidrei").innerHTML = '2887.60$';
        
            document.getElementById("viereins").innerHTML = 'Amazon.com Inc.';
            document.getElementById("vierzwei").innerHTML = '+11%';
            document.getElementById("vierdrei").innerHTML = '3270.59$';
        
            document.getElementById("funfeins").innerHTML = 'Meta Platforms Inc.';
            document.getElementById("funfzwei").innerHTML = '+26%';
            document.getElementById("funfdrei").innerHTML = '336.45$';

            break;
        case 3:
            document.getElementById("einsein").innerHTML = 'NVIDIA Corporation';
            document.getElementById("einzwei").innerHTML = '+89%';
            document.getElementById("einsdrei").innerHTML = '476.21$';

            document.getElementById("zweieins").innerHTML = 'ASML Holding N.V.';
            document.getElementById("zweizwei").innerHTML = '+45%';
            document.getElementById("zweidrei").innerHTML = '658.34$';

            document.getElementById("dreieins").innerHTML = 'Linde plc';
            document.getElementById("dreizwei").innerHTML = '+17%';
            document.getElementById("dreidrei").innerHTML = '384.50$';

            document.getElementById("viereins").innerHTML = 'Novo Nordisk A/S';
            document.getElementById("vierzwei").innerHTML = '+28%';
            document.getElementById("vierdrei").innerHTML = '158.30$';

            document.getElementById("funfeins").innerHTML = 'Adobe Inc.';
            document.getElementById("funfzwei").innerHTML = '+33%';
            document.getElementById("funfdrei").innerHTML = '506.80$';


            break;
        case 4:
            document.getElementById("einsein").innerHTML = 'Shopify Inc.';
            document.getElementById("einzwei").innerHTML = '+52%';
            document.getElementById("einsdrei").innerHTML = '95.47$';

            document.getElementById("zweieins").innerHTML = 'Square Inc.';
            document.getElementById("zweizwei").innerHTML = '+37%';
            document.getElementById("zweidrei").innerHTML = '272.64$';

            document.getElementById("dreieins").innerHTML = 'Palantir Technologies Inc.';
            document.getElementById("dreizwei").innerHTML = '+63%';
            document.getElementById("dreidrei").innerHTML = '23.18$';

            document.getElementById("viereins").innerHTML = 'Zoom Video Communications Inc.';
            document.getElementById("vierzwei").innerHTML = '+25%';
            document.getElementById("vierdrei").innerHTML = '357.81$';

            document.getElementById("funfeins").innerHTML = 'Snowflake Inc.';
            document.getElementById("funfzwei").innerHTML = '+48%';
            document.getElementById("funfdrei").innerHTML = '273.65$';
            break;
    }
}

function Zurück(){

    Seitenzahl = Seitenzahl - 1;
    document.getElementById("Seitenzahl").innerHTML = 'Seite ' + Seitenzahl;

    switch(Seitenzahl){
        case 1:

            document.getElementById("einsein").innerHTML = 'Bitcoin';
            document.getElementById("einzwei").innerHTML = '+101%';
            document.getElementById("einsdrei").innerHTML = '62.159$';

            document.getElementById("zweieins").innerHTML = 'Ethereum';
            document.getElementById("zweizwei").innerHTML = '+79%';
            document.getElementById("zweidrei").innerHTML = '2.973$';

            document.getElementById("dreieins").innerHTML = 'Deutsche Bank AG';
            document.getElementById("dreizwei").innerHTML = '+58%';
            document.getElementById("dreidrei").innerHTML = '15.29$';

            document.getElementById("viereins").innerHTML = 'Tesla inc.';
            document.getElementById("vierzwei").innerHTML = '-33%';
            document.getElementById("vierdrei").innerHTML = '134.24$';

            document.getElementById("funfeins").innerHTML = 'JP Morgen';
            document.getElementById("funfzwei").innerHTML = '+43%';
            document.getElementById("funfdrei").innerHTML = '177.8$';





            break;
        case 2:
            
            document.getElementById("einsein").innerHTML = 'Apple Inc.';
            document.getElementById("einzwei").innerHTML = '+15%';
            document.getElementById("einsdrei").innerHTML = '172.65$';
        
            document.getElementById("zweieins").innerHTML = 'Microsoft Corporation';
            document.getElementById("zweizwei").innerHTML = '+22%';
            document.getElementById("zweidrei").innerHTML = '315.30$';
        
             document.getElementById("dreieins").innerHTML = 'Alphabet Inc.';
            document.getElementById("dreizwei").innerHTML = '+19%';
            document.getElementById("dreidrei").innerHTML = '2887.60$';
        
            document.getElementById("viereins").innerHTML = 'Amazon.com Inc.';
            document.getElementById("vierzwei").innerHTML = '+11%';
            document.getElementById("vierdrei").innerHTML = '3270.59$';
        
            document.getElementById("funfeins").innerHTML = 'Meta Platforms Inc.';
            document.getElementById("funfzwei").innerHTML = '+26%';
            document.getElementById("funfdrei").innerHTML = '336.45$';

            break;
        case 3:
            document.getElementById("einsein").innerHTML = 'NVIDIA Corporation';
            document.getElementById("einzwei").innerHTML = '+89%';
            document.getElementById("einsdrei").innerHTML = '476.21$';

            document.getElementById("zweieins").innerHTML = 'ASML Holding N.V.';
            document.getElementById("zweizwei").innerHTML = '+45%';
            document.getElementById("zweidrei").innerHTML = '658.34$';

            document.getElementById("dreieins").innerHTML = 'Linde plc';
            document.getElementById("dreizwei").innerHTML = '+17%';
            document.getElementById("dreidrei").innerHTML = '384.50$';

            document.getElementById("viereins").innerHTML = 'Novo Nordisk A/S';
            document.getElementById("vierzwei").innerHTML = '+28%';
            document.getElementById("vierdrei").innerHTML = '158.30$';

            document.getElementById("funfeins").innerHTML = 'Adobe Inc.';
            document.getElementById("funfzwei").innerHTML = '+33%';
            document.getElementById("funfdrei").innerHTML = '506.80$';


            break;
        case 4:
            document.getElementById("einsein").innerHTML = 'Shopify Inc.';
            document.getElementById("einzwei").innerHTML = '+52%';
            document.getElementById("einsdrei").innerHTML = '95.47$';

            document.getElementById("zweieins").innerHTML = 'Square Inc.';
            document.getElementById("zweizwei").innerHTML = '+37%';
            document.getElementById("zweidrei").innerHTML = '272.64$';

            document.getElementById("dreieins").innerHTML = 'Palantir Technologies Inc.';
            document.getElementById("dreizwei").innerHTML = '+63%';
            document.getElementById("dreidrei").innerHTML = '23.18$';

            document.getElementById("viereins").innerHTML = 'Zoom Video Communications Inc.';
            document.getElementById("vierzwei").innerHTML = '+25%';
            document.getElementById("vierdrei").innerHTML = '357.81$';

            document.getElementById("funfeins").innerHTML = 'Snowflake Inc.';
            document.getElementById("funfzwei").innerHTML = '+48%';
            document.getElementById("funfdrei").innerHTML = '273.65$';
            break;
    }

}

