async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  document.getElementById("result").innerText = data.message;

  // ✅ NEW PART (redirect)
  if (data.message.includes("successful")) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username); // ✅ save username
    window.location.href = "dashboard.html";
  }
}
