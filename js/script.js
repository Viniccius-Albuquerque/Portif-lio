const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

const tema = document.getElementById("tema");

function aplicarTema(escuro) {
    document.body.classList.toggle("escuro", escuro);

    if (tema) {
        tema.textContent = escuro ? "☀" : "☾";
        tema.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
        tema.setAttribute("aria-pressed", String(escuro));
        tema.title = escuro ? "Ativar tema claro" : "Ativar tema escuro";
    }
}

let temaSalvo = null;
try {
    temaSalvo = localStorage.getItem("tema-portfolio");
} catch (erro) {
    temaSalvo = null;
}

aplicarTema(temaSalvo === "escuro");

if (tema) {
    tema.addEventListener("click", function () {
        const escuro = !document.body.classList.contains("escuro");
        aplicarTema(escuro);

        try {
            localStorage.setItem("tema-portfolio", escuro ? "escuro" : "claro");
        } catch (erro) {
            // O tema continua funcionando mesmo se o navegador bloquear o armazenamento.
        }
    });
}