$( function() {
    $( "#web" ).draggable();
    $( "#web" ).resizable();
    $( "#settings" ).draggable();
  } );

  function loadpage() {

    document.getElementById("webframe").src = document.getElementById("userurl").value;

  }


  