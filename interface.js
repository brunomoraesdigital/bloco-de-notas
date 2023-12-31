// Seleciona o elemento input com o id 'dataInput'
let dataInput = document.getElementById('dataInput');

// Seleciona o botão com o id 'carregar'
let button = document.getElementById('carregar');

// Função para manipular o evento de mudança no input de data
function manipulandoDataInput() {
    // Remove a classe 'desligado' do botão
    document.getElementById('carregar').classList.remove('desligado');

    // Função para manipular os botões após o clique
    function manipulandoBotoes() {
        // Adiciona e remove classes para mostrar/esconder os botões
        document.getElementById('carregar').classList.add('esconder');
        document.getElementById('carregar').classList.remove('mostrar');
        document.getElementById('aumentar').classList.add('mostrar');
        document.getElementById('aumentar').classList.remove('esconder');
        document.getElementById('diminuir').classList.add('mostrar');
        document.getElementById('diminuir').classList.remove('esconder');
    }

    // Adiciona um listener para o evento de clique no botão
    button.addEventListener('click', manipulandoBotoes);
}

// Adiciona um listener para o evento de mudança no input de data
dataInput.addEventListener('change', manipulandoDataInput);

// Seleciona o elemento #outPut
let outPut = document.getElementById('outPut');

// Função para estilizar a lista com base no conteúdo dos spans
function estilizaList() {
    // Inicializa uma variável para verificar se há conteúdo
    let temConteudo = false;

    // Obtém todos os spans dentro do #outPut
    let spans = outPut.getElementsByTagName('span');

    // Percorre os spans para verificar se algum deles tem conteúdo
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].textContent.trim() !== '') {
            temConteudo = true;
            break;  // Se encontrou conteúdo, sai do loop
        }
    }

    // Aplica o estilo com base na verificação
    outPut.style.listStyle = temConteudo ? 'circle' : 'none';
}

// Cria uma instância de MutationObserver e passa a função estilizaList como callback
let observer = new MutationObserver(estilizaList);

// Configurações para observar alterações no conteúdo de #outPut e seus descendentes
let observerConfig = {
    subtree: true,   // Observa alterações nos descendentes (elementos filhos e subfilhos)
    childList: true, // Observa alterações na lista de filhos (adicionar ou remover nós filho)
};

// Inicia a observação
observer.observe(outPut, observerConfig); // Instruindo o observer a observar alterações em outPut de acordo com as configurações definidas em observerConfig. Isso significa que ele estará atento a qualquer modificação nos filhos de outPut e seus descendentes. Se houver adições ou remoções de nós filho ou alterações em seu conteúdo, a função estilizaList será chamada.

// Chama a função estilizaList ao carregar a página
estilizaList();
