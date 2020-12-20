function trocar_classe(iten,classe_antiga,classe_nova){
    iten.classList.remove(classe_antiga);
    iten.classList.add(classe_nova);
    return console.log('troquei da classe: '+classe_antiga+" para a classe: "+classe_nova)
};
var cabecalho=window.document.getElementById("cabecalho")
var div_logo=document.getElementById("div-logo")
var div_cabecalho_midias=document.getElementById("div-cabeçalho-midias")
var div_bt_menu=document.getElementById("div-bt-menu")
var chec=document.getElementById('lb-chec')
var midias_lateral=document.getElementById('div-midias-lateral')
var img_bt_minimizar=document.getElementById("img-bt-minimizar")

addEventListener

function cabecalho_off(){
    trocar_classe(cabecalho,'cabecalho_full','cabecalho_off')
    trocar_classe(div_logo,'logo-full','logo-off')
    trocar_classe(div_bt_menu,'div-bt-menu-full','div-bt-menu-off')

    div_cabecalho_midias.innerHTML=(
        ''
     )
    chec.innerHTML=(
            '<img src="../stilos/CSS/imagens/ico_menu.png" alt="" id="ico_menu" width="100%">'  
    )
};
function cabecalho_full(){
    trocar_classe(cabecalho,'cabecalho_off','cabecalho_full')
    trocar_classe(div_logo,'logo-off','logo-full')
    trocar_classe(div_bt_menu,'div-bt-menu-off','div-bt-menu-full')

    chec.innerHTML=("")
    div_cabecalho_midias.innerHTML=(
        '<a href="stilos/CSS/imagens/ico_facebook.png"><img src="stilos/CSS/imagens/ico_facebook.png" class="ico_midia"></a>'+
        '<a href="stilos/CSS/imagens/ico_facebook.png"><img src="stilos/CSS/imagens/ico_instagram.png" class="ico_midia"></a>'+
        '<a href="stilos/CSS/imagens/ico_facebook.png"><img src="stilos/CSS/imagens/ico_whatsapp.png" class="ico_midia"></a>'+
        '<a href="stilos/CSS/imagens/ico_facebook.png"><img src="stilos/CSS/imagens/ico_twitter.png" class="ico_midia"></a>' +
        '<a href="https://globoplay.globo.com/v/7901986/programa/"><img src="stilos/CSS/imagens/ico_play.png" class="ico_midia"></a> '   +
        'Copyright® '
    )
};

window.onscroll=function(){
    if(this.pageYOffset>125){
        cabecalho_off()
    }
    if(this.pageYOffset==0 & this.innerWidth>1220){
        cabecalho_full()
    };
    if (this.pageYOffset>280){
        trocar_classe(midias_lateral,"div-midias-lateral","div-midias-lateral-a")
        setTimeout(function(){
            img_bt_minimizar.src=("stilos/CSS/imagens/ico_next-2.png")
        },500)
    }
    if(this.pageYOffset==0){
        trocar_classe(midias_lateral,"div-midias-lateral-a","div-midias-lateral")
        setTimeout(function(){
            img_bt_minimizar.src=("stilos/CSS/imagens/ico_back-2.png")
        },500)
    }
}
window.onresize=function(){
    if (window.innerWidth<1220){
        cabecalho_off()
    }
    if(this.pageYOffset==0 & this.innerWidth>1220){
        cabecalho_full()
    };
};
window.onload=(function(){
    console.log("oi")
    if(this.pageYOffset==0 & this.innerWidth>1220){
        cabecalho_full()
    };
    if(this.pageYOffset>125){
        cabecalho_off()
    }
})
