const audioPlayer = document.getElementById('audioPlayer');
const playSongBtn = document.getElementById('playSongBtn');
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');
const adminPanel = document.getElementById('adminPanel');
const userList = document.getElementById('userList');
const banUserBtn = document.getElementById('banUserBtn');
const banTokenId = document.getElementById('banTokenId');

let userToken = localStorage.getItem('userToken');
let bannedTokens = JSON.parse(localStorage.getItem('bannedTokens')) || [];

// Function to generate a random token ID
function generateTokenId() {
    return Math.random().toString(36).substr(2, 9); // Random alphanumeric string
}

// Check if user has a token, if not, assign one
if (!userToken) {
    userToken = generateTokenId();
    localStorage.setItem('userToken', userToken);
    // Store device information with token
    const deviceInfo = getDeviceInfo();
    const userData = { token: userToken, device: deviceInfo };
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Display token ID and device information on the console for tracking
console.log('User Token ID:', userToken);
console.log('Device Info:', getDeviceInfo());

// Function to get device information
function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    if (/mobile/i.test(userAgent)) {
        return "Mobile";
    } else if (/tablet/i.test(userAgent)) {
        return "Tablet";
    } else {
        return "Desktop";
    }
}

// Function to display users in the admin panel
function displayUsers() {
    userList.innerHTML = ''; // Clear current user list
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        const userDiv = document.createElement('div');
        userDiv.className = 'user-info';
        userDiv.textContent = `User Token ID: ${userData.token} and they are playing on: ${userData.device}`;
        const banButton = document.createElement('button');
        banButton.textContent = 'Ban';
        banButton.className = 'ban-btn';
        banButton.onclick = () => {
            banUser(userData.token);
        };
        userDiv.appendChild(banButton);
        userList.appendChild(userDiv);
    } else {
        userList.innerHTML = 'No users found.';
    }

    // Display banned users
    if (bannedTokens.length > 0) {
        bannedTokens.forEach(token => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-info';
            userDiv.textContent = `Banned Token ID: ${token}`;
            userList.appendChild(userDiv);
        });
    }
}

// Function to ban a user
function banUser(token) {
    if (!bannedTokens.includes(token)) {
        bannedTokens.push(token);
        localStorage.setItem('bannedTokens', JSON.stringify(bannedTokens));
        displayUsers();
        alert(`User with Token ID ${token} has been banned.`);
    } else {
        alert(`User with Token ID ${token} is already banned.`);
    }
}

// Key listener for admin access
document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift' && event.code === 'ShiftRight') {
        const adminCode = prompt('Enter admin access code:');
        if (adminCode === '005602') {
            adminPanel.style.display = 'block';
            displayUsers();
        }
    }
});

// Ban user button
banUserBtn.addEventListener('click', () => {
    const tokenToBan = banTokenId.value;
    banUser(tokenToBan);
});

// Event listeners for other buttons
playSongBtn.addEventListener('click', () => {
    audioPlayer.play().catch(error => console.error('Error playing audio:', error));
});

closeBtn.addEventListener('click', () => {
    mediaPlayer.style.display = 'none';
});

// Media player button click handlers would be here...
