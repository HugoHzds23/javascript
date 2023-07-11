function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoformulario = window.document.getElementById('txtano')
    var resultadoformulario = window.document.getElementById('resultadoformulario')

    if (anoformulario.value.length == 0 || Number(anoformulario.value) > ano){
        window.alert('[ERRO}, verifique seus dados e tente novamente!')
    } else {
        var valorsexo = window.document.getElementsByName('radsex')
        var idade = (ano - Number(anoformulario.value))
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (valorsexo[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src','imagens/masculino-crianca.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','imagens/masculino-jovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','imagens/masculino-adulto.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/masculino-idoso.png')
            }
        } else if (valorsexo[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src','imagens/feminino-crianca.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','imagens/feminino-jovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','imagens/feminino-adulta.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/feminino-idosa.png')
            }
        }
        resultadoformulario.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        resultadoformulario.appendChild(img)
    }
}