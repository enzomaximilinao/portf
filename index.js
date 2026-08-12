const themeToggle = document.getElementById("theme-toggle");


/* ==========================================================
   VERIFICAÇÃO
   ========================================================== */

console.log("Sistema de tema carregado.");

console.log("Botão encontrado:", themeToggle);


/* ==========================================================
   VERIFICAR TEMA SALVO
   ========================================================== */

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "🌙";

} else {

    themeToggle.textContent = "☀️";

}


/* ==========================================================
   ALTERAR TEMA
   ========================================================== */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    const isLightMode =
        document.body.classList.contains("light-mode");


    if (isLightMode) {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});