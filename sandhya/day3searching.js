
function inserrow() {
  var tableadd=document.getElementById("table20");
  var tb=document.createElement("table");
  var row=document.createElement("tr");
  var cell1=document.createElement("input");
  var cell2=document.createElement("input");
  var cell3=document.createElement("input");
  var cell4=document.createElement("input");
  var cell5=document.createElement("input");

  cell1.innerHTML="";
  cell2.innerHTML="";
  cell3.innerHTML="";
  cell4.innerHTML="";
  cell5.innerHTML="";
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);
  tb.appendChild(row);
  tableadd.appendChild(tb);

}
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
