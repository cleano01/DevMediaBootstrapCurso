
   /*         $(function(){
              alert("Olá!");
              });*/

/* Abre modal quando a pagina e acionada
 $(function(){
    //Equivalente ao load de nossa pagina
    
    $("#modal01").modal("show");
    
});*/

/*$(function(){
    //Equivalente ao load de nossa pagina
    
    $("#modal01").modal("show");
    
    setTimeout(function(){
             $("#modal01").modal("hide");   
     },  3000); //usa o tempo para ela ser fechada automaticamente
    
});*/

/*$(function(){
    //Equivalente ao load de nossa pagina
    
    $("#modal01").modal({backdrop:false})//Vem sem o fundo preto do modal
    
    $("#modal01").modal("show");
    
    setTimeout(function(){
             $("#modal01").modal("hide");   
     },  3000); //usa o tempo para ela ser fechada automaticamente
    
});*/


/*
$(function(){
    // equivalente ao load de nossa página
    
    $("#modal01").modal({backdrop:false, keyboard:false});
    
    $("#modal01").modal("show");
    
    setTimeout(function(){
         $("#modal01").modal("hide");          
    }, 3000);
    
    $(".ttp").tooltip({
        animation:false,
        delay : { show : 1000, hide : 5000},
        title : "Titulo Padrão",
        trigger : 'click'
    });
    
    $(".ppv").popover({
        title : "Título do popover",
        trigger : 'hover focus'
    });
    
}); */
   



$(function(){
    // equivalente ao load de nossa página
    
    $("#modal01").modal({backdrop:false, keyboard:false});
    
    $("#modal01").modal("show");
    
    setTimeout(function(){
         $("#modal01").modal("hide");          
    }, 3000);
    
    $(".ttp").tooltip({
        animation:false,
        delay : { show : 1000, hide : 5000},
        title : "Titulo Padrão",
        trigger : 'click'
    });
    
    $(".ppv").popover({
        title : "Título do popover",
        trigger : 'hover focus'
    });
    
    $(".btnjs").button();
    
    $("#troca-estado").click(function(){
        
        var btn = $(this);
        
        btn.button("loading");
        
        setTimeout(function(){
            
            btn.button("reset");
        }, 
                   
                   
                   3000 );
        
    });
    
});
   
   