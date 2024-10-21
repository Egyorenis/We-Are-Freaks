// Select elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2'); // Button 2 for Monkey.html
const mediaPlayer = document.getElementById('mediaPlayer');
const iframePlayer = document.getElementById('iframePlayer');
const closeBtn = document.getElementById('closeBtn');
const playSongBtn = document.getElementById('playSongBtn'); // Button for playing the song
const audioPlayer = document.getElementById('audioPlayer'); // Audio element
const settingsMenu = document.getElementById('settingsMenu'); // Settings menu
const settingsBtn = document.getElementById('settingsBtn'); // Settings button
const enableNotesBtn = document.getElementById('enableNotes'); // Enable notes button
const notesBtn = document.getElementById('notesBtn'); // Notes button in media player
const notesApp = document.getElementById('notesApp'); // Notes app modal
const notesTextarea = document.getElementById('notesTextarea'); // Notes textarea
const saveNotesBtn = document.getElementById('saveNotesBtn'); // Save notes button

let notesEnabled = false;

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
    audioPlayer.play().then(() => {
        console.log('Audio is playing'); // Debugging if playback starts
    }).catch(error => {
        console.error('Error playing audio:', error); // Log error if playback fails
    });
});

// Settings button click event: Toggle settings menu
settingsBtn.addEventListener('click', () => {
    console.log('Settings button clicked, toggling settings menu'); // Debugging
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});

// Enable notes button click event: Toggle notes feature
enableNotesBtn.addEventListener('click', () => {
    notesEnabled = !notesEnabled; // Toggle notes enabled state
    console.log(`Notes enabled: ${notesEnabled}`); // Debugging
    if (notesEnabled) {
        notesBtn.style.display = 'block'; // Show the Notes button
        enableNotesBtn.innerText = 'Disable Notes'; // Change button text
        enableNotesBtn.style.backgroundColor = 'green'; // Turn button green
    } else {
        notesBtn.style.display = 'none'; // Hide the Notes button
        enableNotesBtn.innerText = 'Enable Notes'; // Change button text
        enableNotesBtn.style.backgroundColor = ''; // Reset button color
    }
});

// Notes button click event: Open notes app
notesBtn.addEventListener('click', () => {
    console.log('Notes button clicked, opening notes app'); // Debugging
    notesApp.style.display = 'block'; // Show the notes app
    notesTextarea.value = localStorage.getItem('notes') || ''; // Load saved notes
});

// Save notes button click event: Save notes to local storage
saveNotesBtn.addEventListener('click', () => {
    console.log('Save Notes button clicked, saving notes'); // Debugging
    localStorage.setItem('notes', notesTextarea.value); // Save notes to local storage
    alert('Notes saved!'); // Optional alert for confirmation
});

// Close notes app when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === notesApp) {
        notesApp.style.display = 'none'; // Hide notes app
    }
});
