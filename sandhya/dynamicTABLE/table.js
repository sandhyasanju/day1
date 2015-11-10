function addtable() {
  var element=document.getElementById('div');
  var table=document.createElement('table');
  var tr=document.createElement('tr');
  var td=document.createElement('td');
     td.innerHTML= '1';
  tr.appendChild(td);
  table.appendChild(tr);
  element.appendChild(table);
}
