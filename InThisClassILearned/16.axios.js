// trabalhando com o axios. Primeiro importei a lib no html.
// o axios nada mais é do que um wraper, um encapsulamento por
// meio do XMLHttpRequest. Ele vai nos ajudar a retornar os
// valores de forma mais fácil.

axios.get('https://api.github.com/users/jszvitor')
  .then(function(response) {
    console.log(response.data.avatar_url);
  })
  .catch(function(error) {
    console.warn(error);
  });


