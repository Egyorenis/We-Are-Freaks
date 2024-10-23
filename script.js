// Select elements
const btn2 = document.getElementById('btn2'); // Button 2 for Monkey.html
const btn3 = document.getElementById('btn3'); // Button 3 for RetroBowlV2T2 (1).html
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');
const playSongBtn = document.getElementById('playSongBtn');
const audioPlayer = document.getElementById('audioPlayer');
const eaglerVersionsBtn = document.getElementById('eaglerVersionsBtn');
const versionButtons = document.getElementById('versionButtons');

// Toggle Eagler Craft Versions buttons
eaglerVersionsBtn.addEventListener('click', () => {
    if (versionButtons.style.display === 'none' || versionButtons.style.display === '') {
        versionButtons.style.display = 'flex';
    } else {
        versionButtons.style.display = 'none';
    }
});

// Eagler Craft version buttons
document.getElementById('version1_21').addEventListener('click', () => {
    window.open('EaglercraftX_1.8_Offline_en_US.html', '_blank'); // Open in a new tab
});

document.getElementById('version1_11').addEventListener('click', () => {
    iframePlayer.src = 'eagler.html';
    mediaPlayer.style.display = 'block';
});

document.getElementById('version1_9_4').addEventListener('click', () => {
    iframePlayer.src = 'Eagler-2.html';
    mediaPlayer.style.display = 'block';
});

// Button 2 click event: Open Monkey.html in the media player iframe
btn2.addEventListener('click', () => {
    iframePlayer.src = 'Monkey.html';
    mediaPlayer.style.display = 'block';
});

// Button 3 click event: Open RetroBowlV2T2 (1).html
btn3.addEventListener('click', () => {
    iframePlayer.src = 'RetroBowlV2T2 (1).html';
    mediaPlayer.style.display = 'block';
});

// Close media player
closeBtn.addEventListener('click', () => {
    mediaPlayer.style.display = 'none';
    iframePlayer.src = ''; // Clear iframe source
});

// Play song
playSongBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playSongBtn.textContent = 'Pause Song';
    } else {
        audioPlayer.pause();
        playSongBtn.textContent = 'Play Song';
    }
});

// Run in different tab functionality
const runDifferentTabBtn = document.getElementById('runDifferentTabBtn');
runDifferentTabBtn.addEventListener('click', () => {
    const currentSrc = iframePlayer.src;
    if (currentSrc) {
        window.open(currentSrc, '_blank');
    }
});
