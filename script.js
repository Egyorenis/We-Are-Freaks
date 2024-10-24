// Select elements
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');
const playSongBtn = document.getElementById('playSongBtn');
const audioPlayer = document.getElementById('audioPlayer');
const eaglerVersionsBtn = document.getElementById('eaglerVersionsBtn');
const versionButtons = document.getElementById('versionButtons');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuContent = document.getElementById('menuContent');

// Track page views using localStorage
function updatePageViewCount() {
    let pageViews = localStorage.getItem('pageViews');

    if (!pageViews) {
        pageViews = 0;
    }

    pageViews = parseInt(pageViews) + 1;

    localStorage.setItem('pageViews', pageViews);

    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        viewCountElement.textContent = `Page Views: ${pageViews}`;
    }
}

window.onload = updatePageViewCount;

// Toggle Eagler Craft Versions buttons (within hamburger menu)
eaglerVersionsBtn.addEventListener('click', () => {
    versionButtons.style.display = versionButtons.style.display === 'none' || versionButtons.style.display === '' ? 'flex' : 'none';
});

// Eagler Craft version buttons
document.getElementById('version1_21').addEventListener('click', () => {
    iframePlayer.src = 'EaglercraftX_1.8_Offline_en_US.html';
    mediaPlayer.style.display = 'block';
    hamburgerMenu.style.display = 'none'; // Hide the hamburger menu when media player is open
});

document.getElementById('version1_11').addEventListener('click', () => {
    iframePlayer.src = 'eagler.html';
    mediaPlayer.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

document.getElementById('version1_9_4').addEventListener('click', () => {
    iframePlayer.src = 'Eagler-2.html';
    mediaPlayer.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

document.getElementById('version1_8_modded').addEventListener('click', () => {
    iframePlayer.src = 'eaglermodded - Copy.html';
    mediaPlayer.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

// Button 2 click event
btn2.addEventListener('click', () => {
    iframePlayer.src = 'Monkey.html';
    mediaPlayer.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

// Button 3 click event
btn3.addEventListener('click', () => {
    iframePlayer.src = 'RetroBowlV2T2 (1).html';
    mediaPlayer.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

// Close media player
closeBtn.addEventListener('click', () => {
    mediaPlayer.style.display = 'none';
    iframePlayer.src = '';
    hamburgerMenu.style.display = 'block'; // Show the hamburger menu when media player is closed
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
document.getElementById('runDifferentTabBtn').addEventListener('click', () => {
    const currentSrc = iframePlayer.src;
    if (currentSrc) {
        window.open(currentSrc, '_blank');
    }
});

// Toggle the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    menuContent.style.display = menuContent.style.display === 'none' || menuContent.style.display === '' ? 'block' : 'none';
});
