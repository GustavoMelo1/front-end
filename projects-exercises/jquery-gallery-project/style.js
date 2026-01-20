$(function () {
  // começa escondido (reforça o CSS)
  $('form').hide();

  // abre o form ao clicar no botão do header
  $('header button').on('click', function () {
    $('form').stop(true, true).slideDown();
  });

  // fecha ao clicar no "Cancelar" (botão vermelho)
  $('#vermelho').on('click', function (e) {
    e.preventDefault();            // evita o reset "piscar"
    $('form')[0].reset();
    $('form').stop(true, true).slideUp();
  });

  // trata o submit: cria um <li> com imagem + link
  $('form').on('submit', function (e) {
    e.preventDefault();

    const enderecodaImagemnova = $('#endereco-imagem').val().trim();
    if (!enderecodaImagemnova) return;

    const novoItem = $('<li style="display:none;"></li>');

    $(`<img src="${enderecodaImagemnova}" alt="imagem da galeria">`).appendTo(novoItem);

    $(`
      <div class="imagem-link">
        <a href="${enderecodaImagemnova}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
        </a>
      </div>
    `).appendTo(novoItem);

    novoItem.appendTo('ul').fadeIn(500); // aparece suave
    $('#endereco-imagem').val('');
  });
});
