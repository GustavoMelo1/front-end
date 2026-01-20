// Pega o formulário pelo id
const form = document.getElementById('form-contato');

// Pega os 3 inputs de nome, ddd e telefone
const nomeInput = document.getElementById('nome');
const ddInput   = document.getElementById('dd');
const telInput  = document.getElementById('telefone');

// Pega o corpo da tabela onde vamos adicionar as linhas
const tbody = document.querySelector('#tabela-contatos tbody');

// Mensagem de erro e mensagem de lista vazia
const erroBox = document.getElementById('erro');
const vazioMsg = document.getElementById('vazio');

// Quando o usuário clicar em "Cadastrar"
form.addEventListener('submit', function(e) {
  e.preventDefault(); // impede recarregar a página
  erroBox.textContent = ''; // limpa erros anteriores

    // Lê e limpa espaços dos valores
    const nome = nomeInput.value.trim();
    const dd   = ddInput.value.trim();
    const tel  = telInput.value.trim();

    // Validação: se algo estiver vazio
    if (!nome || !dd || !tel) {
        erroBox.textContent = 'Preencha nome, DDD e telefone';
        return;
    }

    // Validação: DDD deve ter 2 dígitos
    if (dd.length !== 2) {
        erroBox.textContent = 'DDD deve ter 2 dígitos';
        return;
    }

    // Validação: telefone precisa ter pelo menos 8 dígitos
    if (tel.length < 8) {
        erroBox.textContent = 'Telefone deve ter pelo menos 8 dígitos';
        return;
    }

    // Monta o telefone no formato (DD) número
    const telefoneFormatado = `(${dd}) ${tel}`;

    // Cria a linha e as colunas da tabela
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${nome}</td><td>${telefoneFormatado}</td>`;
    tbody.appendChild(tr); // adiciona a linha no <tbody>

    // Esconde a mensagem de "nenhum contato"
    if (vazioMsg) vazioMsg.style.display = 'none';

    // Limpa o formulário e foca no campo nome
    form.reset();
    nomeInput.focus();
});