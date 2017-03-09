$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();

  var entry = $("input#english").val();

    alert(entry.toLowerCase());

  });

});
