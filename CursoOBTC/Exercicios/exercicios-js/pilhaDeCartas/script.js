let baralho = [" Cartas azuis ", "Cartas amarelas ", "Cartas vermelhas "]
let menu =""

do{
    menu = window.prompt(
        "Cartas disponíveis no baralho: " + baralho +
        "\n\nMenu" + 
        "\n\nOpção 1: Adicionar uma carta" + 
        "\nOpção 2: Puxar uma carta" + 
        "\nOpção 3: Sair"
    )

    switch(menu){
        case "1" :
            let novasCartas = window.prompt("Qual grupo de cartas você gostaria de adicionar?")
            baralho.unshift(novasCartas)
            break
        case "2" :
            let avaliar = baralho.shift()
            if(baralho <= 0){
                window.alert("Não há cartas para retirar")
            }else{
                window.alert(avaliar)
            }
            break
        case "3" :
            window.alert("Saindo...")
            break
    }

}while (menu !== "3")