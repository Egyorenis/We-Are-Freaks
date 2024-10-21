// Select elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2'); // Button 2 for Monkey.html
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');

// Button 1 click event: Open eagler.html in the media player iframe
btn1.addEventListener('click', () => {
    iframePlayer.src = 'eagler.html'; // Set the iframe source to eagler.html
    mediaPlayer.style.display = 'block'; // Show the media player
});

// Button 2 click event: Open Monkey.html in the media player iframe
btn2.addEventListener('click', () => {
    iframePlayer.src = 'Monkey.html'; // Set the iframe source to Monkey.html
    mediaPlayer.style.display = 'block'; // Show the media player
});

// Close button event: Hide the media player
closeBtn.addEventListener('click', () => {
    mediaPlayer.style.display = 'none'; // Hide the media player
    iframePlayer.src = ''; // Clear the iframe source
});
