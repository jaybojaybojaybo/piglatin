$(document).ready(function() {
  $("form#pig").submit(function(event) {
  event.preventDefault();

  var entry = $("input#english").val();
  var lowercase = entry.toLowerCase();

    if (lowercase === "a") {
      var pigLatin = lowercase + "ay";
    }

    //alert(lowercase);

    $("#result").text(pigLatin);

  });


});
