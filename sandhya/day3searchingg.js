function search(){
  var searchterm=document.getElementById("searchterm").value;
  var targetTable=document.getElementById("table20");
  for(var r=0;r<targetTable.rows.length; r++){
    for(var c=0;c<targettable.rows[i].cells.length; c++){
      if(searchterm.value==targetTable.rows[i].cells[j].innerHTML){
        targetTable.rows.item(r).style.background-color=pink;
      }
      else {
        targetTable.rows.item(r).style.background-color=black;
      }
    }
  }
}
