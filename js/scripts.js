$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#formLetter").submit(function(event){
    const firstNameInput = $("input#firstName").val();
    const lastNameInput = $("input#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

    $("#letterBody").show();

    event.preventDefault();
  });

  $("#shoutingMachine").submit(function(event){
    const userPhraseInput = ($("input#userPhrase").val()).toUpperCase();

    $(".userPhrase").text(userPhraseInput);

    $("#inputReturn").show();

    event.preventDefault();
  });
});