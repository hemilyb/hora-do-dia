function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2c19c'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#86bd68'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#203a4e'

    }
}

