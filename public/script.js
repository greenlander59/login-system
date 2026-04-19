async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const btn = document.querySelector("button");
    btn.innerText = "Loading...";
    btn.disabled = true;

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    btn.innerText = "Login";
    btn.disabled = false;

    document.getElementById("result").innerText = data.message;

    // ✅ SAVE TOKEN + REDIRECT
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);

      window.location.href = "dashboard.html";
    }
  } catch (error) {
    console.log(error);
    alert("Error ❌");
  }
}

// ✅ LOGOUT
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.href = "index.html";
}
