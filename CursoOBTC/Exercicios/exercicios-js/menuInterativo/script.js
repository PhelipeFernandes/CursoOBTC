let opcao = ""
do{
  opcao = window.prompt("Olá, qual das opções você deseja escolher?\n1.Lavar louça\n2.Fazer comida\n3.Limpar o banheiro\n4.Arrumar as camas\n5.Encerrar")
  switch(opcao){
    case "1":
      window.alert("Você esoclheu a opção de lavar a louça")
      break
    case "2":
      window.alert("Você escolheu a opção de fazer comida")
      break
    case "3":
      window.alert("Você escolheu a opção de limpar o banheiro")
      break
    case "4":
      window.alert("Você escolheu a opção de arrumar as camas")
      break
    case "5":
      window.alert("Voce escolheu a opção 'Encerrar' o programa será encerrado")
      break
    default:
      window.alert("Selecione uma opção válida")
  }
} while (opcao !== "5")
