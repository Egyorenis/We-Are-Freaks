// Select elements
const bugReportBtn = document.getElementById('bugReportBtn');
const bugReportForm = document.getElementById('bugReportForm');

// Toggle bug report form visibility
bugReportBtn.addEventListener('click', () => {
    if (bugReportForm.style.display === 'none' || bugReportForm.style.display === '') {
        bugReportForm.style.display = 'block';
    } else {
        bugReportForm.style.display = 'none';
    }
});

// Handle bug report form submission
bugReportForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather data
    const bugType = document.getElementById('bugType').value;
    const bugDescription = document.getElementById('bugDescription').value;
    const suggestions = document.getElementById('suggestions').value;

    // Send the bug report to the Discord webhook
    fetch('https://discord.com/api/webhooks/1298767502322434118/iEALRWeBG9RQ6wuqtiMtNfxWi84v-uyJiubZwap2T7EAj7H8hdBryo2i_zrz5vxEfwVsC', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `**Bug Report**\n**Type:** ${bugType}\n**Description:** ${bugDescription}\n**Suggestions:** ${suggestions}`,
        }),
    })
    .then(response => {
        if (response.ok) {
            alert('Bug report submitted successfully!');
            // Reset form
            bugReportForm.reset();
            bugReportForm.style.display = 'none';
        } else {
            alert('Error submitting bug report. Please try again later.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting bug report. Please try again later.');
    });
});
