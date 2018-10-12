$(document).ready(function() {
  window.selected_element = "";   // dom element - table cell
  window.selected_color = "";     // hex: #EEAEEA
  window.selected_type = "cell";  // cell, row or column

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

  function table_fill_cell(element, color) {
    $(element).css("background-color", color);
  }

  function table_fill(element, color, fill_type) {
    if(fill_type == "cell") {
      table_fill_cell(element, color);
      return;
    }

    if(fill_type == "row") {
      $(element).parent().children().each(function() {
        table_fill_cell($(this), color)
      });
    }

    if(fill_type == "column") {
      $(element).closest("table").find(
        "tr td:nth-child(" + ($(element).index() + 1) + ")"
      ).each(function() {
        table_fill_cell($(this), color);
      });

      $(element).closest("table").find(
        "tr th:nth-child(" + ($(element).index() + 1) + ")"
      ).each(function() {
        table_fill_cell($(this), color);
      });
    }
  }

  $("button.tc-btn").on("click", function() {
    if((selected_element !== "") && (selected_color.length > 0) && (selected_type.length > 0)) {
      table_fill(selected_element, selected_color, selected_type);
    } else {
      console.log("Invalid");
    }
  });
});
