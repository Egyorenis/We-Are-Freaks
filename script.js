<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FreakCraft</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
            overflow: hidden;
            position: relative;
        }

        h1 {
            font-size: 72px;
            color: black;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            margin: 0 0 20px 0; /* Margin to separate the heading from the buttons */
        }

        button {
            font-size: 24px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 8px;
            border: none;
            background-color: #4CAF50;
            color: white;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #45a049;
        }

        .media-player {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            display: none;
            z-index: 10;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        .close-btn, .run-different-tab-btn {
            position: absolute;
            background: transparent;
            color: white;
            padding: 10px;
            border: 2px solid white;
            cursor: pointer;
            z-index: 11;
            font-size: 16px; /* Smaller font size */
            transition: color 0.3s ease;
        }

        .close-btn:hover {
            color: red;
        }

        .run-different-tab-btn:hover {
            color: lightgreen;
        }

        #eaglerVersionsBtn {
            display: none; /* Initially hidden */
        }

        #versionButtons {
            display: none;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }

        .version-buttons button {
            background-color: #555;
        }

        /* Bug report styles */
        form {
            display: flex;
            flex-direction: column;
            width: 300px;
            margin-top: 20px;
        }

        label {
            margin-top: 10px;
        }

        textarea {
            resize: none;
        }

        /* View counter style */
        #viewCount {
            margin-top: 20px;
            font-size: 18px;
            color: #333;
        }

        /* Hamburger menu styles */
        #hamburgerMenu {
            font-size: 24px;
            background: none;
            border: none;
            color: black;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <header>
        <button id="hamburgerMenu">☰</button> <!-- Hamburger menu button -->
        <button id="eaglerVersionsBtn">EaglerCraft Versions</button>
    </header>

    <main>
        <h1>WE ARE FREAKS.</h1>

        <button id="btn2">Open Monkey.html</button>
        <button id="btn3">Open RetroBowlV2T2 (1).html</button>

        <div class="version-buttons" id="versionButtons">
            <button id="version1_21">EaglerCraft 1.21</button>
            <button id="version1_11">EaglerCraft 1.11</button>
            <button id="version1_9_4">EaglerCraft 1.9.4</button>
            <button id="version1_8_modded">EaglerCraft 1.8 (MODDED)</button>
        </div>

        <div class="media-player" id="mediaPlayer">
            <button class="close-btn" id="closeBtn">Close</button>
            <iframe id="iframePlayer" src="" frameborder="0"></iframe>
            <button class="run-different-tab-btn" id="runDifferentTabBtn">Run in Different Tab</button>
        </div>
        
        <div>
            <audio id="audioPlayer" src="your-audio-file.mp3"></audio>
            <button id="playSongBtn">Play Song</button>
        </div>

        <div id="viewCount"></div>
    </main>

    <script>
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
        });

        document.getElementById('version1_11').addEventListener('click', () => {
            iframePlayer.src = 'eagler.html';
            mediaPlayer.style.display = 'block';
            eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
        });

        document.getElementById('version1_9_4').addEventListener('click', () => {
            iframePlayer.src = 'Eagler-2.html';
            mediaPlayer.style.display = 'block';
            eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
        });

        // New EaglerCraft 1.8 (MODDED) button
        document.getElementById('version1_8_modded').addEventListener('click', () => {
            iframePlayer.src = 'eaglermodded - Copy.html';
            mediaPlayer.style.display = 'block';
            eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
        });

        // Button 2 click event: Open Monkey.html in the media player iframe
        btn2.addEventListener('click', () => {
            iframePlayer.src = 'Monkey.html';
            mediaPlayer.style.display = 'block';
            eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
        });

        // Button 3 click event: Open RetroBowlV2T2 (1).html
        btn3.addEventListener('click', () => {
            iframePlayer.src = 'RetroBowlV2T2 (1).html';
            mediaPlayer.style.display = 'block';
            eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
        });

        // Close media player
        closeBtn.addEventListener('click', () => {
            mediaPlayer.style.display = 'none';
            eaglerVersionsBtn.style.display = 'none'; // Hide button when media player is open
            versionButtons.style.display = 'none'; // Hide version buttons when media player is closed
        });

        // Run in a different tab
        runDifferentTabBtn.addEventListener('click', () => {
            window.open(iframePlayer.src, '_blank');
        });

        // Play audio
        playSongBtn.addEventListener('click', () => {
            audioPlayer.play();
        });
    </script>
</body>
</html>
