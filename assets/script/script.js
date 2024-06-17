const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const lista = document.getElementById("lista");
const convidados = document.getElementsByClassName("convidado");

function adicionarConvidado() {
  if (nome.value.length > 0) {
    let convidado = document.createElement("li");
    convidado.textContent += nome.value;
    lista.appendChild(convidado);
    convidado.className = "convidado";

    removerConvidado(convidado);
    convidado.addEventListener("click", () => modificarConvidado(convidado))
  }
  nome.value = "";
  nome.focus()
}

function removerConvidado(convidado) {
    convidado.addEventListener("dblclick", () => {
        lista.removeChild(convidado);
      });
}

function modificarConvidado(convidado) {
    let input = document.createElement("input")
    input.type = "text"
    input.value = convidado.textContent

    convidado.textContent = "";
    convidado.appendChild(input)

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            convidado.textContent = input.value
            convidado.addEventListener("click", () => {modificarConvidado(convidado)})
        }
    })
    input.focus()
}

adicionarConvidado()