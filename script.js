const button = document.getElementById('button')
const name = document.getElementById('name')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const resultado = document.getElementById('resultado')

const getText = (imc) => {
    if (imc > 40) return 'Obsidade grau III'
    if (imc > 35) return 'Obsidade grau II'
    if (imc > 30) return 'Obsidade grau I'
    if (imc > 25) return 'Levemente acima do peso'
    if (imc > 18.5) return 'Peso ideal'
    return 'Abaixo do peso'
}

// o value pega o valor digitado.
//o + serve pra transformar um string em NUMBER.

const imcCal = () => {
    if (altura.value == 0 || peso.value == 0 || name.value == 0) {
        alert('Favor preencher todas as informações.') 
    } else if (altura.value > 3) {
        alert('Favor inserir "ponto" em altura.')
    } else {       
    const valorImc = (+peso.value / (+altura.value * +altura.value).toFixed(1))//toFixed deixa o valor arredondado
    resultado.textContent = `${name.value} - ${getText(valorImc)}`
    console.log(valorImc)
    }
}

button.addEventListener('click', imcCal)//Não abrir parêntese do imcCal