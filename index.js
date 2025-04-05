let i = 0 ;
const Spielstand =[] ; 
let Gewinner;

function replace1 (boxnumber) {
   i=i+1 ; 
   if (i % 2 == 0) {
   document.getElementById(boxnumber).innerHTML= "<div style class = 'Kreis'></div>" ;  
   document.getElementById('spieler').textContent= "Jetzt kommt Kreuz" ; 
   let indexnum =boxnumber.substring(1) * 1 ;  
   Spielstand[indexnum] = 0 ; 

   } else {
   document.getElementById(boxnumber).innerHTML= "<div style class = 'Kreuz' '></div>" ;   
   document.getElementById('spieler').textContent= "Nun kommt Kreis" ;    
   let indexnum =boxnumber.substring(1) * 1 ;  
   Spielstand[indexnum] = 1 ;    
   }
  
}


function hatgewonnenKreis () {
   if (Spielstand[0] + Spielstand[1] + Spielstand [2] == 0 )  {
      let Gewinner = 'Kreis' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[0] + Spielstand[3] + Spielstand [6] == 0)  {
      let Gewinner = 'Kreis' 
      alert(Gewinner + 'hat gewonnen') 
   } else if (Spielstand[3] + Spielstand[4] + Spielstand [5] == 0)  {
      let Gewinner = 'Kreis' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[6] + Spielstand[7] + Spielstand [8] == 0)  { 
      let Gewinner = 'Kreis' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[1] + Spielstand[4] + Spielstand [7] == 0)  {  
      let Gewinner = 'Kreis' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[2] + Spielstand[5] + Spielstand [8] == 0)  {  
      let Gewinner = 'Kreis' 
      alert(Gewinner + ' hat gewonnen') 
   } else if (Spielstand[0] + Spielstand[4] + Spielstand [8] == 0)  { 
      let Gewinner = 'Kreis' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[2] + Spielstand[4] + Spielstand [6] == 0)  {
      let Gewinner = 'Kreis' 
      alert(Gewinner + ' hat gewonnen')
   }
}
 
function hatgewonnenKreuz () {
   if (Spielstand[0] + Spielstand[1] + Spielstand [2] == 3 )  {
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[0] + Spielstand[3] + Spielstand [6] == 3)  {
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen') 
   } else if (Spielstand[3] + Spielstand[4] + Spielstand [5] == 3)  {
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[6] + Spielstand[7] + Spielstand [8] == 3)  { 
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[1] + Spielstand[4] + Spielstand [7] == 3)  {  
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[2] + Spielstand[5] + Spielstand [8] == 3)  {  
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[0] + Spielstand[4] + Spielstand [8] == 3)  { 
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen')
   } else if (Spielstand[2] + Spielstand[4] + Spielstand [6] == 3)  {
      let Gewinner = 'Kreuz' 
      alert(Gewinner + ' hat gewonnen')
   }
}
  

function istUnentschieden () {
   if (Gewinner === undefined && Spielstand[0] + Spielstand[1] + Spielstand[2] + Spielstand[3] + Spielstand[4] + Spielstand[5] + Spielstand[6] + Spielstand[7] + Spielstand[8] ==5 ) {
      alert('Das Spiel endet unentschieden')
   } 

}

