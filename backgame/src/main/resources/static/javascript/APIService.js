class APIService {
    constructor() {

    }

    //Função que retorna o resultado da requisição
    logMessage(method, statusCode, data) {
        if (statusCode < 200 || statusCode > 299) {
            console.error("[" + method + "] retornou código " + statusCode, data);
        } else {
            console.log("[" + method + "] retornou código " + statusCode);
        }
    }

    getAll(url, callBack) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function() {
            callBack(xhr.status, xhr.response);
        };
        xhr.send();
    }

    create(url, data, callback) {
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

    deleteData(url, id, callback) {
        var finalURL = url + "/" + id
        var xhr = new XMLHttpRequest();
        
        xhr.open('DELETE', finalURL, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.responseType = 'json';
        xhr.onload = function () {
            logMessage('delete', xhr.status, xhr.response);
            callback(xhr.status, xhr.response);
        }
        xhr.send();
    }
}