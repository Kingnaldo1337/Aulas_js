function hora(){
    let msg = document.getElementById("msg") // pegando a mensagem no arquivo html
    let h = document.getElementById("txth").value //pegando a hora do input no html
    let imagem = document.getElementById("imagem") // pegando a imagem do arquivo html
    h = parseInt(h) // transformando a hora em inteira
    if(h >=0 && h < 12){
        msg.innerHTML = (`São ${h} horas da manha`)
        imagem.src = "images/manha.jpg"
        document.body.style.background = "#4848f7"
    }else if(h >= 12 && h <= 18){
        msg.innerHTML = (`São ${h} horas da tarde`)
        imagem.src = "images/tarde.webp"
        document.body.style.background = "#dcab03"
    }else{
        msg.innerHTML = (`São ${h} horas da noite`)
        imagem.src = "images/noite.jpg"
        document.body.style.background = "#707070"
    }
}
