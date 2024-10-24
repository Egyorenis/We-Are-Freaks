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
const hamburgerMenu = document.getElementById('hamburgerMenu'); // Hamburger menu button

// Track page views using localStorage
function updatePageViewCount() {
    let pageViews = localStorage.getItem('pageViews');

    if (!pageViews) {
        pageViews = 0;
    }

    // Increment the count
    pageViews = parseInt(pageViews) + 1;

    // Update localStorage with the new count
    localStorage.setItem('pageViews', pageViews);

    // Display the count on the page
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        viewCountElement.textContent = `Page Views: ${pageViews}`;
    }
}

// Call the function when the page loads
window.onload = updatePageViewCount;

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
    iframePlayer.src = 'EaglercraftX_1.8_Offline_en_US.html';
    mediaPlayer.style.display = 'block';
});

document.getElementById('version1_11').addEventListener('click', () => {
    iframePlayer.src = 'eagler.html';
    mediaPlayer.style.display = 'block';
});

document.getElementById('version1_9_4').addEventListener('click', () => {
    iframePlayer.src = 'Eagler-2.html';
    mediaPlayer.style.display = 'block';
});

// New EaglerCraft 1.8 (MODDED) button
document.getElementById('version1_8_modded').addEventListener('click', () => {
    iframePlayer.src = 'eaglermodded - Copy.html';
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
    versionButtons.style.display = 'none'; // Hide version buttons
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

// Toggle hamburger menu and show Eagler Craft Versions button
hamburgerMenu.addEventListener('click', () => {
    const isActive = versionButtons.style.display === 'flex';
    versionButtons.style.display = isActive ? 'none' : 'flex';
    // Hide buttons if media player is open
    if (mediaPlayer.style.display === 'block') {
        versionButtons.style.display = 'none';
    }
});
