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
const hamburgerMenu = document.getElementById('hamburgerMenu');
const openNewTabBtn = document.getElementById('openNewTabBtn');
const runDifferentTabBtn = document.getElementById('runDifferentTabBtn'); // New button

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

// Hamburger menu toggle
hamburgerMenu.addEventListener('click', () => {
    if (eaglerVersionsBtn.style.display === 'none' || eaglerVersionsBtn.style.display === '') {
        eaglerVersionsBtn.style.display = 'block';
    } else {
        eaglerVersionsBtn.style.display = 'none';
    }
});

// Eagler Craft version buttons
document.getElementById('version1_21').addEventListener('click', () => {
    iframePlayer.src = 'EaglercraftX_1.8_Offline_en_US.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none';
    openNewTabBtn.style.display = 'inline-block';
});

document.getElementById('version1_11').addEventListener('click', () => {
    iframePlayer.src = 'eagler.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none';
    openNewTabBtn.style.display = 'inline-block';
});

document.getElementById('version1_9_4').addEventListener('click', () => {
    iframePlayer.src = 'Eagler-2.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none';
    openNewTabBtn.style.display = 'inline-block';
});

document.getElementById('version1_8_modded').addEventListener('click', () => {
    iframePlayer.src = 'eaglermodded - Copy.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none';
    openNewTabBtn.style.display = 'inline-block';
});

btn2.addEventListener('click', () => {
    iframePlayer.src = 'Monkey.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none';
    openNewTabBtn.style.display = 'inline-block';
});

btn3.addEventListener('click', () => {
    iframePlayer.src = 'RetroBowlV2T2 (1).html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none';
    openNewTabBtn.style.display = 'inline-block';
});

// Close media player
closeBtn.addEventListener('click', () => {
    mediaPlayer.style.display = 'none';
    iframePlayer.src = ''; // Clear iframe source
    eaglerVersionsBtn.style.display = 'block';
    openNewTabBtn.style.display = 'none';
});

// Run in a different tab
runDifferentTabBtn.addEventListener('click', () => {
    window.open(iframePlayer.src, '_blank');
});

// Open current iframe content in a different tab using the new button
openNewTabBtn.addEventListener('click', () => {
    const currentSrc = iframePlayer.src;
    if (currentSrc) {
        window.open(currentSrc, '_blank');
    }
});
