const apiService = new APIService();

function getAllGames(){
    apiService.getAll("/categorias", function(status, response){
        if(status < 200 || status > 299 ) {
            document.getElementById("resposta").innerHTML += "<p class='error_message'>Erro ao carregar os dados: " + status + " - " + response.message + "</p>";
            return;
        }

        
        for(var i=0; i<response.length; i++){
            var categoria = response[i]
            if (categoria.browserGames.length == 0) {
                continue
            }
            var html = "<div class='categoria'><div class='titulo'><h2>" + categoria.nome + "</h2></div><div class='browserGames'>" ;
            for(var j=0; j<categoria.browserGames.length; j++) {
                let browserGame = categoria.browserGames[j];
                html += `
                <a href="browserGame.html" onclick= "saveGame(${browserGame.id}); saveCategoria(${categoria.nome})">
                    <div class='browserGame'>
                            <div class='imagem'><img src="${browserGame.imagem}"/></div>
                            <p id='nome'>${browserGame.nome}</p>
                            <p id='categoria'>${categoria.nome}</p>
                    </div>
                </a>`;
            }
            html += "</div></div>";
            document.getElementById('resposta').innerHTML += html;

            
        }
        console.log(document.getElementById('resposta').innerHTML)
    });
};

function saveGame(id){
    sessionStorage.setItem("save", id);
}

function saveCategoria(nome) {
    sessionStorage.setItem("categoria1", nome);
}