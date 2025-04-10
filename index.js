let i = 0 ; 
let n = 0 ; 
let Unentschiedenpunkte = 0 ; 
let Gewinner;

const Spielstand =[
   ['x','x','x'],
   ['x','x','x'],
   ['x','x','x']
] ; 


function replace1 (boxnumber,boxrow) {
   i++ ; 
   Unentschiedenpunkte=Unentschiedenpunkte+1;
   if (i % 2 == 0) {
      document.getElementById(boxnumber).innerHTML= "<div style class = 'Kreis'></div>" ;  
      document.getElementById('spieler').textContent= "Jetzt kommt Kreuz" ; 
      let indexnum =boxnumber.substring(1) * 1 ;  
      let indexrow =boxrow * 1 ;
      Spielstand[indexrow][indexnum] = 0 ; 
      let n = 0 ; 
      weristdran();
      gewonnennnnnReihe(n);
      gewonnennnnnSpalte(n)
      diagonaleGewinn(n); 
      istUnentschieden(); 
      


   } else {
      document.getElementById(boxnumber).innerHTML= "<div style class = 'Kreuz' '></div>" ;   
      document.getElementById('spieler').textContent= "Nun kommt Kreis" ;    
      let indexnum =boxnumber.substring(1) * 1 ; 
      let indexrow =boxrow * 1 ; 
      Spielstand[indexrow][indexnum] = 1 ;    
      let n = 3 ; 
      weristdran() ;
      gewonnennnnnReihe(n)
      gewonnennnnnSpalte(n)
      diagonaleGewinn(n);
      istUnentschieden(); 
      
      
      
      
   }
  
} 



function diagonaleGewinn (n) {
   if (Spielstand[0][0]+ Spielstand [1][1] + Spielstand[2][2] == n) {
      alert(Spielerdran + ' hat gewonnen') 
      Gewinner = 1
   } else if (Spielstand[0][2] + Spielstand[1][1] + Spielstand[2][0] == n) {
      alert(Spielerdran + ' hat gewonnen') 
      Gewinner = 1 
   } 
}

function istUnentschieden () {
   if (Gewinner === undefined && Unentschiedenpunkte == 9 ) {
      alert('Das Spiel endet unentschieden') 
   } 
}



function weristdran () {
   if (i % 2 == 0) {
   Spielerdran = 'Kreis'
} else {
   Spielerdran = 'Kreuz'
}
}


function gewonnennnnnReihe(n) {
for (let x = 0;x<3;x++) {
  if (Spielstand[x][0] + Spielstand[x][1] + Spielstand[x][2] == n ) {
    alert(Spielerdran + ' hat gewonnen')
      }
   }                   
}

function gewonnennnnnSpalte(n) {
   for (let x = 0;x<3;x++) {
     if (Spielstand[0][x] + Spielstand[1][x] + Spielstand[2][x] == n ) {
       alert(Spielerdran + ' hat gewonnen')
      }
   }                   
}









/* 
boxen mit Funktionen generieren 
*/