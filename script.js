$(document).ready(function() {
  var selected_element;  // dom element - table cell
  var selected_color;    // hex: #EEAEEA
  var option;            // cell, row or column

  function update_status(text, logger) {
    // Update text for element, color or type
    if(logger == "element") {
      $("p#status-element").text(text);
      return;
    }
    if(logger == "color") {
      $("p#status-color").text(text);
      return;
    }
    if(logger == "type") {
      $("p#status-type").text(text);
    }
  }

  $('table#editor').click(function(e) {
    update_status("Element selected: " + e.target.textContent, "element");
  });

  $("#select-color").spectrum({
    color: "#f00",
    change: function(color) {
      update_status("Color selected: " + color.toHexString(), "color");
    }
  });

});
