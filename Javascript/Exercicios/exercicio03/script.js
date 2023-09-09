function passos(){
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passos = document.getElementById("txtp")
    let res = document.getElementById("res")
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
    window.alert("[ERRO] preencha o formulário de forma correta e tente novamente")
    }else{
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0 ){
            window.alert("Passo invalido.  Considerando passo 1")
            p= 1
        }
        if ( i < f){
            //contagem crescente
            for (let c = i; c<= f; c+=p)
            res.innerHTML += `${c} `  
        }else{
            //contagem regressiva
            for (let c = i; c >=f; c-=p){
                res.innerHTML += ` ${c} `
            }
        }
        
    }
}