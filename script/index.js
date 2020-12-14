function trocar_classe(iten,classe_antiga,classe_nova){
    iten.classList.remove(classe_antiga);
    iten.classList.add(classe_nova);
    return console.log('troquei da classe: '+classe_antiga+" para a classe: "+classe_nova)
};
function proximo_slide(){
    
}
function esconder_midias(){
    trocar_classe(midias_lateral,"div-midias-lateral","div-midias-lateral-a")
};
var slides=["stilos/CSS/imagens/index-foto1.png","stilos/CSS/imagens/index-2.jpg","stilos/CSS/imagens/index-3.png"]
var indice_slides=0
var bt_proximo=document.getElementById("bt-proximo")
var bt_anterior=document.getElementById("bt-anterior")
var imagem_slide=document.getElementById("img-slide")
var div_blocos=document.getElementById("div-blocos")
var bt_minimizar=document.getElementById("bt-minimizar")
var img_bt_minimizar=document.getElementById("img-bt-minimizar")
var midias_lateral=document.getElementsByClassName('div-midias-lateral')[0]

bt_minimizar.addEventListener("click",function(){
    if (midias_lateral.className=="div-midias-lateral"){
        trocar_classe(midias_lateral,"div-midias-lateral","div-midias-lateral-a")
        setTimeout(function(){
            img_bt_minimizar.src=("stilos/CSS/imagens/ico_next-2.png")
        },500)
    }else{
        trocar_classe(midias_lateral,"div-midias-lateral-a","div-midias-lateral")
        setTimeout(function(){
            img_bt_minimizar.src=("stilos/CSS/imagens/ico_back-2.png")
        },500)
    }
})