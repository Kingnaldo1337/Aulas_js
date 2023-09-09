function tabuada(){
    let n1 = document.getElementById("n1")
    let tab = document.getElementById("select1")
    if(n1.value.length == 0){
        window.alert("DIGITE UM NÚMERO: ") 
    }else{ 
        let n = Number(n1.value) 
        tab.innerHTML = ""
        for(let c =1;c <=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
        }
    }
    
}