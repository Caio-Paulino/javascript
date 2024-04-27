

var sel = document.getElementById('selcont')
let item = []

function adicionar() {
    var num = document.getElementById('num')
    var n = Number(num.value)

    if(n<1 || n>100) {
        window.alert('Digite um número válido!')
    } else {
        item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        window.alert(`Valor adicionado!`)
        sel.appendChild(item)
}

}

function finalizar() {
    
}