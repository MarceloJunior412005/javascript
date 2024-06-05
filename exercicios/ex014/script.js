function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#f5bd72'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#f76602'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#0b1542'
    }

}