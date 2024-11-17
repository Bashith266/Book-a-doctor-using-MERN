document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const doctor = document.getElementById('doctor').value;
  const timing = document.getElementById('timing').value;
  const date = document.getElementById('date').value;

  const confirmationMessage = `
    Appointment Booked Successfully!<br>
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Phone:</strong> ${phone}<br>
    <strong>Preferred Doctor:</strong> ${doctor}<br>
    <strong>Preferred Timing:</strong> ${timing}<br>
    <strong>Date:</strong> ${date}
  `;

  document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
  document.getElementById('bookingForm').reset();
});
