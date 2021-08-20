/* const netflix = 8 ;
const hbo = 6;
const disney = 6;
const amazon = 6; */
let streamming = [8,6,6,6];
let costoStreamming= 0;
let costoCine = 0;
const cine = 6.50;




function calcular(){
  costoStreamming = 0;
  let nPeliculas = document.querySelector('#cantidad_peliculas').value;
  let chNetflix = document.querySelector('.chNetflix').checked;
  let chHbo = document.querySelector('.chHbo').checked;
  let chDisney = document.querySelector('.chDisney').checked;
  let chAmazon = document.querySelector('.chAmazon').checked;
  let parrafo = document.getElementById('parrafo');
  
  for(i=0; i< 4; i++){
    let check = document.getElementsByClassName('check')[i].checked;
    if(check){
      costoStreamming = costoStreamming + streamming[i]
    }else{
      
    }
  }
  costoCine = nPeliculas * cine;

  if(costoStreamming == 0 && costoCine == 0){
    parrafo.innerHTML='<strong>Es enserio no ves peliculas ni tienes servicios de streamming.<br> Aun ves en la televisión? </strong>'
    }else if(costoStreamming === 0){
      parrafo.innerHTML='<strong> Si no tienes contratadas plataformas de Streaming no podemos comparar cual te sale mejor pero ten en cuenta que en promedio cuestan 7 dolares mensuales y la ida al cine este mes te costaria</strong> '+costoCine
    }else if(costoCine>costoStreamming){
    parrafo.innerHTML='Pagar Streamming este mes te sale por '+costoStreamming+' y ir al cine te saldria por'+costoCine+'<strong> por lo tanto te sale mas economico seguir pagando las plataformas</strong>'
    }else{
      parrafo.innerHTML='Pagar Streamming este mes te sale por '+costoStreamming+' y ir al cine te saldria por'+costoCine+'<strong> por lo tanto te sale mas ir al cine</strong>'
    }
}

