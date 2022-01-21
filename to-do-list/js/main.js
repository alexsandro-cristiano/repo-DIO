function criarElementoComCheckbox(texto) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.setAttribute("type", "checkbox");
  span.innerHTML = texto;

  label.appendChild(input);
  label.appendChild(span);
  return label;
}

function pegarConteudoDoInput() {
  const texto = document.querySelector("#texto");
  let t = texto.value;
  return t;
}

const divContainerLista = document.querySelector("#list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let conteudo = pegarConteudoDoInput();
  divContainerLista.appendChild(criarElementoComCheckbox(conteudo));
});
