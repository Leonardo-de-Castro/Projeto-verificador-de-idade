function verificar() {
    window.alert('FUNCIONOU!')

        
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.Value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')

    } else {
        window.alert('tudo ok')
    }

}
