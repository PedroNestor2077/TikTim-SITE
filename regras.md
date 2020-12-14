REGRAS PARA CONTRUÇÃO DO SITE-TIKTIM

::::::SINTAXE E NOMES DE VARIAVEIS:::::
=>CSS & HTML:
    CLASSES||
        "usar classes somente quando formos estilizar mais de um elemento no css"
        "usar tambem para quando um elemento precisar ser alterado vida javascript"
        PADRAO DE DECLARAÇÃO||
            "classe-NOME"
    IDS||
        "ids serao usados para identificar um elemento especifico, sendo dele botao,input,DIV, etc..."
        PADRAO DE DECLARAÇÃO|||
            botao--"bt-NOME"
            div--"div-NOME"
            a--"link-NOME"
            *--"elemento--NOME"
    FIM DE BLOCOS||
        "sempre finalizar um bloco/container com <!-- nome do bloco -->"
::::::LINGUA PADRAO DE DECLARAÇÃO::::::
    **SEMPRE DECLARAR NOMES E IDS EM PT-BR**

https://globoplay.globo.com/v/7901986/programa/

3b5998 fb
vermelho tiktim rgb(191, 4, 17)
bt_proximo.addEventListener('click',function(){
    imagem_slide.style.width = "90%";
    indice_slides+=1
    let atraso=setTimeout(function() {
        if (indice_slides<slides.length){
            imagem_slide.src=slides[indice_slides]
            imagem_slide.style.width = "100%";
            /* -- */
            let input_indice=document.getElementsByClassName("input-indice")[indice_slides].checked=true
            /* -- */

        }else{
            indice_slides=0
            imagem_slide.src=slides[indice_slides]
            imagem_slide.style.width = "100%";
            /* -- */
            let input_indice=document.getElementsByClassName("input-indice")[indice_slides].checked=true
            /* -- */           
        }
    },100);
    })
bt_anterior.addEventListener('click',function(){
    imagem_slide.style.width = "90%";
    indice_slides-=1
    let atraso=setTimeout(function() {
        if (indice_slides<slides.length & indice_slides>=0){
            imagem_slide.src=slides[indice_slides]
            imagem_slide.style.width = "100%";
            /* -- */
            let input_indice=document.getElementsByClassName("input-indice")[indice_slides].checked=true
            /* -- */
        }else{
            indice_slides=slides.length-1
            imagem_slide.src=slides[indice_slides]
            imagem_slide.style.width = "100%";
            /* -- */
            let input_indice=document.getElementsByClassName("input-indice")[indice_slides].checked=true
            /* -- */            
        }
        console.log(indice_slides)
    },10);
    })