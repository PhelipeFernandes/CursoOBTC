let fila = []
let menu = ""

do{
    menu = window.prompt(
        "Fila de espera: " + fila +
        "\nQual opção deseja ?" +
        "\n\nOpção 1: Novo paciente" +
        "\nOpção 2: Consultar paciente" +
        "\nOpção 3: Sair"
    )

    switch(menu){
        case "1":
           pacient = window.prompt("Qual o nome do paciente")
           fila.push(pacient)
           break
        case "2":
            let consult = fila.shift()
            if(consult.length > 0){
                window.alert(consult)
            }else{
                window.alert("Não há pacientes!")
            }
            break
        case "3":
            window.alert("Encerrando atendimento!")
            break
        default:
            window.alert("Opção inválida!!")
    }

}while (menu !== "3")