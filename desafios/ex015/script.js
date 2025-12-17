function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formularioano.value.length == 0 || formularioano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem' 
        if (idade >=0 && idade < 2) {
            //Bebê
            img.setAttribute('src', 'imagens/bebe-m.png')
        } else if (idade <= 10) {
            //Criança
            img.setAttribute('src', 'imagens/crianca-m.png')
        } else if (idade <= 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem-m.png')
        } else if (idade <= 50) {
            //Adulto
            img.setAttribute('src', 'imagens/adulto-m.png')
        } else {
            //Idoso
            img.setAttribute('src', 'imagens/idoso-m.png')
        }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 2) {
            //Bebê
            img.setAttribute('src', 'imagens/bebe-f.png')
        } else if (idade <= 10) {
            //Criança
            img.setAttribute('src', 'imagens/crianca-f.png')
        } else if (idade <= 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem-f.png')
        } else if (idade <= 50) {
            //Adulto
            img.setAttribute('src', 'imagens/adulto-f.png')
        } else {
            //Idoso
            img.setAttribute('src', 'imagens/idosa-f.png')
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
        img.style.margin = 'auto'
    }
}