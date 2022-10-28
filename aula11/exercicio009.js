
function seuPais() {
   
    var pais = document.getElementById('País').value
    var res = document.querySelector('.seuPais')
    var resposta = document.querySelector('.resposta')
    res.innerHTML = `Seu país é ${pais}`
    if(pais == 'BRASIL' || pais == 'Brasil' || pais == 'brasil') {
        resposta.innerHTML = 'Você é Brasileiro'
    } else {
        resposta.innerHTML = 'Você é Estrangeiro'
   }
}

    




