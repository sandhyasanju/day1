function GenerateTable() {
    //Build an array containing Customer records.
    var students = new Array();
    students.push(["student Id", "Name", "place"]);
    students.push([1, "sandhya", "guntur"]);
    students.push([2, "harika", "guntur"]);
    students.push([3, "Siva", "tenali"]);
    students.push([4, "swetha", "tadepalli"]);

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = students[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = students[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < students.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = students[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function Addrows() {
  var row=document.createElement("table");
  var tr1=document.createElement("tr");
  var tr2=document.createElement("tr");
  var td11=document.createElement("td");
  var td12=document.createElement("td");
  var td21=document.createElement("td");
  var td22=document.createElement("td");

   td11.innerHTML='5';
   td12.innerHTML="ssss";
   td21='6';
   td22.innerHTML="yyyy";

   tr1.appendChild(td11);
   tr1.appendChild(td12);
   tr2.appendChild(td21);
   tr2.appendChild(td22);

   row.appendChild(tr1);
   row.appendChild(tr2);
   var divtable = document.getElementById("dvTable");
   divtable.innerHTML="";
   divtable.appendChild(row);
}
