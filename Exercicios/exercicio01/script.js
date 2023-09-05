function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 20
    msg.innerHTML = (`Agora são ${hora} Horas.`)
    if (hora >= 0 && hora <12){
        //BOM DIA
        imagem.src = "images/mais-um-dia-de-sol-e-temperatura-elevada-em-sc-1595502961.jpg"
        document.body.style.background = "#4848f7"    
    }else if(hora >= 12 && hora <=18){
        //Boa Tarde
        imagem.src = "images/tarde.webp"
        document.body.style.background = "#dcab03"
    }else{
        //boa noite
        imagem.src = "images/noite.jpg"
        document.body.style.background = "#707070"
    }
}
