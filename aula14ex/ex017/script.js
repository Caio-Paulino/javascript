function gerarTabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        var n = Number(num.value)
    }
    for(let i=1; i<=10; i++) {
        let item = document.createElement('option')
        var aux = n*i
        item.text = `${i}`+ " X " + `${n}`+ " = " + `${aux}`
        tab.appendChild(item)
        // res.innerHTML += `<br>${i}`+ " X " + `${n}`+ " = " + `${aux}<br>` 
    }

}