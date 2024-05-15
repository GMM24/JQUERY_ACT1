
$(document).ready(function() {
    $("#btn_agregar").click(function() {
      var lastRow = $("tbody tr:last");
      var newRow = lastRow.clone();
      newRow.find("input").val(""); 
      newRow.appendTo("tbody");
    });
  
    $("#btn_quitar").click(function() {
      var numRows = $("tbody tr").length;
        if (numRows > 1) {
        $("tbody tr:last").remove();
      } else {
        alert("No se puede eliminar la última fila de la tabla.");
      }
    });
  });
  