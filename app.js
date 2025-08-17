// ------------------------------
// Player Signup
// ------------------------------
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let player = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      fullname: document.getElementById("fullname").value,
      facebook: document.getElementById("facebook").value,
      phone: document.getElementById("phone").value,
      blood: document.getElementById("blood").value,
      location: document.getElementById("location").value,
      device: document.getElementById("device").value,
      konami: document.getElementById("konami").value,
    };

    // Save to localStorage
    localStorage.setItem("player_" + player.email, JSON.stringify(player));

    alert("✅ Player Signup successful!");
    signupForm.reset();
  });
}

// ------------------------------
// Player Login
// ------------------------------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedPlayer = JSON.parse(localStorage.getItem("player_" + email));

    if (storedPlayer && storedPlayer.password === password) {
      alert("✅ Login successful! Welcome " + storedPlayer.fullname);
      loginForm.reset();
    } else {
      alert("❌ Invalid Email or Password");
    }
  });
}

// ------------------------------
// Forget Password
// ------------------------------
function forgotPassword() {
  let email = prompt("Enter your registered email:");
  let storedPlayer = JSON.parse(localStorage.getItem("player_" + email));

  if (storedPlayer) {
    alert("🔑 Your password is: " + storedPlayer.password);
  } else {
    alert("❌ No account found with this email.");
  }
}
