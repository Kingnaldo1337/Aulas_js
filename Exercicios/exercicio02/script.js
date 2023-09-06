function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique seus dados e tente novamente.")
    }else{
        var fsex = document.querySelectorAll('input[type ="radio"')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade <=5){
                img.setAttribute('src','images/criança_homem.webp' )
            }else if(idade <11){
                img.setAttribute('src', 'images/preadolescenteH.jpg')
            }else if(idade <18){
                img.setAttribute('src', 'images/jovemH.jpg')
            }else if (idade <50){
                img.setAttribute('src', 'images/AdultoH.jpg')
            }else if (idade > 50 && idade < 500){
                img.setAttribute('src', 'images/idosoH.jpg')
            }else if(idade >= 500){
                img.setAttribute('src', 'images/kiss.jpg')
            }
        }else{
            genero= 'Mulher'
            if(idade >=0 && idade <=5){
                img.setAttribute('src', 'images/criança_mulher.jpg')
            }else if(idade <11){
                img.setAttribute('src', 'images/preadolescenteM.jpg')
            }else if(idade <18){
                img.setAttribute('src', 'images/jovemM.webp')
            }else if (idade <50){
                img.setAttribute('src', 'images/AdultoM.jpg')
            }else{
                img.setAttribute('src', 'images/idosoM.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu sexo é ${genero} e você tem ${idade} anos.`
        res.appendChild(img)
    }

}