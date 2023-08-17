$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#tarefa').val();
    const novaTarefa = $('<li></li>').text(tarefa);
    $('ul').append(novaTarefa);
})