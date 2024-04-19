$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        if (novaTarefa === ''){
            alert('Insira uma tarefa!');
        } else {
            const novoItem = $(`<li class="tarefa" style="display: none">${novaTarefa}</li>`);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
        }
        $('#tarefa').val('');
    });

    $(document).on('click', '.tarefa', function(){
        $(this).toggleClass('strike');
    });
});

/*const itemChecado = document.querySelector('ul');

itemChecado.addEventListener('click', function(e) {
    if(e.target.classList.contains('strike')){
        e.target.classList.remove('strike');
    } else {
        e.target.classList.add('strike');
    }
});*/

