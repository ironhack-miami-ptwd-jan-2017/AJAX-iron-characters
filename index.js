





setInterval(function(){
  $.ajax({
    method: 'GET',
    url: 'https://ih-api.herokuapp.com/characters',
    success: loadCharacters,
    error: handleError
  });
}, 2000);


function loadCharacters(theList){
  $('#characters-list').empty();
theList.forEach((eachCharacter) => {
  const newCharacter = `
    <li>
      <h3> ${eachCharacter.name} </h3>
      <p> Id: ${eachCharacter.id} </p>
    </li>
  `;


$('#characters-list').append(newCharacter);
});
}









$('#character-form').on('submit', (event) => {
  event.preventDefault();

  const characterInfo = {
    name: $('#the-name-input').val(),
    occupation: $('#the-occupation-input').val(),
    weapon: $('#the-weapon-input').val()
  };

  $.ajax({
    method: 'POST',
    url: 'https://ih-api.herokuapp.com/characters',
    data: characterInfo,
    success: showFeedback,
    error: handleError
  });
});


function showFeedback (postResponse) {

  $.ajax({
    method: 'GET',
    url: 'https://ih-api.herokuapp.com/characters',
    success: loadCharacters,
    error: handleError
  });

}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}
