function passos(){
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passos = document.getElementById("txtp")
    let res = document.getElementById("res")
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
    window.alert("[ERRO] preencha o formulário de forma correta e tente novamente")
    }else{
        res.innerHTML = "asdasda"
    }
}