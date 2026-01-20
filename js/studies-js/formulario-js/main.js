const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEvalido = false

//Isso faz validar o nome no formulario, se tem menos de 2 nao vai
//EX: "Melo" -> false
function validaNome(nomeCompleto) {
    const nomesArray = nomeCompleto.split(' ');
    return nomesArray.length >= 2;
}

//Impede o envio do formulário, no caso ele valida as informacoes antes de enviar 
//se nao estiver correto ele nao envia, e mostra um alerta
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

//Informa os dados do formulario acima na menasgem de alerta/sucesso
//EX: "montante de R$ 100 depositada para o cliente : Melo - conta : 123456"
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `montante de R$ <b>${valorDeposito.value}</b> depositado para o cliente : <b>${nomeBeneficiario.value}</b> - conta : <b>${numeroContaBeneficiario.value}</b>`

// Valida só o nome. Se o nome não estiver completo, dá erro.    formEvalido = validaNome(nomeBeneficiario.value)
    formEvalido = validaNome(nomeBeneficiario.value);
    if (formEvalido) {
        /* alert(mensagemSucesso); // Sucesso se o nome estiver completo */
        //Continuacao do IF, aqui vamos estilizar a messagem de sucesso  
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
     /*alert("O nome não está completo"); // Erro se o nome não estiver completo */
     //Vamos estilizar a messagem de erro
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

//Pega em tempo real o que o usuario digita no campo nome
nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validaNome(e.target.value);
    
//estiliza se o nome nao esta completo
//EX : "Melo" -> vai ficar vermelho ate que eu coloque o Gustavo Melo
//Estilizando a bastante ficar atento, estiliza a letra e a borda
    if (!formEvalido) {
        nomeBeneficiario.classList.add('error'); 
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});