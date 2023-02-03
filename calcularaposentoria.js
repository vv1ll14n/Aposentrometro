var button = document.querySelector("#calcular")
button.addEventListener('click', function (e) {//eu estava colocando a função diretamente no html o que causava erro 
    event.preventDefault()// comando para impedir que a página recarrege
    console.log('evento ocorrido')
    var formulario = document.querySelector("#formaposentadoria"); // outro ponto que estava errado não estava pegando o formulario do html
    console.log(formulario)
    // apos pegar o formulario pude acessar os valores do input:
    var valorSexo = formulario.sexo.value
    var valorIdade = formulario.idade.value
    var valorTempo = formulario.tempo.value
    console.log(valorSexo)
    console.log(valorIdade)
    console.log(valorTempo)
    //att 01 03-02 Alterei a forma em que se recuperava o sexo do usuario tirei o input text para radio e adicionei um value no mesmo, bem simples mas muito util. Também adicionei o calculo caso nenhuma condição seja satisfeita, além de reorganizar o layout.

    if (valorSexo == "feminino") {
        if (valorIdade < 61 & valorTempo >= 15) {
            var calculoIdadeAposentar = (61 - valorIdade)

            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você já possui tempo de contribuição porem com sua idade inda não da direito ao seu beneficio, o tempo necessário para cumprir o requisito idade é: ' + calculoIdadeAposentar + ' ano(s)'

            //optei por deixar o texto no console também 
            console.log('você já possui tempo de contribuição porem com sua idade inda não da direito ao seu beneficio, o tempo necessarío para cumprir o requisito idade é: ' + calculoIdadeAposentar + '')

        } else if (valorIdade < 61 & valorTempo < 15) {

            var calculoIdadeAposentar = (61 - valorIdade)
            var calculotempodecontribuicao = (15 - valorTempo)

            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você não compre nenhum requisto para requerer o beneficio restam: ' + calculoIdadeAposentar + ' ano(s) para adiquirir o direito por idade e ' + calculotempodecontribuicao + ' ano(s) para tempo de contribuição'

            console.log('você não compre nenhum requisto para requerer o beneficio')

        } else if (valorIdade >= 61 & valorTempo < 15) {
            var calculotempodecontribuicao = (15 - valorTempo)

            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você cumpre a idade, porem seu tempo de contribuição não é suficiente, restam ' + calculotempodecontribuicao + ' ano(s) para ter direito'

            console.log('você compre a idade, porem seu tempo de contribuição não é suficiente, restam ' + calculotempodecontribuicao + ' ano(s) para ter direito')

        } else if (valorIdade > 61 & valorTempo > 15) {
            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você possui todos os quesitos, basta agora solicitar, parabéns'
            console.log('você possui todos os quesitos, basta agora solicitar, parabéns')
        } else {
            console.log('error')
        }

    }

    if (valorSexo == "masculino") {
        if (valorIdade < 65 & valorTempo >= 15) {
            var calculoIdadeAposentar = (65 - valorIdade)

            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você já possui tempo de contribuição porem com sua idade ainda não da direito ao seu beneficio, o tempo necessarío para comprir o requisito idade é: ' + calculoIdadeAposentar + ' ano(s)'

            console.log('você já possui tempo de contribuição porem com sua idade inda não da direito ao seu beneficio, o tempo necessarío para cumprir o requisito idade é: ' + calculoIdadeAposentar + '')

        } else if (valorIdade < 65 & valorTempo < 15) {

            var calculoIdadeAposentar = (65 - valorIdade)
            var calculotempodecontribuicao = (15 - valorTempo)

            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você não compre nenhum requisto para requerer o beneficio restam: ' + calculoIdadeAposentar + ' ano(s) para adiquirir o direito por idade e ' + calculotempodecontribuicao + ' ano(s) para tempo de contribuição'

            console.log('você não cumpre nenhum requisto para requerer o beneficio')

        } else if (valorIdade >= 65 & valorTempo < 15) {
            var calculotempodecontribuicao = (15 - valorTempo)

            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você cumpre a idade, porem seu tempo de contribuição não é suficiente, restam ' + calculotempodecontribuicao + 'ano(s) para ter direito'

            console.log('você compre a idade, porem seu tempo de contribuição não é suficiente, restam ' + calculotempodecontribuicao + ' para ter direito')

        } else if (valorIdade > 65 & valorTempo > 15) {

            var Boxresultado = document.querySelector("#resultado")
            Boxresultado.innerHTML = 'você possui todos os quesitos, basta agora solicitar, parabéns'

            console.log('você possui todos os quesitos, basta agora solicitar, parabéns')
        } else {
            console.log('error')
        }

    }

})