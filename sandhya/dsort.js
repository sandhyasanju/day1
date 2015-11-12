function table() {
  var 
  var table=document.createElement("table");
  var tr1=document.createElement("tr");
  var tr2=document.createElement("tr");
  var td11=document.createElement("td");
  var td12=document.createElement("td");
  var td13=document.createElement("td");
  var td21=document.createElement("td");
  var td22=document.createElement("td");
  var td23=document.createElement("td");

  td11.innerHTML='1';
  td12.innerHTML="sandhya";
  td13.innerHTML="peruboina";

  td21.innerHTML='2';
  td22.innerHTML="harika";
  td23.innerHTML="kommuri";

  tr1.appendChild(td11);
  tr1.appendChild(td12);
  tr1.appendChild(td13);

  tr2.appendChild(td21);
  tr2.appendChild(td22);
  tr2.appendChild(td23);
  table.appendChild(tr1);
  table.appendChild(tr2);
  div.appendChild(table);
}
