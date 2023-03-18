
function calcular() {
  var num = parseInt(document.getElementById("txti").value);
  var table = "<table>";
  for (var i = 1; i <= 10; i++) {
    table += "<tr><td>" + num + " x " + i + " = </td><td>" + (num * i) + "</td></tr>";
  }
  table += "</table>";
  document.getElementById("table-container").innerHTML = table;
}

