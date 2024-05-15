$(document).ready(function(){
    //codigo (variables , metodos de jquery)//
    $("#btn_mostrar").click(function(){
        $("p").show();
    });
    $("#btn_ocultar").click(function(){
        $("p").hide();      
    });
    $("#btn_mostrar_despacio").click(function(){
        //.show puede se "slow" o colocar tiempo en milisegundos 1000=1seg//
        $("p").show(2000);      
    });
    $("#btn_ocultar_despacio").click(function(){
        $("p").hide("slow"); 
        $("#p").show(2000)     
    });
    $("#btn_mostrar_rapido").click(function(){
        $("p").show();      
    });
    
    $("#btn_ocultar_slide").click(function(){
        $("p").slideUp(2000);      
    });
    $("#btn_mostrar_slide").click(function(){
        $("p").slideDown(2000);      
    });
    $("#btn_slide_toogle").click(function(){
        $("p").slideToggle();
        $("#p7").show(500)
        $("#p7").text("Este elemento no se oculto") 

    });
       
});