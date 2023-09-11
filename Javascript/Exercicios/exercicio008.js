let num = [4,1,3,5,7]
num.sort()
num.push(9)
let pos = num.indexOf(7)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`o valor está na posição ${pos}`)
}