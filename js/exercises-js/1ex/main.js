/* Pega o formulário pelo id */
const form = document.getElementById('formulario');

/* Pega os inputs pelo id */
const inputA = document.getElementById('numA');
const inputB = document.getElementById('numB');

/* Cria um evento que roda quando o usuário clica em enviar */
form.addEventListener('submit', function(e) {
    e.preventDefault(); /* Evita que a página recarregue */

    /* Converte os valores dos inputs de string para número */
    const numeroA = Number(inputA.value);
    const numeroB = Number(inputB.value);

    /* Cria a div onde vamos mostrar a mensagem */
    let mensagem = document.querySelector('.mensagem');
    if (!mensagem) {
        mensagem = document.createElement('div');
        mensagem.classList.add('mensagem');
        form.appendChild(mensagem);
    }

    /* Validação: se B é maior que A, mensagem positiva; senão, negativa */
    if (numeroB > numeroA) {
        mensagem.innerHTML = " Formulário válido! Grupo B é maior que Grupo A.";
        mensagem.style.color = "green"; /* deixa o texto verde */
    } else {
        mensagem.innerHTML = " Formulário inválido! Grupo B não é maior que Grupo A.";
        mensagem.style.color = "red"; /* deixa o texto vermelho */
    }

    /* Limpa os inputs se quiser */
    inputA.value = '';
    inputB.value = '';
});