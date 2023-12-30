// 
let dataInput = document.getElementById('dataInput');
let botao = document.getElementById('carregar');

function manipulandoDataInput() {
    document.getElementById('carregar').classList.remove('desligado');
    function manipulandoBotoes() {
        document.getElementById('carregar').classList.add('esconder');
        document.getElementById('carregar').classList.remove('mostrar');
        document.getElementById('aumentar').classList.add('mostrar');
        document.getElementById('aumentar').classList.remove('esconder');
        document.getElementById('diminuir').classList.add('mostrar');
        document.getElementById('diminuir').classList.remove('esconder');
    }
    botao.addEventListener('click', manipulandoBotoes);
}
dataInput.addEventListener('change', manipulandoDataInput);


