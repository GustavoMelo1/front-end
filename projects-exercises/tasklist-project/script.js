// Espera o HTML carregar antes de rodar
$(function () {
    
// Teste para ver se o formulário está sendo encontrado
    console.log('DOM pronto, form encontrado?', $('#form-tarefa').length);

// Quando o formulário for enviado (clicar em "Adicionar")
    $('#form-tarefa').on('submit', function (e) {
    e.preventDefault(); // Evita recarregar a página

// Pega o texto digitado no input
    const texto = $('#tarefa').val().trim();

// Se estiver vazio, não faz nada
    if (!texto) return;

// Cria um novo <li> com o texto digitado
    const $li = $('<li></li>').text(texto);

// Adiciona o <li> dentro da lista <ul>
    $('#lista-tarefas').append($li);

// Limpa o campo de texto depois de adicionar
    $('#tarefa').val('');
    });

// Quando clicar em um item da lista <li>
    $('#lista-tarefas').on('click', 'li', function () {
// Alterna a classe "concluida" (adiciona ou remove)
    $(this).toggleClass('concluida');
    });
});