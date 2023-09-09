document.addEventListener("DOMContentLoaded", function () {
    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");
    const loginForm = document.querySelector(".login-form");
    const signupForm = document.querySelector(".signup-form");

    loginTab.addEventListener("click", function () {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        loginForm.classList.add("active-form");
        signupForm.classList.remove("active-form");
    });

    signupTab.addEventListener("click", function () {
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
        signupForm.classList.add("active-form");
        loginForm.classList.remove("active-form");
    });

    // Inicialmente, exibimos o formulário de login
    loginTab.click();
});

