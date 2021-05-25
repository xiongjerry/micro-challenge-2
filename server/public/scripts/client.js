console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

displayJoke();

// Click Listeners

// Create a POST route for with click listener
$('#addJokeButton').on('click', addjoke)

} // END onReaedy


function displayJoke(){
    $.ajax({
        method: 'GET',
        url:    '/jokes'
    }).then(function (jokesArray){
        console.log('Display current Jokes', jokesArray);
        // empty out current jokes on DOM to update new ones
        $('#outputDiv').empty()
        // Loop jokesArray to append all jokes
        for(jokes of jokesArray) {
        $('#outputDiv').append(`
        <h3>${jokes.whoseJoke}'s Joke</h3>
        <p>Joke: ${jokes.jokeQuestion}</p>
        <p>Punchline: ${jokes.punchLine}</p>
        `)} // END for loop
    }) // END .then
} // END displayJoke


function addjoke(){
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
    }

    $.ajax({
        url: 'jokes',
        method: 'POST',
        data: newJoke
    }).then(reponse => {
        console.log('should be 201', reponse);
        // Rerun GET post to update DOM
        displayJoke();
        // Empty DOM inputs
        $('#whoseJokeIn').val('')
        $('#questionIn').val('')
        $('#punchLineIn').val('')
    })
} // End addJoke