document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("email");
        let password = document.getElementById("password");

        if (!email.value.includes("@")) {
            email.classList.add("is-invalid");
        } else {
            email.classList.remove("is-invalid");
        }

        if (password.value.trim() === "") {
            password.classList.add("is-invalid");
        } else {
            password.classList.remove("is-invalid");
            alert("Login bem-sucedido! (Simulação)");
        }
    });
});
