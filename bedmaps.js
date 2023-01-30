function doThis(){
document.write('hola');
}

function showTopBar(){
  document.write('<div class="cout"><div class="c1"><label id="label"><input type="checkbox" Id="Todo" onclick="AllS()" checked><b>Marcar Todo</b> </label><br/><label id="label"><input onclick="Show()" type="checkbox" Id="huecos" name="huecos"><b>Camas libres</b> </label></div><div class="c2">'+Chk('0','1-O')+Chk('1','1-A')+Chk('2','1-B')+Chk('3','1-C')+'</div><div class="c3">'+Chk('4','2-A')+Chk('5','2-B')+'</div><div class="c4">'+Chk('6','3-A')+Chk('7','3-B')+'</div><div class="c5">'+Chk('8','4-A')+Chk('9','4-B')+'</div><div class="c22" Id="S1"></div><div class="c23" Id="S2"></div><div class="c24" Id="S3"></div><div class="c25" Id="S4"></div><div class="c6" Id="Pac"></div><div class="c7" Id="Btn"></div></div>  <div Id="frm"></div>');
}

function Chk(n,s){
  return '<label><input onclick="Show()" type="checkbox" Id='+n+' name='+s+' checked>'+s+'</label>';
}  
