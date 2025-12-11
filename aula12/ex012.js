var agora = new Date()
var hora = agora.getHours()
if (hora < 12 && hora > 5) {
    console.log(`Bom dia, agora são ${hora} horas da manhã`)
} else if (hora <= 18 && hora > 12) {
    console.log(`Boa tarde, agora são ${hora} horas da tarde`)
} else if (hora >= 2 && hora < 5) {
    console.log(`Boa madrugada, agora são ${hora} horas da manhã`)
} else if (hora == 1) {
    console.log(`Boa madrugada, agora são ${hora} hora da manhã`)
} else {
    console.log(`Boa noite, agora são ${hora} horas da noite`)
}