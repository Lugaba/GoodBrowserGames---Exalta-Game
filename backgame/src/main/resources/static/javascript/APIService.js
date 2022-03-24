class APIService {
    constructor(baseURL) {
        this.baseURL = baseURL
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
}