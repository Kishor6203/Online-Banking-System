// PASSWORD TOGGLE
const toggle = document.getElementById("toggle");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
    const show = password.type === "password";
    password.type = show ? "text" : "password";

    toggle.innerHTML = show
        ? '<i class="fa fa-eye-slash"></i>'
        : '<i class="fa fa-eye"></i>';
});

// PAN / AADHAAR TOGGLE
const choices = document.querySelectorAll(".choice");
const panBox = document.getElementById("panBox");
const aadhaarBox = document.getElementById("aadhaarBox");

choices.forEach(btn => {
    btn.addEventListener("click", () => {
        choices.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (btn.dataset.type === "pan") {
            panBox.classList.remove("hidden");
            aadhaarBox.classList.add("hidden");
        } else {
            aadhaarBox.classList.remove("hidden");
            panBox.classList.add("hidden");
        }
    });
});