// Your script starts here
(function() {
    'use strict';

    // Function to extract and display player stats
    function extractAndDisplayStats() {
        const profileInfo = document.querySelector('.block-value'); // Adjust based on actual class names
        const ageElement = profileInfo.querySelector('.age-selector'); // Adjust to correct selector
        const levelElement = profileInfo.querySelector('.level-selector'); // Adjust to correct selector
        const lifeElement = document.querySelector('.user-info-value span'); // Adjust to correct selector
        
        if (!ageElement || !levelElement || !lifeElement) {
            console.error('Profile data not found. Make sure you are on a valid profile page.');
            return;
        }
        
        const age = ageElement.textContent.trim();
        const level = levelElement.textContent.trim();
        const life = lifeElement.textContent.trim();

        // Create a stats container
        const statsContainer = document.createElement('div');
        statsContainer.style.position = 'fixed';
        statsContainer.style.top = '50%';
        statsContainer.style.right = '10px';
        statsContainer.style.backgroundColor = 'white';
        statsContainer.style.border = '1px solid black';
        statsContainer.style.padding = '10px';
        statsContainer.style.zIndex = '1000';
        statsContainer.innerHTML = `
            <h3>Player Stats</h3>
            <p>Age: ${age}</p>
            <p>Level: ${level}</p>
            <p>Life: ${life}</p>
        `;
        document.body.appendChild(statsContainer);
    }

    // Run the function after the content is loaded
    window.addEventListener('load', extractAndDisplayStats);
})();
