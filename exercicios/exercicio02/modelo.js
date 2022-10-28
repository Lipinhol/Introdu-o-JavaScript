function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute("src", "criancahomem.png")
            } else if (idade < 21){
                //JOVEM
                img.setAttribute("src", "jovemhomem.png")
            }else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "adultohomem.png")
            } else {
                //Idoso
                img.setAttribute("src", "velho.png")
            }
        } else if (fsex[1].checked){
            genero ='Mulher'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute("src", "criancamulher.png")
            } else if (idade < 21){
                //JOVEM
                img.setAttribute("src", "jovemmulher.png")
            }else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "adultomulger.png")
            } else {
                //Idoso
                img.setAttribute("src", "velha.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}.`
        res.appendChild(img)
    }
}