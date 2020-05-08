// AJAX é uma requisição assíncrona. que a gente realiza a lgum
// backend. Requisitar informações do servidor sem precisar ren-
// atualizar toda a página.

var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/jszvitor');
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}