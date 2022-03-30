const apiService = new APIService();

function getAllGames(){
    apiService.getAll("/browsergames", function(status, response){
        if(status < 200 || status > 299 ) {
            document.getElementById("resposta").innerHTML += "<p class='error_message'>Erro ao carregar os dados: " + status + " - " + response.message + "</p>";
            return;
        }
        let html = '';

        for(var i=0; i<response.length; i++){
            let browserGame = response[i];
            html += `
            <a href="browserGame.index">
                <div class="game">
                    <div class='imagem'><img src="${browserGame.imagem}"/></div>
                    <p><b>Nome: </b>${browserGame.nome}</p>
                    <p><b>Link: </b><a href="${browserGame.url}" target="_blank">Clique</a></p>
                    <p><b>LinkVideo: </b><a href="${browserGame.urlvideo}" target="_blank">Clique</a></p>
                    <p><b>Descricao: </b>${browserGame.descricao}</p>
                    <input type="button" value="Excluir" onclick="deleteGame(${browserGame.id})">
                </div>
            </a>`;
        }
        document.getElementById('resposta').innerHTML = html;
    });
};

function deleteGame(id) {
    if(confirm("Deseja apagar esse browserGame do sistema?")) {
        apiService.deleteData("/browsergames", id, function(status, dados) {
            if(status < 200 || status > 299 ) {
                document.getElementById("mensagem").innerHTML += "<p class='error_message'>Erro ao apagar os dados: " + status + " - " + dados.message + "</p>";
                return
            }
            
            document.location.reload()
        });
    }
};