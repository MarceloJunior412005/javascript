function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('resposta')
    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else{
        resultado.innerHTML = `Contando... <br>`

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

       if(i < f){
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{27A1} \u{FE0F}`
            }
       }else{
            //contagem decrescente
            for ( var c = i; c >= f; c-= p)
                resultado.innerHTML += `${c} \u{27A1} \u{FE0F}`
       }
       resultado.innerHTML += `\u{1F3C1}`
    
    }
}

