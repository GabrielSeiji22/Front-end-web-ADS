function executar(evento) {
 evento.preventDefault();
    
 LimparForm();
 ValidarForm();
 ValidarEmail();
}
function ValidarForm(){
 const nome = document.querySelector("#nome").value;
 const erroNome = document.querySelector("#erro-nome");
 if (nome === "") {
  erroNome.textContent ="Nome não pode estar vázio!";
  erroNome.classList.add("erro");
  erroNome.classList.remove("oculto");
 }
    
 const idade = document.querySelector("#idade").value;
 const erroIdade = document.querySelector("#erro-idade");
 if (idade === "") {
  erroIdade.textContent = "Idade não pode estar vázia!";
  erroIdade.classList.add("erro");
  erroIdade.classList.remove("oculto");
 } else if (Number(idade) < 18) {
     erroIdade.textContent = "É necessário ter 18 anos!";
     erroIdade.classList.add("erro");
     erroIdade.classList.remove("oculto");
 }
 
 const termos = document.querySelector("#termos");
 const erroTermos = document.querySelector("#erro-termos");
 if (termos.checked === false){
    erroTermos.textContent = "É preciso aceitar os termos!";
    erroTermos.classList.add("erro");
    erroTermos.classList.remove("oculto");
 }
}

function LimparForm() {
 document.querySelectorAll(".erro").forEach((item)=>{
  item.classList.remove("erro");
  item.classList.add("oculto");
 });
}

function ValidarEmail() {
 const email = document.querySelector("#email").value.trim();
 const erroEmail = document.querySelector("#erro-email");

 const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 if (!regex.test(email)) {
  erroEmail.textContent = "Digite um e-mail válido!";
  erroEmail.classList.add("erro");
  erroEmail.classList.remove("oculto");
  return false;
 }

 return true;
}