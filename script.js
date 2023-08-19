const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});


function getStarted() {
    alert('Get started button clicked!');
    // Add any additional functionality as needed
}

const signupButton = document.getElementById('signupButton');

signupButton.addEventListener('click', function () {
    window.open('signup.html', '_blank');
});
