const apiService = new APIService("/browsergames");

function getAllGames(){
    apiService.getAll("", function(status, response){
        if(status < 200 || status > 299 ) {
            document.getElementById("resposta").innerHTML += "<p class='error_message'>Erro ao carregar os dados: " + status + " - " + response.message + "</p>";
            return;
        }
        let html = '';

        for(var i=0; i<response.length; i++){
            let browserGame = response[i];
            html += `
            <div class="game">
                <div class='imagem'><img src="${browserGame.imagem}"/></div>
                <p><b>Nome: </b>${browserGame.nome}</p>
                <p><b>Link: </b><a href="${browserGame.url}" target="_blank">Clique</a></p>
                <p><b>LinkVideo: </b><a href="${browserGame.urlvideo}" target="_blank">Clique</a></p>
                <p><b>Descricao: </b>${browserGame.descricao}</p>
            </div>`;
        }
        document.getElementById('resposta').innerHTML = html;
    });
};