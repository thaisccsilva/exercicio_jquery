$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#tarefa').val();
    const novaTarefa = $('<li></li>');
    $(tarefa).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul')
})

