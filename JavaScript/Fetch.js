const newApiUrl = "https://newsapi.org/v1/articles?source=CNBC&apiKey=a78de96cd6784dba9b8894d5da130573";

function loadNews(){
    fetch(newApiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}

