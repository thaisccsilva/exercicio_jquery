$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#tarefa').val();
    const novaTarefa = $('<li></li>').text(tarefa);
    $('ul').append(novaTarefa);
    $('#tarefa').val('')
})

$('ul').on('click', 'li', function(){
    $(this).toggleClass("feito")
})