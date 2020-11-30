jQuery(document).ready(function($) {
    $('#prepend-form').on('submit', function(eee) {
        eee.preventDefault();
  
        var text = document.getElementById("prepend-text").value;     
        if (text == "") {
            alert("Invalid Input");
            return false;
        }
  
        $("#tasks").prepend(text);
    });
  })
  function myFunction() {
    document.getElementById("tasks").style.fontSize = "25px";
  }  
