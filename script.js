$(document).ready(function() {
  function update_status(text) {
    $("p#status").text(text);
  }

  $('table#editor').click(function(e) {
    update_status("You selected: " + e.target.textContent);
  });
  // alert("Hello");
});
