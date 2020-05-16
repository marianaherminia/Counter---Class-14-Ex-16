function contar() {
    var inicio = window.document.getElementById('numi')
    var fim = window.document.getElementById('numf')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    
    //outra maneira de ver se está vazio
    //if(inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0)
    if(inicio.value==''||inicio.value==null||fim.value==''||fim.value==null||passo.value==''||passo.value==null ){
        res.innerHTML = `<p> Impossível contar.</p>`
    } else {
        if(Number(passo.value == 0)){
            window.alert(`Passo 0. Considera = 1`)
            passo.value = 1
        }
        res.innerHTML = `<p> Contando:</p>`
        var c=Number(inicio.value)
        if(c<Number(fim.value)){
            // Contagem crescente
            for ( var c=Number(inicio.value) ; c<=Number(fim.value) ; c+=Number(passo.value)){
                res.innerHTML += `${c} \u{1F449}` //código emoji unicode com \u
            }
        } else if (c>Number(fim.value)) {
            // Contagem decrescente
            for ( var c=Number(inicio.value) ; c>=Number(fim.value) ; c-=Number(passo.value)){
                res.innerHTML += `${c}👍` //emoji copiado e colado
            }
            }
        res.innerHTML += '🏴'
    }


  /*  if(inicio.value==''||inicio.value==null||fim.value==''||fim.value==null||passo.value==''||passo.value==null){
        res.innerHTML = `<p> Impossível contar.</p>`
    } else {
        res.innerHTML = `<p> Contando:</p>`
        var c=Number(inicio.value)
        do {
            res.innerHTML += `${c}👍`
            c+=Number(passo.value)
        } while (c<=Number(fim.value))
        res.innerHTML += '🏴'
    }*/
}