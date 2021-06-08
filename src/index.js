
let $inputText = document.querySelector('[data-js="text"]');
let $button = document.querySelector('[data-js="button"]');
let $lists = document.querySelector('[data-js="list"]');
let $rua = document.querySelector('[data-js="logradouro"]');
let $bairro = document.querySelector('[data-js="bairro"]');
let $cidade = document.querySelector('[data-js="cidade"]');
let $estado = document.querySelector('[data-js="estado"]');
let $cep = document.querySelector('[data-js="cep"]');


function getURL(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function numeros(){
  let cepValue = $inputText.value;
  let reg = /\D+$/g;
  let confirm = cepValue.match(reg);
  if(confirm){
    $inputText.value = '';
  } 
}

function handleClickButton(e) {
  e.preventDefault();
  let CEP = $inputText.value;
  let data = getURL(`https://viacep.com.br/ws/${CEP}/json/`);
  let users = JSON.parse(data);
  console.log(users.logradouro);

  $rua.innerHTML = users.logradouro;
  $bairro.innerHTML = users.bairro;
  $estado.innerHTML = users.uf;
  $cidade.innerHTML = users.localidade;
  $cep.innerHTML = users.cep;

  $inputText.value = "";
}








//$inputText.addEventListener('onkeydown', handleClickInput, false)
$button.addEventListener('click', handleClickButton);