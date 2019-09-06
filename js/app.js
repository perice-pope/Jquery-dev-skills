
$('.button').click(function(e){
    
    e.preventDefault()
    let result = $('input').val()
    $('.future-skills').append($(`<p><button id=del>x</button>${result}</p>`)) 
  result = $('input').val(" ")
});


$('.future-skills').on('click', ' button ', function(e) {
    e.preventDefault()
    // console.dir('the target') <---- to look up the target elements in the DOM
    // console.log(e.target.parentElement)
    e.target.parentElement.remove()
})

    // function remove(evt){
    //    $(evt.target).parent().remove()
    //    console.log('event-killed-by-destroyer')
    // }