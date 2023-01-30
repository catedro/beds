
function Chk(n,s){
  return '<label><input onclick="Show()" type="checkbox" Id='+n+' name='+s+' checked>'+s+'</label>';
}  
    
function fME(x) {
    var nR,nB;
    nR=(x.id).substr(0,(x.id).indexOf('-'));
    nB=(x.id).substr((x.id).indexOf('-')+1,(x.id).lenght);
    if(nB!=-1){      
      document.getElementById("Pac").innerHTML= '<table>'+
        '<tr><td colspan="2">'+Z[nR].P[nB].N+' (<b>'+Z[nR].P[nB].D+'</b>)</td></tr>'+
        '<tr><td '+ (Z[nR].P[nB].A>65 ? ' style="background-color:red;color:white;">':'>')+'Edad:<b> '+Z[nR].P[nB].A+'</b> años</td>'+
        '<td '+(Z[nR].P[nB].I>30 ? ' style="background-color:red;color:white;">':'>')+'Ingreso:<b> '+Z[nR].P[nB].I+'</b> días</td></tr>'+
        '</table>';
 document.getElementById("Btn").innerHTML='');   
 //document.getElementById("demo").innerHTML =  //document.getElementById("myDIV").children[0].innerHTML;

    }
 }
    
 function fMO(x) {
    document.getElementById("Pac").innerHTML= ''; 
    document.getElementById("Btn").innerHTML= '';
 }
