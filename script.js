// Select elements
const eaglerVersionsBtn = document.getElementById('eaglerVersionsBtn');
const versionButtons = document.getElementById('versionButtons');
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');
const playSongBtn = document.getElementById('playSongBtn');
const audioPlayer = document.getElementById('audioPlayer');

// Toggle Eagler Craft Versions buttons
eaglerVersionsBtn.addEventListener('click', () => {
    console.log('Eagler Craft Versions button clicked');
    if (versionButtons.style.display === 'none' || versionButtons.style.display === '') {
        versionButtons.style.display = 'flex'; // Show version buttons
    } else {
        versionButtons.style.display = 'none'; // Hide version buttons
    }
});

// Version 1.11 button
document.getElementById('version1_11').addEventListener('click', () => {
    console.log('Eagler Craft 1.11 clicked');
    iframePlayer.src = 'eagler.html';
    mediaPlayer.style.display = 'block';
});

// Version 1.9.4 button
document.getElementById('version1_9_4').addEventListener('click', () => {
    console.log('Eagler 1.9.4 clicked');
    iframePlayer.src = 'Eagler-2.html';
    mediaPlayer.style.display = 'block';
});

// EaglerCraft Mobile (1.8) button
document.getElementById('version_mobile').addEventListener('click', () => {
    console.log('EaglerCraft Mobile (1.8) clicked');
    iframePlayer.src = 'Eagler-3.html';
    mediaPlayer.style.display = 'block';
});

// Close media player
closeBtn.addEventListener('click', () => {
    console.log('Close button clicked');
    mediaPlayer.style.display = 'none';
    iframePlayer.src = ''; // Clear iframe source
});

// Play song
playSongBtn.addEventListener('click', () => {
    console.log('Play Song button clicked');
    audioPlayer.play();
});
