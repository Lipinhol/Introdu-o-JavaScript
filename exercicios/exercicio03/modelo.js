function calcular() {
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("passo").value
    var res = document.getElementById("res")
    
    if (inicio.length == 0 || fim.length == 0|| passo.length == 0) {
        window.alert("[ERRO] Procedimento inválido! Tente novamente.")
    } else {
        res.innerHTML = "Contando: "
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += ` Fim \u{1F3C1}`
    }
}

