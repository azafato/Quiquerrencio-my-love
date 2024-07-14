document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const testForm = document.getElementById("testForm");
    const resultDiv = document.getElementById("result");

    // Simulación de una base de datos en memoria
    const users = [];

    // Registro de usuario
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        users.push({ email, password });
        alert("Registro exitoso!");
        registerForm.reset();
    });

    // Inicio de sesión
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert("Inicio de sesión exitoso!");
            window.location.href = "test.html";
        } else {
            alert("Credenciales incorrectas!");
        }
        loginForm.reset();
    });

    // Envío del test
    if (testForm) {
        testForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const question1 = document.getElementById("question1").value;
            // Aquí puedes personalizar los resultados
            resultDiv.innerText = `Tu respuesta fue: ${question1}`;
            testForm.reset();
        });
    }
});
