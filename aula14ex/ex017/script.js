function gerarTabuada() {
    var num = document.getElementById('num')
    var n = Number(num.value)
    var res = document.getElementById('res')
    for(let i=1; i<=10; i++) {
        var aux = n*i
        res.innerHTML += `<br>${i}`+ " X " + `${n}`+ " = " + `${aux}<br>` 
    }
    
}