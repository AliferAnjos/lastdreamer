const perguntas = [
   {
      pergunta: `Se você pudesse salvar um Analista de Redes do fuzilamento ou comprar uma Ferrari.
                 Qual seria a cor da Ferrari?

                 1- Preta
                 2- Vermelha
                 3- Prata`,

   resposta: ["Nunca vi uma Ferrari preta, mas você tem bom gosto. A cor da Ferrari vai combinar com o fundo da sala ZOOM em que eles vão se foder, HU HU HU!","Boa, já vi que você curte o clássico. Vermelho igual o alerta do SITE que você não pingou!","Cor sem graça de Ferrari, parece uma piada do Cristiano. Mas gosto é gosto!"]
   
   },

   {
   pergunta: `Se a Ceifadora te chama pra conversar com um papel sulfite na mão.
   O que você faz?
   
   1- Grita 'FODEU'
   2- Comemoro
   3- Não tenho medo de Ceifadoras!`,
   
   resposta: ["Acho que é hora de mijar no gerador e ir embora! Só não vale murchar os pneus do celtinha =O", "Quando é assim vai gastar a recisão no Maiytrea ou fazer carinho naquele colega de trabalho com uma barra de ferro!", "Então segue seu caminho, aproveita e lança o telefone do Marlon no Bate Papo da UOL."]
   },
   
   {
   pergunta: `Minha intuição ta boa hoje. Consigo acertar sua personalidade dependendo de qual finado você escolher:
   
   1- Cprates
   2- Tbezerra
   3- Lmoura`,
   
   resposta: [`Você gosta de novos desafios, mesmo que não esteja nenhum pouco preparado.
   Mas quando o problema surge, você sai da sala pra atender ligação falsa.
   Sua personalidade é: IMPULSIVO e COVARDE`, 
   `Você curte aproveitar a vida, maços de cigarro e noitadas insanas. Sinto ameaças de massacre na sua aura.
   Sua personalidade é: AVENTUREIRO e PSICOPATA`, 
   `Você gosta de espairecer e viajar, mesmo que pra isso tenha que faltar no trabalho.
   Sua personalidade é: FOLGADO e PRÓDIGO`]
   
   },
   
   {
   pergunta: `Você saiu de almoço/janta e o Bolívia é seu parceiro no 12x36. 
   Se vocês sobreviverem o final de semana, seu salário vai pra 5k. Mas ele terá que enfrentar um caso perigoso. 
   Qual desses você escolheria?
   
   1- Cervejaria Nova TIO isolada com Lindomar de plantonista
   2- Queda das principais sessões BGP daquele cliente com os procedimentos escrotos
   3- Login das antenas da Smurf Telecom`,
   
   resposta: ["Caralho, você merece o aumento só pela coragem de escolher essa opção. Mas seu aumento foi de tempo livre, os dois vão pra rua nessa!", "Os caras reclamam até quando escalona certo. Mais certo que isso só seu dinheiro indo embora!", "Pipocou na resposta, seu ganancioso. Sabe que é capaz dele bloquear o usuário no login e não conseguir do mesmo jeito."]
   
   },
   
   {
   pergunta: `Digamos que você ficou sem bonificação, o crescimento anual não foi o esperado:
   
   1- Acontece
   2- To puto
   3- To puto with lasers`,
   
   resposta: ["No mínimo você já ta com bolso cheio de dinheiro pra ta nessa paz! Dinheirinho de pinga pra você!", "Ta puto? Você ta puto e pobre, isso sim!",
   `Vamo rir de nervoso kkkk, Ei! Nada de juntar todo mundo pra pegar o que time que 'Traz Novos Clientes' no soco!
   Controlem-se(Opcional)`]
   },
   
   {
   pergunta: `O novo gestor B.A. (Brocha Antes) quer ver o crescimento da equipe #SQN
   Ele tem técnicas de motivação aguçadas, qual dessas você julga a melhor?
   
   1- Mentir que tem promoção caso termine um curso de uma certificação que nem ele tem
   2- Convidar o funcionário para Quadrilha da Mamada e promover sem mérito
   3- Criar guerra entre a equipe contando fake news e deixar os competentes insatisfeitos`,
   
   resposta: [`Faça o que eu digo, mas não o que faço. Até porque eu não consigo fazer também. "EXATAMENTE"!
   Comunicação totalmente unilateral, até o cliente já sabe que você é bucha.`, `Essa maneira se mostrou eficaz, ainda mais pra quem ta inseguro pra fazer sobreaviso, mudar de horário ou até ser promovido!
   Caguetar os parceiros é opcional xD`, `Esquema é perder bons funcionários, demitir quem trabalha!
   Segredo pra boa gestão é ser bipolar, tirar o corpo e ficar assistindo vídeo de Stand-Up!
   Que saudade do papai Cris ;( `]
   
   },
   
   {
   pergunta: `Deu até vondade de rimar! 
   Meu humor é do mal, não tem igual. Encerro por aqui com crítica social!
   O que você faria se do nada, o portão fechasse em cima do carro que fica na tomada?
   
   1- Rir
   2- Chorar
   3- Indiferente`,
   
   resposta: [
   `Rir é o melhor remédio, você até entrou na faculdade e terminou o Ensino Médio. 
   Mas o que você luta pra ganhar, pra ele não é nenhum privilégio.`, `Chora, e chora mesmo porque amanhã já estará arrumado, as custas do seu trabalho suado.
   E ele tem que limpar o cu com nota de $100 e dar presente pro filho mimado.
   Ele prosperou e isso não é errado.
   Mas porque não posso trabalhar remoto no fim de semana ou feriado?
   Temos FAMÍLIA e isso me deixa magoado.`, `Indiferente, mas certas coisas ficam na mente. Esse povo não se importa com a gente.
   Só te querem sentado nessa cadeira com um ar de experiente, segurando B.O. até o fim do expediente.`]
   
   }]

let perguntaAtual = 0;

function carregarPergunta() {
   document.getElementById("pergunta").textContent = perguntas[perguntaAtual].pergunta;
}
window.onload = carregarPergunta;

function escolha(escolhida) {
     
     const feedback = document.getElementById("feedback");

     if (escolhida === 1){
        feedback.textContent = perguntas[perguntaAtual].resposta[0];}
     else if (escolhida === 2){
        feedback.textContent = perguntas[perguntaAtual].resposta[1];}
     else if (escolhida === 3){
        feedback.textContent = perguntas[perguntaAtual].resposta[2];}

}

function proximaP(){
   if (perguntaAtual <perguntas.length - 1){
      perguntaAtual++;
      carregarPergunta();
      document.getElementById("feedback").textContent = "";
   }
}

function voltaP(){
   if (perguntaAtual >= 0){
      perguntaAtual--;
      carregarPergunta();
      document.getElementById("feedback").textContent = "";

}


}