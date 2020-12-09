function proximo_slide(){
    
}

var slides=["stilos/CSS/imagens/index-foto1.png","stilos/CSS/imagens/index-2.jpg","stilos/CSS/imagens/index-3.png"]
var indice_slides=0
var bt_proximo=document.getElementById("bt-proximo")
var bt_anterior=document.getElementById("bt-anterior")
var imagem_slide=document.getElementById("img-slide")



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