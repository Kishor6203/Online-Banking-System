// Small interactive touch (optional)

const header = document.querySelector(".top-header");

header.addEventListener("mouseover", () => {
    header.style.background = "linear-gradient(90deg, #dbeafe, #f0f9ff)";
});

header.addEventListener("mouseout", () => {
    header.style.background = "linear-gradient(90deg, #e0f2fe, #f0f9ff)";
});

//=====================NAVBAR SECTION=================================


document.addEventListener("DOMContentLoaded", () => {

    // ================= DROPDOWN CLICK =================
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", (e) => {
            e.preventDefault(); // stop page redirect
            dropdownMenu.classList.toggle("show");
        });
    }

    // ================= CLOSE DROPDOWN =================
    document.addEventListener("click", (e) => {
        if (dropdownMenu && !e.target.closest(".dropdown")) {
            dropdownMenu.classList.remove("show");
        }
    });

    // ================= LANGUAGE =================
    const lang = document.querySelector(".language-select");
    if (lang) {
        lang.addEventListener("change", function () {
            alert("Language: " + this.value);
        });
    }

    // ================= COUNTRY =================
    const country = document.querySelector(".country-select");
    if (country) {
        country.addEventListener("change", function () {
            alert("Country: " + this.value);
        });
    }

});

//==================HERO SECTION=============================================

// Smooth entrance animation
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hero-left, .hero-right");

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.transition = "1s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        });
    }, 300);
});

// Button ripple effect
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

//==================ABOUT SECTION=============================================

const aboutSection = document.querySelector(".about");
const featureCards = document.querySelectorAll(".feature-card");

// Initial state (hidden)
aboutSection.style.opacity = 0;
aboutSection.style.transform = "translateY(60px)";
aboutSection.style.transition = "1s ease";

// Scroll animation trigger
window.addEventListener("scroll", () => {
    const top = aboutSection.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = "translateY(0)";

        // animate cards one by one
        featureCards.forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }, i * 150);
        });
    }
});

// Initial card state
featureCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";
});

// =================SERVICE SECTION===========================================

const serviceCards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (cardTop < screenHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial state
serviceCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});

//===========================TRUST SECTION============================

const trustCards = document.querySelectorAll(".trust-card");

window.addEventListener("scroll", () => {
    trustCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial state
trustCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});

//===========================DASHBOARD SECTION========================

const dashboard = document.querySelector(".dashboard");

window.addEventListener("scroll", () => {
    const top = dashboard.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
        dashboard.style.opacity = 1;
        dashboard.style.transform = "translateY(0)";
    }
});

// Initial state
dashboard.style.opacity = 0;
dashboard.style.transform = "translateY(50px)";
dashboard.style.transition = "1s ease";

//=========================REVIEW SECTION============================

//no need javascript for testimonial section-------------

//=========================CALL TO ACTION SECTION=====================

const cta = document.querySelector(".cta");

window.addEventListener("scroll", () => {
    const top = cta.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
        cta.style.opacity = 1;
        cta.style.transform = "scale(1)";
    }
});

// Initial state
cta.style.opacity = 0;
cta.style.transform = "scale(0.9)";
cta.style.transition = "0.6s ease";

//===========================CONTACT SECTION==========================

// Scroll animation
const contactSection = document.querySelector(".contact");
const infoCards = document.querySelectorAll(".info-card");
const form = document.querySelector(".contact-form");

contactSection.style.opacity = 0;
contactSection.style.transform = "translateY(50px)";
contactSection.style.transition = "1s ease";

window.addEventListener("scroll", () => {
    const top = contactSection.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
        contactSection.style.opacity = 1;
        contactSection.style.transform = "translateY(0)";

        infoCards.forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }, i * 150);
        });

        form.style.opacity = 1;
        form.style.transform = "translateY(0)";
    }
});

// Initial state
infoCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";
});

form.style.opacity = 0;
form.style.transform = "translateY(30px)";
form.style.transition = "0.6s ease";

// Simple form submit effect
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
});

//===========================FOOTER SECTION===========================

// Footer animation on scroll
const footer = document.querySelector(".footer");
const footerCols = document.querySelectorAll(".footer-col");

footer.style.opacity = 0;
footer.style.transform = "translateY(50px)";
footer.style.transition = "1s ease";

