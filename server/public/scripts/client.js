console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');



// Click Listeners

// Create a POST route for with click listener
$('#addJJokeButton').on('click', addjoke)

} // END onReaedy


function addjoke(){
    let newJoke = {
        whoseJoke:    $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine:    $('#punchLineIn').val()
    }

    $.ajax({
        url: '/items',
        method: 'POST',
        data: newJoke
    }).then(reponse => {
        console.log('should be 201', reponse);
        //Rerun GET post to update DOM
    })
}