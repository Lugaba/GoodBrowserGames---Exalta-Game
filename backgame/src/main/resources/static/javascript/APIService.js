class APIService {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    //Função que retorna o resultado da requisição
    logMessage(method, statusCode, data) {
        if (statusCode < 200 || statusCode > 299) {
            console.error("[" + method + "] retornou código " + statusCode, data);
        } else {
            console.log("[" + method + "] retornou código " + statusCode);
        }
    }

    getAll(finalURL, callBack) {
        var url = this.baseURL + finalURL
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function() {
            callBack(xhr.status, xhr.response);
        };
        xhr.send();
    }

    create(finalURL, data, callback) {
        var url = this.baseURL + finalURL
        var xhr = new XMLHttpRequest();
        
        var dados = JSON.stringify(data);

        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.responseType = 'json';
        xhr.onload = function () {
            logMessage('create', xhr.status, xhr.response);
            callback(xhr.status, xhr.response);
        }
        xhr.send(dados);
    }
}