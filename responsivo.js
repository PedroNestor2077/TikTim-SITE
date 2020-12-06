function trocar_classe(iten,classe_antiga,classe_nova){
    iten.classList.remove(classe_antiga);
    iten.classList.add(classe_nova);
    return console.log('troquei da classe: '+classe_antiga+" para a classe: "+classe_nova)
};
cabecalho=window.document.getElementById("cabecalho")
div_logo=document.getElementById("div-logo")
div_cabecalho_midias=document.getElementById("div-cabeçalho-midias")
div_bt_menu=document.getElementById("div-bt-menu")
chec=document.getElementById('lb-chec')



window.onresize=function(){
    if (window.innerWidth<1220){
        trocar_classe(cabecalho,'cabecalho_full','cabecalho_off')
        trocar_classe(div_logo,'logo-full','logo-off')
        trocar_classe(div_bt_menu,'div-bt-menu-full','div-bt-menu-off')

        div_cabecalho_midias.innerHTML=(
            ''
        )
        chec.innerHTML=(
                '<img src="stilos/CSS/imagens/ico_menu.png" alt="" id="ico_menu" width="100%">'  
        )
        
    
    }else{
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
    }
};
