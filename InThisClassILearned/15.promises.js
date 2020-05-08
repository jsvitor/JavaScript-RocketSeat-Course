// promises são códigos que não vão influênciar
// na nossa linha do tempo de execução do js.
// São funções que vão devolver o valor de resultado
// seja ele de sucesso ou erro Só depois de um tempo.
// e a gente não precisa se preocupar quando esse valor vai ser retornado.


var myPromise = function() {
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/jszvitor');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.stringify(xhr.responseText));
        } else {
          reject('Erro ao comunicar-se com o servidor')
        }
      }
    }
  });
}

myPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });