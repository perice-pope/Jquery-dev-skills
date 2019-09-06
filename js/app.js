
$('.button').click(function(e){
    e.preventDefault()
    $('.future-skills').append($(
        '<p>', 
        { text: $('input').val() }, 
        
        )
    ) 
});

$('.button').on('click', '#remove', function(f) {
    f.preventDefault()
    $(this).closest('p').remove(); 
});

    function remove(evt){
       $(evt.target).parent().remove()
       console.log('event-killed-by-destroyer')
    }