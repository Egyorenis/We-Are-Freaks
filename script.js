// Select elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2'); // Button 2 for Monkey.html
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');
const playSongBtn = document.getElementById('playSongBtn'); // Button for playing the song
const audioPlayer = document.getElementById('audioPlayer'); // Audio element

// Button 1 click event: Open eagler.html in the media player iframe
btn1.addEventListener('click', () => {
    console.log('Button 1 clicked, opening eagler.html'); // Debugging
    iframePlayer.src = 'eagler.html'; // Set the iframe source to eagler.html
    mediaPlayer.style.display = 'block'; // Show the media player
});

// Button 2 click event: Open Monkey.html in the media player iframe
btn2.addEventListener('click', () => {
    console.log('Button 2 clicked, opening Monkey.html'); // Debugging
    iframePlayer.src = 'Monkey.html'; // Set the iframe source to Monkey.html
    mediaPlayer.style.display = 'block'; // Show the media player
});

// Close button event: Hide the media player
closeBtn.addEventListener('click', () => {
    console.log('Close button clicked, hiding media player'); // Debugging
    mediaPlayer.style.display = 'none'; // Hide the media player
    iframePlayer.src = ''; // Clear the iframe source
});

// Play song button event: Play the audio
playSongBtn.addEventListener('click', () => {
    console.log('Play Song button clicked'); // Debugging
    audioPlayer.play(); // Play the audio
});

// Eagler Craft Versions button click event: Toggle version buttons
const eaglerVersionsBtn = document.getElementById('eaglerVersionsBtn');
const versionButtons = document.getElementById('versionButtons');

eaglerVersionsBtn.addEventListener('click', () => {
    console.log('Eagler Craft Versions button clicked'); // Debugging
    if (versionButtons.style.display === 'none' || versionButtons.style.display === '') {
        versionButtons.style.display = 'flex'; // Show version buttons
    } else {
        versionButtons.style.display = 'none'; // Hide version buttons
    }
});

// Version 1.11 button event: Open Eagler Craft 1.11 (eagler1_11.html)
const version1_11 = document.getElementById('version1_11');
version1_11.addEventListener('click', () => {
    console.log('Eagler Craft 1.11 button clicked, opening eagler1_11.html'); // Debugging
    iframePlayer.src = 'eagler1_11.html'; // Set the iframe source to eagler1_11.html
    mediaPlayer.style.display = 'block'; // Show the media player
});

// Version 1.9.4 button event: Open Eagler 1.9.4 (Eagler-2.html)
const version1_9_4 = document.getElementById('version1_9_4');
version1_9_4.addEventListener('click', () => {
    console.log('Eagler 1.9.4 button clicked, opening Eagler-2.html'); // Debugging
    iframePlayer.src = 'Eagler-2.html'; // Set the iframe source to Eagler-2.html
    mediaPlayer.style.display = 'block'; // Show the media player
});
