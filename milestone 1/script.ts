// Get the button and the skills section elements
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

// Function to toggle visibility
function toggleSkillsVisibility() {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills Section';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills Section';
  }
}

// Event listener for button click
toggleSkillsBtn.addEventListener('click', toggleSkillsVisibility);

// Initialize with the skills section visible
skillsSection.style.display = 'block';
