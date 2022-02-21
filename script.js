function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var minuto = data.getMinutes()
var hora = data.getHours()
msg.innerHTML = `<strong>Agora são ${hora}:${minuto} horas.</strong>`

if (hora >= 0 && hora < 12) {
    img.src = 'fotom.jpg'
    document.body.style.background = '#556B2F'
} 

else if (hora >= 12 && hora <= 18) {
    img.src = 'fotot.jpg'
    document.body.style.background = '#BC8F8F'
} 

else {
    img.src = 'foton.jpg'
    document.body.style.background = '#483D8B'
}

if (minuto < 10) {
    minuto = "0" + minuto
}

}

