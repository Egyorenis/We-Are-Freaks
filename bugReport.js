const bugReportForm = document.getElementById('bugReportForm');

bugReportForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const bugType = document.getElementById('bugType').value;
    const bugDescription = document.getElementById('bugDescription').value;
    const suggestions = document.getElementById('suggestions').value;

    const webhookURL = 'https://discord.com/api/webhooks/1292665840742961184/R98tRkuR4Y0wYwx9TSSVAi2khRgzM_eoXzv58vtioivocGmjwwwyhMjbwaHiWinlXEyC';

    const payload = {
        content: `**Bug Report**\n**Type:** ${bugType}\n**Description:** ${bugDescription}\n**Suggestions:** ${suggestions || 'None'}`,
    };

    try {
        await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        alert('Bug report submitted successfully!');
        bugReportForm.reset(); // Reset the form after submission
    } catch (error) {
        console.error('Error submitting bug report:', error);
        alert('There was an error submitting your bug report. Please try again later.');
    }
});
