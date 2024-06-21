function verificar() {   
    var data = new Date()
    var ano = data.getFullYear()
    var cxnasc = document.querySelector('input#txtano')
    var resposta = document.querySelector('div#resposta')

    if (cxnasc.value.lenght == 0 || cxnasc.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')

    }else{
        var radsex = document.getElementsByName('radiosexo')
        var idade = ano - cxnasc.value
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if(radsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 13){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else if(idade >= 60 && idade < 150 ){
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }else if(idade > 150){
                //Morreu
                
            }
        }else if (radsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else if(idade >= 60 && idade < 150 ){
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }else if(idade > 150){
                //Morreu
            }
        }
        resposta.innerHTML = `Você é ${genero} com ${idade} anos`
        resposta.appendChild(img)
       }
}