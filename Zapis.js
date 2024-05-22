document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var input1 = document.getElementById('name').value;
  var input2 = document.getElementById('email').value;

  
  if (input1 && input2) {
    window.location.href = 'glavn.html';
     alert("Вы записаны");
  } else {
    window.location.href = 'Zapis.html';
  }
});

