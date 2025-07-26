function volume_sphere(event) {
  event.preventDefault(); // Prevent form from submitting

  const radiusInput = document.getElementById('radius').value;
  const volumeOutput = document.getElementById('volume');

  const radius = parseFloat(radiusInput);

  // Validate input
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = 'NaN';
    return;
  }

  // Calculate volume
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display rounded result
  volumeOutput.value = volume.toFixed(4);
}

window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
