var save = sessionStorage.getItem("save");
var categoriaId = sessionStorage.getItem("categoria1");
const apiService = new APIService();

function getBrowserGame(){
    apiService.getById("/browsergames", save, function(status, response) {
        if(status < 200 || status > 299 ) {
            document.getElementById("mensagem").innerHTML += "<p class='error_message'>Erro ao carregar os dados: " + status + " - " + json.message + "</p>";
            return;
        }
        
        var img = response.imagem;
        var nome = response.nome;
        var descricao = response.descricao;
        var url = response.url;
        var urlvideo = response.urlvideo
        document.getElementById("resposta").innerHTML = 
            `<div id='browserGame'>
                <div id='imagem'>
                    <img src='${img}'>
                </div>
                <div id='informacao'>
                    <h1 id='nome'>${nome}</h1>
                    <h3 id='categoria'>categoria</h3>
                    <p id='descricao'>${descricao}</p>
                    <div id='botoes'>
                        <input type='button' id="avaliar" value='Avaliar' onclick='goToAvaliar()'>
                        <a href="${url}" target="_blank"><input type='button' value='Jogar'></a>
                        <a href="${urlvideo}" target="_blank"><input type='button' value='Vídeo'></a>
                        <input type='button' value='Atualizar'  onclick='goToUpdate()'>
                        <input type='button' value='Deletar' onclick='deleteGame(${save})'>
                    </div>
                </div>
            </div>`;
        getNameCategoria(categoriaId);  
    });
};

function getNameCategoria(id) {
    apiService.getById("/categorias", id, function(status, response) {
        if(status < 200 || status > 299 ) {
            document.getElementById("mensagem").innerHTML += "<p class='error_message'>Erro ao carregar os dados: " + status + " - " + json.message + "</p>";
            return;
        }
        categoriaNome = response.nome;
        document.getElementById("categoria").innerHTML = categoriaNome
    });
};

function goToUpdate() {
    window.location = "updateGame.html";
}

function goToAvaliar() {
    window.location = "avaliarGame.html";
}

function deleteGame(id) {
    if(confirm("Deseja apagar esse browserGame do sistema?")) {
        apiService.deleteData("/browsergames", id, function(status, dados) {
            if(status < 200 || status > 299 ) {
                document.getElementById("mensagem").innerHTML += "<p class='error_message'>Erro ao apagar os dados: " + status + " - " + dados.message + "</p>";
                return
            }
            
            window.location = "allGames.html";
        });
    }
};