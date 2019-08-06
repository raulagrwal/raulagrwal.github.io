const newApiUrl = "https://newsapi.org/v1/articles?source=CNN&apiKey=a78de96cd6784dba9b8894d5da130573";
const loadNews = () => {
    fetch(newApiUrl)
    .then((response) => response.json())
    .then(function (data) {
        data.articles.map(function (article){
            //alert(article.title);
        });
        loadHTML(data.articles);
    })
    .catch(function(errMsg) {
        alert(errMsg);
    });;
};