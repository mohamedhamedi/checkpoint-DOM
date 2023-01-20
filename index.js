
var prixUnitaire ="";
function add1() {
    document.getElementById("imgvide").src =  document.getElementById("img1").src;
    prixUnitaire = document.getElementById("prix1").innerHTML
                                                                                
}

function add2(){
  document.getElementById("imgvide").src =  document.getElementById("img2").src;
  prixUnitaire = document.getElementById("prix2").innerHTML


}
  
function plus(){

     document.getElementById("count").innerHTML++
     var total = prixUnitaire * document.getElementById("count").innerHTML;
     document.getElementById("total").innerHTML = total

    //how to convert string to number?
}
function moin(){
  document.getElementById("count").innerHTML--


}

