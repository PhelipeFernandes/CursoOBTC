let menu = ""

let baseTriangulo = ""
let alturaTriangulo = ""

let baseRetangulo = ""
let alturaRetangulo = ""

let ladoQuadrado = ""

let baseg = ""
let basep = ""
let alturaTrapezio = ""

let raioCirculo = ""

function areaTriangulo(){
    const triangulo = (baseTriangulo * alturaTriangulo)/2
    return triangulo
}

function areaRetangulo(){
    const retangulo = baseRetangulo * alturaRetangulo
    return retangulo
}

function areaQuadrado(){
    const quadrado = ladoQuadrado * ladoQuadrado
    return quadrado
}

function areaTrapezio(){
    const trapezio = (baseg + basep) * alturaTrapezio / 2
    return trapezio
}

function areaCirculo(){
    const circulo = (raioCirculo * raioCirculo) * 3.14
    return circulo
}

do{
     menu = window.prompt(
        "Olá! Seja bem-vindo à calculadora geométrica!" +
        "\nPara começarmos, escolha que tipo de calculo você deseja fazer." +
        "\n 1.Calculo da área de um triângulo em metros " +
        "\n 2.Calculo da área de um retângulo em metros." +
        "\n 3.Calculo da área de um quadrado em metros  " + 
        "\n 4.Calculo da área de um trapézio em metros  " + 
        "\n 5.Calculo da área de um círculo em metros   " +
        "\n 6.Sair.                                     " 
    )
    switch(menu){
        case "1":
            baseTriangulo = parseFloat(window.prompt("Qual o tamanho da base?"))
            alturaTriangulo = parseFloat(window.prompt("Qual o tamanho da altura?"))
            const resultadoTriangulo = areaTriangulo(baseTriangulo, alturaTriangulo)
            window.alert("A área do triangulo é de " + resultadoTriangulo + " metros.")
            break
        case "2":
            baseRetangulo = parseFloat(window.prompt("Qual o tamanho da base?"))
            alturaRetangulo = parseFloat(window.prompt("Qual o tamanho da altura?"))
            const resultadoRetangulo = areaRetangulo(baseRetangulo, alturaRetangulo)
            window.alert("A área do triângulo é de " + resultadoRetangulo + " metros.")
            break
        case "3":
            ladoQuadrado = parseFloat(window.prompt("Qual o tamanho do lado do quadrado?"))
            const resultadoQuadrado = areaQuadrado(ladoQuadrado)
            window.alert("A área do quadrado é de " + resultadoQuadrado + " metros.")
            break
        case "4":
            baseg = parseFloat(window.prompt("Qual o tamanho da maior base do trapézio?"))
            basep = parseFloat(window.prompt("Qual o tamanho da menor base do trapézio?"))
            alturaTrapezio = parseFloat(window.prompt("Qual o tamanho da altura?"))
            const resultadoTrapezio = areaTrapezio(baseg, basep, alturaTrapezio)
            window.alert("A área do trapézio é de " + resultadoTrapezio + " metros")
            break
        case "5":
            raioCirculo = parseFloat(window.prompt("Qual o tamanho do raio do circulo?"))
            const resultadoCirculo = areaCirculo(raioCirculo)
            window.alert(" A área do circulo é de " + resultadoCirculo + " metros")
            break
        case "6":
            window.alert("Saindo...")
            break
        default:
            window.alert("Opção inválida!")  
    }
} while( menu !== "6")