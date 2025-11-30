const Login = () => {
    const form = `
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card shadow">
                    <div class="card-header text-center">
                        <h4>Iniciar Sesión</h4>
                    </div>
                    <div class="card-body">
                        <form id="loginForm">
                            <div class="mb-3">
                                <label for="email" class="form-label">Correo electrónico</label>
                                <input type="text" class="form-control" id="email" placeholder="Tu email o usuario">
                                <small id="emailError" class="text-danger"></small>
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="password" placeholder="********">
                                <small id="passwordError" class="text-danger"></small>
                            </div>

                            <button type="submit" class="btn btn-primary w-100">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    setTimeout(() => {
        const form = document.getElementById("loginForm");

        const validarEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };

        const validarPassword = (password) => {
            const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
            return regex.test(password);
        };

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");

            let isValid = true;

            emailError.textContent = "";
            passwordError.textContent = "";

            if (!validarEmail(email)) {
                emailError.textContent = "El formato del correo no es válido.";
                isValid = false;
            }

            if (!validarPassword(password)) {
                passwordError.textContent = "La contraseña debe tener 6 caracteres, 1 mayúscula y 1 número.";
                isValid = false;
            }

            if (isValid) {
                location.hash = "#/animals";
            }
        });

    }, 0);

    return form;
};

export { Login };
