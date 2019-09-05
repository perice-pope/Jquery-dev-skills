
// $('.button').on("click", function() {
//     words = $('input').val() 
//     console.log(words)   
//     // words.append("<p>test<p>")
// })  


$('.button').click(function(e){
    e.preventDefault()
    $('.future-skills').append($('<p>', { text: $('input').val() })

    );
});

{/* <li><button class="remove">X</button> */}



//     <td><button class="remove">X</button> ${newSkill}</td>
//     </tr>
//     `
//     $(input).appendTo($("li"));
//     $('.button').on('click', removeSkill)
//     });
//     function removeSkill(evt){
//        $(evt.target).parent().remove()
//        console.log('boom')
//     }