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
    eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
    openNewTabBtn.style.display = 'inline-block'; // Show "Open in Different Tab" button
});

document.getElementById('version1_11').addEventListener('click', () => {
    iframePlayer.src = 'eagler.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
    openNewTabBtn.style.display = 'inline-block'; // Show "Open in Different Tab" button
});

document.getElementById('version1_9_4').addEventListener('click', () => {
    iframePlayer.src = 'Eagler-2.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
    openNewTabBtn.style.display = 'inline-block'; // Show "Open in Different Tab" button
});

// New EaglerCraft 1.8 (MODDED) button
document.getElementById('version1_8_modded').addEventListener('click', () => {
    iframePlayer.src = 'eaglermodded - Copy.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
    openNewTabBtn.style.display = 'inline-block'; // Show "Open in Different Tab" button
});

// Button 2 click event: Open Monkey.html in the media player iframe
btn2.addEventListener('click', () => {
    iframePlayer.src = 'Monkey.html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
    openNewTabBtn.style.display = 'inline-block'; // Show "Open in Different Tab" button
});

// Button 3 click event: Open RetroBowlV2T2 (1).html
btn3.addEventListener('click', () => {
    iframePlayer.src = 'RetroBowlV2T2 (1).html';
    mediaPlayer.style.display = 'block';
    eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
    openNewTabBtn.style.display = 'inline-block'; // Show "Open in Different Tab" button
});

// Close media player
closeBtn.addEventListener('click', () => {
    mediaPlayer.style.display = 'none';
    iframePlayer.src = ''; // Clear iframe source
    eaglerVersionsBtn.style.display = 'block'; // Show button when media player is closed
    openNewTabBtn.style.display = 'none'; // Hide "Open in Different Tab" button
});

// Run in a different tab
document.getElementById('runDifferentTabBtn').addEventListener('click', () => {
    window.open(iframePlayer.src, '_blank');
});

// Open current iframe content in a different tab using the new button
openNewTabBtn.addEventListener('click', () => {
    const currentSrc = iframePlayer.src;
    if (currentSrc) {
        window.open(currentSrc, '_blank');
    }
});
