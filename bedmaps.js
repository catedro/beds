function doThis(){
document.write('holaaaa');
}

function showBar(){
document.write('hola2');
}

function showTopBar(){
  document.write('asi es');  
    /*
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
*/
}

function showDesktop(){
alert('aqui');
}


function setAllSectors(){
  for (let i=0; i<10;i++){
    document.getElementById(i).checked = document.getElementById('Todo').checked;
  }
  showDesktop(); 
}
