function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');

    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var nInicio = Number(inicio.value)
        var nFim = Number(fim.value)
        var nPasso = Number(passo.value)
        

        if(nInicio < nFim) {
            for(var i=nInicio; i<=nFim; i+=nPasso) {
                res.innerHTML += `${i}` + " " + `\u{1F449}` + " "
            } 
        } else {
            for(var i=nInicio; i>=nFim; i-=nPasso) {
                res.innerHTML += `${i}` + " " + `\u{1F449}` + " "
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}