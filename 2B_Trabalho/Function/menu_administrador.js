        //Criar as listas expandíveis de Talentos, Grupos e Eventos
        var collapsible = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < collapsible.length; i++) {
            collapsible[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }

        //Apagar os pedidos com os botões Aceitar e Rejeitar
        var pedidos = document.getElementsByClassName("pedido");
        var pedidosItens = document.getElementsByClassName("pedido-item");
        var btnAceitar = document.getElementsByClassName("btn-aceitar");
        var btnRejeitar = document.getElementsByClassName("btn-rejeitar");

        btnAceitar[0].addEventListener("click", function(){
            pedidosItens[0].style.display = "none";
	    })

        btnRejeitar[0].addEventListener("click", function(){
            pedidosItens[0].style.display = "none";
	    })

        btnAceitar[1].addEventListener("click", function(){
            pedidos[1].style.display = "none";
	    })

        btnRejeitar[1].addEventListener("click", function(){
            pedidos[1].style.display = "none";
	    })

        btnAceitar[2].addEventListener("click", function(){
            pedidos[2].style.display = "none";
	    })

        btnRejeitar[2].addEventListener("click", function(){
            pedidos[2].style.display = "none";
	    })

        btnAceitar[3].addEventListener("click", function(){
            pedidos[3].style.display = "none";
	    })

        btnRejeitar[3].addEventListener("click", function(){
            pedidos[3].style.display = "none";
	    })
