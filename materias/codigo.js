let pressao= String(Math.floor(Math.random()*(99-10)+10) )
let temperatura=String(Math.floor(Math.random()*(99-10)+10) )
let R=String(Math.floor(Math.random()*(99-10)+10))
let moles= String(Math.floor(Math.random()*(99-10)+10))


let area=document.getElementById("code")

let jose=document.getElementById('linkjose')
let simao=document.getElementById('linksimao')
let renato= document.getElementById('linkrenato')
jose.href=`https://wa.me/244933576607?text=Este é o meu codigo ${pressao+temperatura+R+moles}`
simao.href=`https://wa.me/244957892985?text=Este é o meu codigo ${pressao+temperatura+R+moles}`
renato.href=`https://wa.me/244944200401?text=Este é o meu codigo ${pressao+temperatura+R+moles}`

area.innerHTML=pressao+temperatura+R+moles

pressao=Number(pressao)
temperatura=Number(temperatura)
R=Number(R)
moles=Number(moles)

let volume= (moles*R*temperatura)/pressao
volume=Math.floor(volume)


 function verificar() {
    var input=document.getElementById("codigo")
    if(input.value==volume || 'volume'){
        document.getElementById('verific').style.display='none'
        document.getElementById('res').style.display='block'
    }else{
        alert('Errado, contacte com o dono do site')
    }
 }
