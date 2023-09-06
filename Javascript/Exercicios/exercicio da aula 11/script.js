function calcular(){
    var a = window.document.getElementById("txtvel")
    var res = window.document.getElementById("res")
    var vel = Number(a.value)
    res.innerHTML = `sua velocidade é <strong>${vel}</strong>`
    if(vel > 40){
        res.innerHTML = `Sua velocidade é de ${vel}, e ultrapassou o limite da rodovia. Multado!`
        res.style.color = "red"
    }else{
        res.innerHTML = `Sua velocidade está correta, continue sua viagem!`
        res.style.color = "green"
    }
    res.innerHTML += `<p>Dirija sempre usando cinto de segurança!</p>`
}