function carregar() {

    var info = document.getElementById('info')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 19

    
    info.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#ce9366'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'img/fototarde.png'
        document.body.style.background = '#648595'
    } else {
        //Boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#38407f'
    }

}

