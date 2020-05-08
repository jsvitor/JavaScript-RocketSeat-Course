// 1° exercise - INIT

function checaIdade(idade) {
  return new Promise(function(resolve, reject){
    if (idade >= 18) {
      resolve(JSON.stringify());
    } else {
      reject(JSON.stringify());
    }
  })
 }
 
 

 
 checaIdade(18)
 .then(function() {
  console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
  
// 1° exercise - END
