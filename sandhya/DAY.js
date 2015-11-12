function student() {
var table=document.createElement("table");
var ele=getElementById("tableTab");

var tr1=document.createElement("tr");
var tr2=document.createElement("tr");
var tr3=document.createElement("tr");
var tr4=document.createElement("tr");

var td11=document.createElement("td");
var td12=document.createElement("td");
var td13=document.createElement("td");
var td14=document.createElement("td");
var td15=document.createElement("td");

var td21=document.createElement("td");
var td22=document.createElement("td");
var td23=document.createElement("td");
var td24=document.createElement("td");
var td25=document.createElement("td");

var td31=document.createElement("td");
var td32=document.createElement("td");
var td33=document.createElement("td");
var td34=document.createElement("td");
var td35=document.createElement("td");

var td41=document.createElement("td");
var td42=document.createElement("td");
var td43=document.createElement("td");
var td44=document.createElement("td");
var td45=document.createElement("td");

td11.innerHTML='1';
td12.innerHTML="sandhya";
td13.innerHTML="female";
td14.innerHTML="vvit";
td15.innerHTML="guntur";

td21.innerHTML='2';
td22.innerHTML="harikha";
td23.innerHTML="female";
td24.innerHTML="vvit";
td25.innerHTML="guntur";

td31.innerHTML='3';
td32.innerHTML="sai shiav";
td33.innerHTML="male";
td34.innerHTML="vvit";
td35.innerHTML="tenali";

 td41.innerHTML='4';
 td42.innerHTML="swetha";
 td43.innerHTML="female";
 td44.innerHTML="mca";
 td45.innerHTML="tadepalli";
tr1.appendChild(td11);
tr1.appendChild(td12);
tr1.appendChild(td13);
tr1.appendChild(td14);
tr1.appendChild(td15);

tr2.appendChild(td21);
tr2.appendChild(td22);
tr2.appendChild(td23);
tr2.appendChild(td24);
tr2.appendChild(td25);

tr3.appendChild(td31);
tr3.appendChild(td32);
tr3.appendChild(td33);
tr3.appendChild(td34);
tr3.appendChild(td35);

tr4.appendChild(td41);
tr4.appendChild(td42);
tr4.appendChild(td43);
tr4.appendChild(td44);
tr4.appendChild(td45);

table.appendChild(tr1);

table.appendChild(tr2);

table.appendChild(tr3);

table.appendChild(tr4);
ele.appendChild(table);
}
