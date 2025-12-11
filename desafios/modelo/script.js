function carregar() {
    var title = document.getElementById('title')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var tenhaum = document.getElementsByClassName('tenhaum')[0]
    var curso = document.getElementsByClassName('curso')[0]
    var data = new Date()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        //Bom dia
        title.style.background = '#7e811161'
        msg.style.background = '#edf416fa'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ecf416c6'
        tenhaum.innerHTML = 'Tenha um bom dia!'
        tenhaum.style.background = '#edf416fa'
        curso.style.background = '#7e811161'
    }else if (hora >= 12 && hora < 18) {
        //Boa tarde
        title.style.background = 'rgba(221, 75, 22, 0.21)'
        msg.style.background = 'orange'
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'orange'
        tenhaum.innerHTML = 'Tenha uma boa tarde!'
        tenhaum.style.background = 'orange'
        curso.style.background = 'rgba(221, 75, 22, 0.21)'
        
    }else {
        //Boa noite
        title.style.background = 'rgb(133, 132, 132)'
        msg.style.background = '#000'
        msg.style.color = '#fff'
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
        tenhaum.innerHTML = 'Tenha uma boa noite!'
        tenhaum.style.background = '#000'
        tenhaum.style.color = '#fff'
        curso.style.background = 'rgb(133, 132, 132)'
    }
}