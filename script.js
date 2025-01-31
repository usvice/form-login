document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form melakukan submit default

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username dan Password harus diisi!");
    } else {
        alert("Login berhasil!"); // Gantilah dengan validasi login yang sebenarnya
    }
});
