function sendVericationCode(email) {

    console.log('Verification code sent to:', email);
}


function signUp(email, username, password) {
    console.log('Signed up with email', email, 'username:', username, 'and password:', password);
}

document.addEventListener('DomContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const username = usernameInput.value;
        const password = passwordInput.value;
       // Call Sign up function 
       signUp(email, username, password);
       // Send Verificatoin code to users email
        sendVerificationCode(email);
        // clear Form Inputs
        emailInput.value = ''; 
        usernameInput.value = '';
        password.Input.value = '';               
    });

});

const artists = [
    {name: 'Artist 1', votes: 0},

    {name: 'Artist 2', votes: 0}
];
function displayArtist() {
    const votingSection = document.getElementById('votingSection');
    votingSection.innerHTML = '';
    artists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.innerHTML = ` 
        <h2>${artist.name}</h2>
        <p>Votes: ${artist.votes}</p>
        <button class="voteBtn">Vote</button>
        `; 
        votingSectoin.appendChild(artistDiv);
    });
}
displayArtist();

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('voteBtn')) {
        const artistName = e.target.previousElementSibling.textContent;
        const artist = artist.find(artsit => artist.name === artistName);
        if(artist) {
            artist.votes++;
            displayArtist();

        }
    }

});
const form = document.getElementById("registration");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  const passwordCheck = form.elements["passwordCheck"].value;
  const terms = form.elements["terms"].checked;

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Basic email format validation
  };

  const validatePassword = (password) => {
    return password.length >= 8; // Password must be at least 8 characters long
  };

  // Clear previous error messages
  document.querySelectorAll(".error-msg").forEach((msg) => msg.style.display = "none");

  // Perform validation
  let valid = true;
  if (!validateEmail(email)) {
    document.getElementById("emailError").style.display = "block";
    valid = false;
  }
  if (!validatePassword(password)) {
    document.getElementById("passwordError").style.display = "block";
    valid = false;
  }
  if (password !== passwordCheck) {
    document.getElementById("passwordMatchError").style.display = "block";
    valid = false;
  }
  if (!terms) {
    document.getElementById("termsError").style.display = "block";
    valid = false;
  }

  // If all validations pass, submit the form
  if (valid) {
    form.submit();
  }
});

