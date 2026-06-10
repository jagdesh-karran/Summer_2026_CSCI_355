// ============================================================
// FEATURE 1: HIGHLIGHT THE ACTIVE NAV LINK
//
// As the user scrolls, this checks which section is on screen
// and adds the "active" class to the matching nav link.
// The CSS then underlines that link so users know where they are.
// ============================================================

// Grab all the section elements from the page
const sections = document.querySelectorAll("section");

// Grab all the nav links
const navLinks = document.querySelectorAll("nav ul li a");

// This runs every time the user scrolls
window.addEventListener("scroll", function () {

  // We'll store which section is currently in view
  let currentSection = "";

  // Loop through each section and check if it's near the top of the screen
  sections.forEach(function (section) {
    // If the section top is within 200px of the top of the visible window,
    // it's the one we're currently viewing
    if (window.scrollY >= section.offsetTop - 200) {
      currentSection = section.getAttribute("id"); // e.g. "home", "about", etc.
    }
  });

  // Loop through nav links and update which one has the "active" class
  navLinks.forEach(function (link) {
    link.classList.remove("active"); // remove active from all links first

    // If this link points to the current section, make it active
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });

});


// ============================================================
// FEATURE 2: CONTACT FORM VALIDATION
//
// When the user clicks "Send Message", this function runs.
// It checks that all fields are filled in before "sending".
// It then shows a success or error message below the button.
// ============================================================

function sendMessage() {

  // Get the value (what the user typed) from each field
  var name    = document.getElementById("name").value.trim();
  var email   = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Get the feedback paragraph where we'll show a message
  var feedback = document.getElementById("form-feedback");

  // Check if any field is empty — .trim() removes extra spaces
  if (name === "" || email === "" || message === "") {
    // Show an error message in red
    feedback.textContent = "Please fill out all fields before sending.";
    feedback.style.color = "red";
    return; // stop here — don't continue
  }

  // If we get here, all fields are filled in
  // Show a success message in green
  feedback.textContent = "Thanks " + name + "! Your message has been received. I'll get back to you soon.";
  feedback.style.color = "green";

  // Clear the form fields after successful submission
  document.getElementById("name").value    = "";
  document.getElementById("email").value   = "";
  document.getElementById("message").value = "";

}
