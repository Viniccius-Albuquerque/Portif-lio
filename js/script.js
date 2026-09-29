const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

const tema = document.getElementById("tema");

if (tema) {
    tema.addEventListener("click", function () {
        document.body.classList.toggle("escuro");

        if (document.body.classList.contains("escuro")) {
            tema.textContent = "☀";
        } else {
            tema.textContent = "☾";
        }
    });
}

const botaoMostrar = document.getElementById("mostrar-mais");

if (botaoMostrar) {
    const sobre = document.querySelector(".sobre");
    const paragrafos = sobre.querySelectorAll("p");

    paragrafos.forEach(function (paragrafo, indice) {
        if (indice >= 4) {
            paragrafo.hidden = true;
        }
    });

    botaoMostrar.addEventListener("click", function () {
        const oculto = paragrafos[4].hidden;

        paragrafos.forEach(function (paragrafo, indice) {
            if (indice >= 4) {
                paragrafo.hidden = !oculto;
            }
        });

        if (oculto) {
            botaoMostrar.textContent = "Mostrar menos";
        } else {
            botaoMostrar.textContent = "Mostrar mais";
        }
    });
}

const formulario = document.getElementById("form-contato");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "") {
            alert("Preencha o campo nome.");
        } else if (email === "") {
            alert("Preencha o campo e-mail.");
        } else if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um e-mail válido.");
        } else if (mensagem === "") {
            alert("Preencha o campo mensagem.");
        } else {
            alert("Mensagem enviada com sucesso!");
            formulario.reset();
        }
    });
}
