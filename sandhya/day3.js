function student() {
  var students = new Array ();
    students.push(["student id", "student name", "gender", "college", "work for"]);
    students.push(['1', "sandhya", "female", "vvit", "quality people"]);
    students.push(['2', "harika", "female", "vvit", "quality people"]);
    students.push(['3', "siva", "male","vvit", "quality people" ]);
    students.push(['4', "swetha", "female", "sss", "quality people"]);
    students.push(['5', "sai krishna", 'male', "sss", "finday"]);
    students.push(['6',"bharath", "male", "sss", "finday"]);
    students.push(['7', "vinod", "male", "ssss", "finday"]);
    students.push(['8', "shilpa", "female", "sss", "finday"]);

  var table = document.createElement("TABLE");
    table.border = '1';

    var columnCount = students[0].length;

    var row = table.insertRow(-1);
    for( var i=0; i<columnCount; i++){
      var headerCell = document.createElement("TH");
       headerCell.innerHTML = students[0][i];
       row.appendChild(headerCell);
    }
    for( i=1; i<students.length; i++){
      row= table.insertRow(-1);
      for(var j=0; j<columnCount; j++){
        var cell= row.insertCell(-1);
        cell.innerHTML=students[i][j];
      }
    }
    var element= document.getElementById("div1");
    element.innerHTML="";
    element.appendChild(table);
    var search=document.createElement("input");
    element.appendChild(search);
    var button=document.getElementById("butt");
    element.appendChild(button);
}
function mysearch() {
  var searchterm=document.getElementById("input").value;
  var targetTable=document.getElementsByTagName("table");
  for(var r=0; r<targetTable.rows.length;r++)
  {
    for(var c=0;c<targetTable.rows[i].cells.length;c++)
    {
      if(searchterm.value==targetTable.rows[i].cells[j].innerHTML)
      {
        targetTable.rows.item(r).style.display="table-row";
      }
      else
        {
          targettable.rows.item(r).style.display="none";
        }
      }
    }
  }
