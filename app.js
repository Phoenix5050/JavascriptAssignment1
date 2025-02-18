// Story elements arrays
const characters = ['a pirate', 'a robot', 'a princess', 'a dragon'];
const actions = ['found a treasure', 'solved a riddle', 'rescued a friend', 'flew to the moon'];
const locations = ['in a forest', 'on a mountain', 'under the sea', 'in a castle'];

// Initialize selected story parts
let selectedCharacter = '';
let selectedAction = '';
let selectedLocation = '';

// Function to generate a random story part
function getRandomPart(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listeners for buttons
document.getElementById('character-btn').addEventListener('click', () => {
    selectedCharacter = getRandomPart(characters);
    updateDisplay();
});

document.getElementById('action-btn').addEventListener('click', () => {
    selectedAction = getRandomPart(actions);
    updateDisplay();
});

document.getElementById('location-btn').addEventListener('click', () => {
    selectedLocation = getRandomPart(locations);
    updateDisplay();
});

// Update the story display
function updateDisplay() {
    const story = `${selectedCharacter} ${selectedAction} ${selectedLocation}.`;
    document.getElementById('story-display').textContent = story;
}