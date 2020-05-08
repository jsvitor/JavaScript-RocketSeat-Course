// 1° exercise - INIT

function ageCheck(age) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      age >= 18 ? resolve() : reject();
      /* conventional way for make a simple condition.
      if (age >= 18) {
        resolve(JSON.stringify());
      } else {
        reject(JSON.stringify());
      }
      */
    }, 2000);
  })
}

ageCheck(18)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });

// 1° exercise - END



// 2º & 3 exercise

const inputElement = document.querySelector('div#app input');
var ulElement = document.querySelector('div#app ul');

function createListItem(name) {
  const liElement = document.createElement('li');
  const repositoryName = document.createTextNode(name);
  liElement.appendChild(repositoryName);

  ulElement.appendChild(liElement);
};

function renderLoading(loading) {
  ulElement.innerHTML = "";

  const textElement = document.createTextNode('Loading...');
  let loadingElement = document.createElement('li');

  loadingElement.appendChild(textElement);
  ulElement.appendChild(loadingElement);
}

function renderError(loading) {
  ulElement.innerHTML = "";

  const textElement = document.createTextNode('Error!');
  const errorElement = document.createElement('li');

  errorElement.style.color = "#F00";

  errorElement.appendChild(textElement);
  ulElement.appendChild(errorElement);
}

function renderRepositoriesByUser() {
  ulElement.innerHTML = ""; // cleaner the back elements.
  const user = inputElement.value;

  if(!user) return; // stop the function deploy if not user.

  renderLoading();

  axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function (response) {
      //console.log(response.data.length);
      ulElement.innerHTML = "";
      for (repository of response.data) {
        createListItem(repository.name);
      }
    })
    .catch(function () {
      renderError();
    });
}



