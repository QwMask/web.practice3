document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Удаляем предыдущие сообщения об ошибках
    clearErrors();

    // Получаем значения полей
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    let valid = true;

    // Валидация имени
    if (name === "") {
        showError("nameError", "Name is required.");
        valid = false;
    }

    // Валидация email
    if (!validateEmail(email)) {
        showError("emailError", "Please enter a valid email.");
        valid = false;
    }

    // Валидация страны
    if (country === "") {
        showError("countryError", "Country is required.");
        valid = false;
    }

    // Валидация телефона
    if (!validatePhone(phone)) {
        showError("phoneError", "Please enter a valid phone number.");
        valid = false;
    }

    // Валидация пароля
    if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters.");
        valid = false;
    }

    // Валидация условий
    if (!terms) {
        showError("termsError", "You must accept the terms and conditions.");
        valid = false;
    }

    if (valid) {
        console.log({
            name: name,
            email: email,
            country: country,
            phone: phone,
            password: password
        });
        alert(`Registration successful, ${name}!`);
    }
});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error-message").forEach((element) => {
        element.textContent = "";
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]+$/;
    return re.test(phone);
}

// Показать/скрыть пароль
document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
});