// Scroll trigger
window.addEventListener("scroll", () => {
    const top = footer.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
        footer.style.opacity = 1;
        footer.style.transform = "translateY(0)";

        // animate columns one by one
        footerCols.forEach((col, i) => {
            setTimeout(() => {
                col.style.opacity = 1;
                col.style.transform = "translateY(0)";
            }, i * 150);
        });
    }
});

// initial state
footerCols.forEach(col => {
    col.style.opacity = 0;
    col.style.transform = "translateY(30px)";
    col.style.transition = "0.6s ease";
});

//==========================GALLERY SECTION====================================

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(30px)";
    item.style.transition = "0.6s ease";

    setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
    }, index * 100);
});

//==========================LOAN SECTION====================================

const loanCards = document.querySelectorAll(".loan-card");

loanCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

    setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
    }, index * 100);
});

//============================ACCOUNT SECTION======================================

const accountCards = document.querySelectorAll(".account-card");
const kycBox = document.querySelector(".kyc-box");

accountCards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.5s ease";

    setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
    }, i * 80);
});

kycBox.style.opacity = 0;
kycBox.style.transform = "translateY(40px)";
kycBox.style.transition = "0.8s ease";

setTimeout(() => {
    kycBox.style.opacity = 1;
    kycBox.style.transform = "translateY(0)";
}, 400);

//==============================MUTUAL FUNDS SECTION=========================================


document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("investPopup");
    const closeBtn = document.getElementById("closePopup");
    const planInput = document.getElementById("planName");
    const amountInput = document.getElementById("investAmount");
    const form = document.getElementById("investForm");

    // OPEN POPUP
    document.querySelectorAll(".invest-btn").forEach(btn => {
        btn.addEventListener("click", () => {

            let plan = btn.getAttribute("data-plan");
            let amount = btn.getAttribute("data-amount");

            planInput.value = plan;
            amountInput.value = amount;

            popup.style.display = "flex";
        });
    });

    // CLOSE POPUP
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // CLOSE WHEN CLICK OUTSIDE
    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // FORM SUBMIT
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Investment Successful 🚀");

        popup.style.display = "none";
    });

});

//================================LOGIN FORM SECTION==================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const role = document.getElementById("role");
    const errorMsg = document.getElementById("errorMsg");
    const rememberMe = document.getElementById("rememberMe");
    const toggle = document.getElementById("togglePassword");

    // ================= LOAD SAVED USER =================
    if (localStorage.getItem("savedUser")) {
        username.value = localStorage.getItem("savedUser");
        rememberMe.checked = true;
    }

    // ================= SHOW/HIDE PASSWORD =================
    toggle.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            toggle.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            password.type = "password";
            toggle.classList.replace("fa-eye-slash", "fa-eye");
        }
    });

    // ================= LOGIN SYSTEM =================
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let user = username.value.trim();
        let pass = password.value.trim();
        let selectedRole = role.value;

        errorMsg.textContent = "";

        // validation
        if (!user || !pass) {
            errorMsg.textContent = "All fields are required!";
            return;
        }

        // ================= ADMIN LOGIN =================
        if (selectedRole === "admin") {

            if (user === "admin" && pass === "admin123") {

                if (rememberMe.checked) {
                    localStorage.setItem("savedUser", user);
                }

                alert("Admin Login Successful 🚀");

                window.location.href = "admin-dashboard.html";

            } else {
                errorMsg.textContent = "Invalid Admin Credentials!";
            }

        }

        // ================= USER LOGIN =================
        else {

            if (user === "user" && pass === "user123") {

                if (rememberMe.checked) {
                    localStorage.setItem("savedUser", user);
                }

                alert("User Login Successful 🚀");

                window.location.href = "user-dashboard.html";

            } else {
                errorMsg.textContent = "Invalid User Credentials!";
            }
        }

    });

});

//==============================LOCATION SECTION===================================

// ================= SCROLL REVEAL =================
function reveal() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

//===============================CREATE ACCOUNT SECTION===============================

const toggle = document.getElementById("toggle");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
    const show = password.type === "password";
    password.type = show ? "text" : "password";

    toggle.innerHTML = show
        ? '<i class="fa fa-eye-slash"></i>'
        : '<i class="fa fa-eye"></i>';
});

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