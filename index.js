let i = 0 ; 
let n = 0 ; 
let Unentschiedenpunkte = 0 ;

const Spielstand =[
   ['x','x','x'],
   ['x','x','x'],
   ['x','x','x']
] ; 


function replace1 (boxnumber,boxrow) {
   i=i+1 ; 
   if (i % 2 == 0) {
      document.getElementById(boxnumber).innerHTML= "<div style class = 'Kreis'></div>" ;  
      document.getElementById('spieler').textContent= "Jetzt kommt Kreuz" ; 
      let indexnum =boxnumber.substring(1) * 1 ;  
      let indexrow =boxrow * 1 ;
      Spielstand[indexrow][indexnum] = 0 ; 
      let n = 0 ; 
      hatgewonnenReihe(boxrow,n) ; 
      hatgewonnenSpalte(indexnum,n); 
      diagonaleGewinn(n);


   } else {
      document.getElementById(boxnumber).innerHTML= "<div style class = 'Kreuz' '></div>" ;   
      document.getElementById('spieler').textContent= "Nun kommt Kreis" ;    
      let indexnum =boxnumber.substring(1) * 1 ; 
      let indexrow =boxrow * 1 ; 
      Spielstand[indexrow][indexnum] = 1 ;    
      let n = 3 ;
      hatgewonnenReihe(boxrow,n) ; 
      hatgewonnenSpalte(indexnum,n); 
      diagonaleGewinn(n);
      
      
   }
  
} 




function hatgewonnenReihe (boxrow,n) { 
    if (reiheGewinn(boxrow,n))  {
        alert('Reihe')
    } else {
      Unentschiedenpunkte + 1 
    }

} 

function hatgewonnenSpalte (boxnumber,n) { 
   if (spalteGewinn(boxnumber,n))  {
       alert('Spalte')
   } else {
     Unentschiedenpunkte + 1 
   }

}



function reiheGewinn (boxrow,n) {
   return Spielstand[boxrow][0] + Spielstand[boxrow][1] + Spielstand[boxrow][2] == n ;  
}
 
function spalteGewinn (boxnumber,n) {
   return Spielstand[0][boxnumber] + Spielstand[1][boxnumber] + Spielstand[2][boxnumber] == n ;   
}

function diagonaleGewinn (n) {
   if (Spielstand[0][0]+ Spielstand [1][1] + Spielstand[2][2] == n) {
      alert('Diagonal') 
   } else if (Spielstand[0][2] + Spielstand[1][1] + Spielstand[2][0] == n) {
      alert('diagona')
   }
}



function istUnentschieden () {
   if (Gewinner === undefined && Spielstand[0] + Spielstand[1] + Spielstand[2] + Spielstand[3] + Spielstand[4] + Spielstand[5] + Spielstand[6] + Spielstand[7] + Spielstand[8] ==5 ) {
      alert('Das Spiel endet unentschieden') 
   } else {
    console.log(Spielstand.valueOf())
   }

}


/* 
boxen mit Funktionen generieren 
*/