// Storymaker - A See 'N Say Style Story Generator

// ====================
// DATA AND THEMES
// ====================
const themes = {
    default: {
      characters: ['a pirate', 'a robot', 'a princess', 'a dragon'],
      actions: ['found a treasure', 'solved a riddle', 'rescued a friend', 'flew to the moon'],
      locations: ['in a forest', 'on a mountain', 'under the sea', 'in a castle'],
      name: 'Fantasy'
    },
    alternate: {
      characters: ['an astronaut', 'a chef', 'a detective', 'a wizard'],
      actions: ['discovered a planet', 'cooked a feast', 'solved a mystery', 'cast a spell'],
      locations: ['in space', 'in a kitchen', 'in a haunted house', 'in a library'],
      name: 'Adventure'
    }
  };
  
  // ====================
  // APP STATE
  // ====================
  let currentTheme = themes.default;
  let selectedCharacter = '';
  let selectedAction = '';
  let selectedLocation = '';
  
  // ====================
  // DOM ELEMENTS
  // ====================
  const characterBtn = document.getElementById('character-btn');
  const actionBtn = document.getElementById('action-btn');
  const locationBtn = document.getElementById('location-btn');
  const storyDisplay = document.getElementById('story-display');
  
  // ====================
  // CORE FUNCTIONS
  // ====================
  function getRandomPart(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function updateDisplay() {
    // Update button states
    characterBtn.classList.toggle('selected', !!selectedCharacter);
    actionBtn.classList.toggle('selected', !!selectedAction);
    locationBtn.classList.toggle('selected', !!selectedLocation);
  
    // Build story or show prompt
    if (selectedCharacter && selectedAction && selectedLocation) {
      const story = `${selectedCharacter} ${selectedAction} ${selectedLocation}.`;
      storyDisplay.textContent = story;
      storyDisplay.classList.add('complete');
    } else {
      storyDisplay.textContent = 'Click the buttons to build your story!';
      storyDisplay.classList.remove('complete');
    }
  }
  
  // ====================
  // EVENT HANDLERS
  // ====================
  characterBtn.addEventListener('click', () => {
    selectedCharacter = getRandomPart(currentTheme.characters);
    updateDisplay();
  });
  
  actionBtn.addEventListener('click', () => {
    selectedAction = getRandomPart(currentTheme.actions);
    updateDisplay();
  });
  
  locationBtn.addEventListener('click', () => {
    selectedLocation = getRandomPart(currentTheme.locations);
    updateDisplay();
  });
  
  // ====================
  // RESET FUNCTIONALITY
  // ====================
  document.getElementById('reset-btn').addEventListener('click', () => {
    selectedCharacter = '';
    selectedAction = '';
    selectedLocation = '';
    updateDisplay();
  });
  
  // ====================
  // AUDIO OUTPUT
  // ====================
  function speakStory() {
    if (storyDisplay.classList.contains('complete') && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(storyDisplay.textContent);
      speechSynthesis.speak(utterance);
    }
  }
  
  // Create and add Speak button
  const speakButton = document.createElement('button');
  speakButton.className = 'story-button';
  speakButton.textContent = '🔊 Speak Story';
  speakButton.addEventListener('click', speakStory);
  document.getElementById('story-controls').appendChild(speakButton);
  
  // ====================
  // THEME SWITCHING
  // ====================
  function switchTheme() {
    currentTheme = currentTheme === themes.default ? themes.alternate : themes.default;
    selectedCharacter = '';
    selectedAction = '';
    selectedLocation = '';
    
    // Update theme display
    document.getElementById('theme-display').textContent = currentTheme.name;
    updateDisplay();
  }
  
  // Create and add Theme button
  const themeButton = document.createElement('button');
  themeButton.className = 'story-button';
  themeButton.textContent = '🔄 Switch Theme';
  themeButton.addEventListener('click', switchTheme);
  document.getElementById('story-controls').appendChild(themeButton);
  
  // Initialize theme display
  const themeDisplay = document.createElement('div');
  themeDisplay.id = 'theme-display';
  themeDisplay.textContent = currentTheme.name;
  document.getElementById('story-controls').prepend(themeDisplay);
  
  // Initial display update
  updateDisplay();