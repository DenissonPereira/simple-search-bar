
const lista = [

    {nome: 'google', link: 'https://www.google.com/'}

];


function pesquisar(){
    const inputBarraDePesquisa = document.getElementById('barra');
    const valorBarra = inputBarraDePesquisa.value;

    for (item of lista) {
        if (valorBarra == item.nome) {
            window.location.href = item.link;
            return;
        };
    };

    alert('Busca não encontrada');
}

function enter(event) {
    if (event.keyCode == 13) {
        pesquisar();
    }
};