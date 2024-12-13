// Function to fetch JSON data and render day boxes
async function fetchDaysData() {
    try {
        const response = await fetch('./data.json'); // Fetch JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch JSON');
        }

        const daysData = await response.json(); // Parse JSON data
        renderDayBoxes(daysData); // Render the day boxes
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

// Function to render day boxes in the container
function renderDayBoxes(daysData) {
    const container = document.getElementById('days-container');
    if (!container) {
        console.error('Days container not found');
        return;
    }

    daysData.forEach(data => {
        const dayBox = document.createElement('div');
        dayBox.className = 'day-box';

        // Unlocked boxes linking to their respective content
        dayBox.innerHTML = `
            <a href="${data.href}" class="day-link" style="color: white; text-decoration: none;">
                <h3>Day ${data.day}</h3>
                <p>${data.title}</p>
            </a>
        `;

        container.appendChild(dayBox); // Append each box
    });
}

// Initialize fetching and rendering of data
document.addEventListener('DOMContentLoaded', fetchDaysData);
