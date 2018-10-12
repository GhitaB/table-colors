$(document).ready(function() {
  window.selected_element = "";  // dom element - table cell
  window.selected_color = "";    // hex: #EEAEEA
  window.selected_type = "";     // cell, row or column

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
    selected_element = e.target;
    update_status("Element selected: " + selected_element.textContent, "element");
  });

  $("#select-color").spectrum({
    color: "#f00",
    change: function(color) {
      selected_color = color.toHexString();
      update_status("Color selected: " + selected_color, "color");
    }
  });

  $("#select-type").on("change", function() {
    selected_type = $("#select-type option:selected").text();
    update_status("Selected fill type: " + selected_type, "type");
  });

  $("button.tc-btn").on("click", function() {
    if(selected_color.length && selected_color.length && selected_type.length) {
      console.log("Done");
    } else {
      console.log("Invalid");
    }
  });
});
