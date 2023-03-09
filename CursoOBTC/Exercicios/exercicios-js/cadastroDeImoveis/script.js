let imoveis = []
let menu = ""

do{
    menu = window.prompt(
        "Imóveis cadastrados: " + imoveis.length + 
        "\n\nQual opção você deseja escolher: " +
        "\n 1. Salvar um novo imóvel." + 
        "\n 2. Listar imóveis." +
        "\n 3. Sair"
    )
    switch(menu){
        case "1":
            const imovel = {}

            imovel.proprietario = window.prompt("Qual o nome do proprietário do imóvel?")
            imovel.quartos = window.prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = window.prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = window.prompt("O imóvel possui garagem? (SIM/NÃO)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario + 
                "\nQuartos: " + imovel.quartos + 
                "\nBanheiros: " + imovel.banheiros + 
                "\nPossui garagem? " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                window.alert("Imóvel salvo com sucesso!")
            } else{
                window.alert("Voltando ao menu...")
            }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                window.alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " +imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].quartos + 
                    "\nBanheiros: " + imoveis[i].banheiros + 
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            window.alert("Encerrando")
            break
        
            default:
                window.alert("Opção inválida")
    }

} while (menu !== "3")