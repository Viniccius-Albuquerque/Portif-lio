const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

const botaoTema = document.getElementById("tema");

function definirTema(escuro) {
    document.body.classList.toggle("escuro", escuro);

    if (botaoTema) {
        botaoTema.textContent = escuro ? "☀" : "☾";
        botaoTema.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
        botaoTema.setAttribute("aria-pressed", String(escuro));
    }
}

let temaSalvo = null;
try {
    temaSalvo = localStorage.getItem("tema-portfolio");
} catch (erro) {
    // O site continua funcionando se o armazenamento estiver indisponível.
}

definirTema(temaSalvo === "escuro");

if (botaoTema) {
    botaoTema.addEventListener("click", () => {
        const escuro = !document.body.classList.contains("escuro");
        definirTema(escuro);

        try {
            localStorage.setItem("tema-portfolio", escuro ? "escuro" : "claro");
        } catch (erro) {
            // A alternância funciona mesmo sem salvar a preferência.
        }
    });
}

// Marca a seção atual na navegação conforme o usuário rola a página.
const secoes = document.querySelectorAll("main section[id]");
const linksNavegacao = document.querySelectorAll(".navegacao a");

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                linksNavegacao.forEach((link) => {
                    const ativo = link.getAttribute("href") === `#${entrada.target.id}`;
                    link.classList.toggle("ativo", ativo);
                    if (ativo) {
                        link.setAttribute("aria-current", "location");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            }
        });
    }, { rootMargin: "-25% 0px -60% 0px" });

    secoes.forEach((secao) => observador.observe(secao));
}
