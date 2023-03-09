const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vagas.nome
        textoFinal += " (" + vaga.candidatos.lenght + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = window.prompt("Informe um nome para a vaga: ")
    const descricao = window.prompt("Informe uma descrição para a vaga: ")
    const dataLimite = window.prompt("Informe uma data limite (dd/mm/aaa) para a vaga: ")

    const confirmacao = window.confirm(
        "Deseja criar uma nova vaga com essass informações?\n" +
        "Nome: " + nome + 
        "\nDescriçao: " + descricao +
        "\nData limite: " + dataLimite
    )
    if(confirmacao){
    const novaVaga = { nome, descricao, dataLimite}
    vagas.push(novaVaga) 
    window.alert("Vaga criada.")
    }
}

function exibirVaga(){
    
    const indice = window.prompt("Informe o índice da vaga que deseja exibir: ")
    
    if(indice>=vagas.length || indice < 0) {
        window.alert("Índice inválido.")
        return
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
    return textoFinal + "\n - " + candidato
    }, "")
    window.alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidatos incritos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
    const candidato = window.prompt("Informe o nome do(a) candidato(a): ")
    const indice = window.prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se increver:")
    const vaga = vagas[indice]

    const confirmacao = window.confirm(
        "Deseja increver o candidato " + candidato + " na vaga " + indice + "?" +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidatos incritos: " + candidatosEmTexto
    )
    
    if(confirmacao){
        vaga.candidatos.push(candidato)
        window.alert("Inscrição realizada")
    }
}

function excluirVaga(){
    const indice = window.prompt("Informe o indice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = window.confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?" +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidatos incritos: " + candidatosEmTexto
    )
    if(confirmacao){
        vagas.splice(indice, 1)
        window.alert("Vaga excluída.")
    }
}

function exibirMenu(){
    const opcao = window.prompt(
        "Cadastro de vagas de emprego" + 
        "\n\nEscolha uma das opções: " +
        "\n1. Listar vagas disponíveis" + 
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" + 
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"

    )
        return opcao
}

function executar(){
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                window.alert("Saindo...")
                break
            default:
                window.alert("Opção inválida.")
        }
    } while( opcao !=="6")
}

executar()