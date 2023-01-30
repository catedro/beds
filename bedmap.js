function doThis(){
    document.write('holaaaa');
    }
    
    
    function showTopBar(){
        'div class="cout"><div class="c1"><label id="label"><input type="checkbox" Id="Todo" onclick="setAllSectors()" checked><b>Marcar Todo</b> </label><br/>'+
        '<label id="label"><input onclick="showDesktop()" type="checkbox" Id="huecos" name="huecos"><b>Camas libres</b> </label></div>'+
        '<div class="c2"><label><input onclick="Show()" type="checkbox" Id="0" name="1-0" checked>1-0</label>'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="1" name="1-A" checked>1-A</label>'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="2" name="1-B" checked>1-B</label>'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="3" name="1-C" checked>1-C</label></div><div class="c3">'+   
        '<label><input onclick="showDesktop()" type="checkbox" Id="4" name="2-A" checked>2-A</label>'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="5" name="2-BA" checked>2-B</label></div><div class="c4">'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="6" name="3-A" checked>3-A</label>'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="7" name="3-B" checked>3-B</label></div><div class="c5">'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="8" name="4-A" checked>4-A</label>'+
        '<label><input onclick="showDesktop()" type="checkbox" Id="9" name="4-B" checked>1-B</label>'+
        '</div><div class="c22" Id="S1"></div><div class="c23" Id="S2"></div><div class="c24" Id="S3"></div>'+
        '<div class="c25" Id="S4"></div><div class="c6" Id="Pac"></div><div class="c7" Id="Btn"></div></div>  <div Id="frm"></div>');
    }

    
    
    function setAllSectors(){
      for (let i=0; i<10;i++){
        document.getElementById(i).checked = document.getElementById('Todo').checked;
      }
      showDesktop(); 
    }


function showDesktop(){
    var nSec=Z[0].S;
     var s;
     var aChk=[];
    
     for (let i=0; i<10;i++){
      if (document.getElementById(i).checked){ aChk.push(document.getElementById(i).name);}
     }
    
     s='<div class="main-container"><ul class="columns">';
          
     for (let x=0; x<Z.length;x++){
      if(Z[x].S != nSec){nSec = Z[x].S;} 
      if(aChk.includes(nSec)){
        if(document.getElementById("huecos").checked){
          if((Z[x].C-Z[x].O)!=0){
            s =s+Room(x);    
          }
        }else{
          s=s+Room(x);
        }
      }
     document.getElementById("frm").innerHTML = s+'</ul></div>';
     }
    }
      
    function Room(r){
    var s;
    s='<li class="column S'+Z[r].S[0]+'"><div class="hd h'+(Z[r].C-Z[r].O)+'"><b>'+ Z[r].H+'</b> ('+Z[r].S+')</div><ul class="room" id="'+Z[r].H+'">';
    for(let j=0;j<Z[r].C;j++){
      var s1,s2,s3,s4,b;
    
      if (j<Z[r].P.length){ s1= Z[r].P[j].N; s2= Z[r].P[j].D; s3= Z[r].P[j].A; s4=Z[r].P[j].I; b=j;}
      else{s1=''; s2='';s3='';s4='';b=-1;}  
      s=s+'<li class="bed '+ ((s3>65 || s4>45) ? 'l1 ': s4>30 ? 'l0 ':'')+'"><div Id="'+r+'-'+b+'" onMouseEnter="fME(this)" onMouseOut="fMO(this)">'+s1+'</div><div Id="'+r+'-'+b+'" onMouseEnter="fME(this)" onMouseOut="fMO(this)"><b>'+s2+'</b></div></li>';
    }
    return s+'</ul></li>';
    }
    
 function fME(x) {
      
      }
    
    function fMO(x) {
      document.getElementById("Pac").innerHTML= ''; 
      document.getElementById("aBtn").innerHTML= ''; 
    }    
    
