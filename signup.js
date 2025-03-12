document.getElementById("signupform").addEventListener("submit", function (event) {
    event.preventDefault();

    let dob = document.getElementById("dob").value;
    let birthYear = new Date(dob).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    localStorage.setItem("userAge", age);


    window.location.href = "index.html";
});
