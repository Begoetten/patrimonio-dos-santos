// JavaScript - Interatividade do site
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#welcome-button");

    if (button) {
        button.addEventListener("click", function() {
            alert("Bem-vindo ao site! Esperamos que você aprenda mais sobre os santos.");
        });
    }
});
