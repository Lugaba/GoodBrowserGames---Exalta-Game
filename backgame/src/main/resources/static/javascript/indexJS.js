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
            <div id="${browserGame.id}">
                <div class='imagem'><img src="${browserGame.imagem}" width="100" height="120"/></div>
                <p><b>imagem: </b>${browserGame.imagem}</p>
                <p><b>Id: </b>${browserGame.id}</p>
                <p><b>Nome: </b>${browserGame.nome}</p>
                <a><b>Link: </b><a href="${browserGame.url}" target="_blank">Clique</a></p>
                <a><b>LinkVideo: </b>${browserGame.urlvideo}</p>
                <a><b>Descricao: </b>${browserGame.descricao}</p>
            </div>`;
        }
        document.getElementById('resposta').innerHTML = html;
    });
};