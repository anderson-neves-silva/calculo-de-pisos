
/*função que calcula os piso e declarando as vairáveis e pegando as entradas do usuário, Obs. o preventDefault e para guardar o valor padrão isso faz o resultado se manter na tela*/
function calcularPisos (evt) {
    evt.preventDefault();
    var caixa = Number (document.querySelector('#metrosDaCaixa').value);
    var compra = Number (document.querySelector('#qtdComprada').value);
    var retira = compra / caixa;
    document.getElementById('retira').innerHTML = retira;
}

/*fazendo a ligação da função com o click do botão*/
document.querySelector('#calcular').onclick = calcularPisos;

