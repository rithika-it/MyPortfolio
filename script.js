
const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
}

// Toggle theme on button click
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
});
