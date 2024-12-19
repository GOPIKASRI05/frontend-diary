document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") { // Example credentials
        alert("Login Successful!");
        document.getElementById("auth-section").style.display = "none";
        document.getElementById("diary-section").style.display = "block";
    } else {
        alert("Invalid credentials!");
    }
});

document.getElementById("entry-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const entryContent = document.getElementById("entry-content").value;
    const entriesList = document.getElementById("entries-list");

    const newEntry = document.createElement("div");
    newEntry.className = "entry";
    newEntry.textContent = entryContent;

    entriesList.appendChild(newEntry);
    document.getElementById("entry-content").value = ""; // Clear the textarea
});