$(document).ready(function(){
  $("#btn1").click(function(){
    var nombre=$("#nombre").val();
    var cantidadCaracteres = nombre.length;
    $("#resultado").html("El Texto tiene"+ cantidadCaracteres + "caracteres ");
  });
  $("#btn2").click(function(){
    const nota1 = parseFloat($("#nota1").val());
    const nota2 = parseFloat($("#nota1").val());
    const nota3 = parseFloat($("#nota1").val());
    const promedio=(nota1+nota2+nota3)/3;
    if (promedio >=70) {
      $("#resultado").html("El promedio es:" + promedio.toFixed(2) + "Aprobó");
    } else {
      $("#resultado").html("El promedio es:" + promedio.toFixed(2) + "No aprobó");
    }
    
  });
})