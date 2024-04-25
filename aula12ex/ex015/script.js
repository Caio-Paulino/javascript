function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''

        if(fsex[0].checked) {
            genero = 'Homem'    
            
            if(idade>=0 && idade<10) {
                img.setAttribute('src', 'images/bebe-homem.jpg')
            } else if(idade<21) {
                img.setAttribute('src', 'images/idoso.jpg')
            } else if(idade<50) {
                img.setAttribute('src', 'images/homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'images/idoso.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'

            if(idade>=0 && idade<10) {
                img.setAttribute('src', 'images/bebe-mulher.jpg')
            } else if(idade<21) {
                img.setAttribute('src', 'images/jovem-mulher.jpg')
            } else if(idade<50) {
                img.setAttribute('src', 'images/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'images/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
}