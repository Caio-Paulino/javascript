function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12) {
        img.src = 'images/foto-manha.jpg'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'images/foto-noite.jpg'
    } else {
        img.src = 'images/foto-noite.jpg'
    }
}
