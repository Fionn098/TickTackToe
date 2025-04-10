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
      Spielstand[indexrow][indexnum] = 1 ; 
      let n = 3 ; 
      weristdran();
      hatgewonnenReihe(indexrow,indexnum,n);
      gewonnennnnnSpalte(n) ;
      diagonaleGewinn(n); 
      istUnentschieden(); 
      console.log(Spielstand) ;
      


   } else {
      document.getElementById(boxnumber).innerHTML= "<div style class = 'Kreuz' '></div>" ;   
      document.getElementById('spieler').textContent= "Nun kommt Kreis" ;    
      let indexnum =boxnumber.substring(1) * 1 ; 
      let indexrow =boxrow * 1 ; 
      Spielstand[indexrow][indexnum] = 2 ;    
      let n = 6 ; 
      weristdran() ;
      hatgewonnenReihe(indexrow,indexnum,n) ;
      gewonnennnnnSpalte(n) ;
      diagonaleGewinn(n);
      istUnentschieden();  
      console.log(Spielstand) ;
      
      
      
      
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




function gewonnennnnnSpalte(n) {
   for (let x = 0;x<3;x++) {
     if (Spielstand[0][x] + Spielstand[1][x] + Spielstand[2][x] == n ) {
       alert(Spielerdran + ' hat gewonnen')
      }
   }                   
}



function hatgewonnenReihe (indexrow,indexnum,n) {
   if (indexnum >= 1) {
      if (Spielstand[indexrow][indexnum] + Spielstand[indexrow][indexnum+1] + Spielstand[indexrow][indexnum-1] == n ) {
         alert(Spielerdran + ' hat gewonnen')
      }
   } else if (indexnum ==0 ) {
      if (Spielstand[indexrow][indexnum] + Spielstand[indexrow][indexnum+1] + Spielstand[indexrow][indexnum+2] == n) {
         alert(Spielerdran + ' hat gewonnen')
      } 
   } else if (indexnum == 2) {
      if (Spielstand[indexrow][indexnum] + Spielstand[indexrow][indexnum-1] + Spielstand[indexrow][indexnum-2] == n) {
         alert(Spielerdran + ' hat gewonnen')
      }   
   }
   
}

 
/* 
funktioniert nicht,da es am rechten Rand von der Mitte ausgeht
easyfix= rand abgrenzen 
best solution = arry.length herausfinden,dann - 1 
*/



/* 
boxen mit Funktionen generieren 
*/