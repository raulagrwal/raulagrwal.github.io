const newApiUrl = "https://newsapi.org/v1/articles?source=CNN&apiKey=a78de96cd6784dba9b8894d5da130573";
function loadNews() {
    fetch(newApiUrl)
        .then((resp) => resp.json())
        .then(function (myJson) {
            loadHTML(myJson.articles);
        })
        .catch(function(errMsg) {
            alert(errMsg);
        });;
}