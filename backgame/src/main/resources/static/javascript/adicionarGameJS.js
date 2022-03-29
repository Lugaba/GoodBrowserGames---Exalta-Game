const apiService = new APIService("/browsergames");

//Função que adiciona um novo funko na coleção da loja
function addGame() {
    // Ler campos do formulário
    // categoria: document.getElementById('categoria').value.trim(),
    console.log(document.getElementById('nome').value);
    if ((document.getElementById('nome').value != "") &&
     (document.getElementById('url').value != '') &&
      (document.getElementById('descricao').value != '') &&
     (document.getElementById('imagem').value != '')){
        var browserGame = {
            nome: document.getElementById('nome').value.trim(),
            url: document.getElementById('url').value.trim(),
            urlvideo: document.getElementById('urlvideo').value.trim(),
            descricao: document.getElementById('descricao').value.trim(),
            imagem: document.getElementById('imagem').value.trim(),
        }

        apiService.create("", browserGame, function (status, dados) {
            if (status < 200 || status > 299) {
                document.getElementById("mensagem").innerHTML = "<p class='error_message'>Erro ao adicionar um novo funko: " + status + " - " + dados.message + "</p>";
                return;
            }

            document.getElementById("mensagem").innerHTML = "<p class='good'>BrowserGame " + browserGame.nome + " cadastrado</p>"

            document.getElementById('nome').value = '';
            document.getElementById('url').value = '';
            document.getElementById('urlvideo').value = '';
            document.getElementById('descricao').value = '';
            document.getElementById('imagem').value = '';
        });
    } else {
        document.getElementById("mensagem").innerHTML = "<p class='error_message'>Erro ao cadastrar browserGame - campos em branco</p>";
    }
}