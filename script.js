// Select elements
const btn2 = document.getElementById('btn2'); // Button 2 for Monkey.html
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');
const playSongBtn = document.getElementById('playSongBtn'); // Button for playing the song
const audioPlayer = document.getElementById('audioPlayer'); // Audio element
const eaglerVersionsBtn = document.getElementById('eaglerVersionsBtn');
const versionButtons = document.getElementById('versionButtons');

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

// Version 1.21 button
document.getElementById('version21').addEventListener('click', () => {
    console.log('Eagler Craft 1.11 clicked');
    iframePlayer.src = 'Eagly.html';
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
    iframePlayer.src = 'Eagly.html';
    mediaPlayer.style.display = 'block';
});

// Button 2 click event: Open Monkey.html in the media player iframe
btn2.addEventListener('click', () => {
    console.log('Monkey Game button clicked, opening Monkey.html');
    iframePlayer.src = 'Monkey.html'; // Open Monkey game
    mediaPlayer.style.display = 'block';
});

// Button 3 click event: Open RetroBowlV2T2 (1).html
document.getElementById('btn3').addEventListener('click', () => {
    console.log('Button 3 clicked, opening RetroBowlV2T2 (1).html');
    iframePlayer.src = 'RetroBowlV2T2 (1).html'; // Open RetroBowl
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

// Run in different tab functionality
const runDifferentTabBtn = document.getElementById('runDifferentTabBtn');
runDifferentTabBtn.addEventListener('click', () => {
    console.log('Run in different tab clicked');
    const currentSrc = iframePlayer.src; // Get the current iframe src
    if (currentSrc) {
        window.open(currentSrc, '_blank'); // Open the iframe src in a new tab
    }
});
