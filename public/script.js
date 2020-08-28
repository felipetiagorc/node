const ul = document.querySelector("ul");
const input = document.querySelector("input");
const form = document.querySelector("form");

function addElement({ name, url }) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const trash = document.createElement("span");

  a.href = url;
  a.innerHTML = name;
  a.target = "_blank";

  trash.innerHTML = "x";
  trash.onclick = () => removeElement(trash);

  li.append(a);
  li.append(trash);
  ul.append(li);
}

function removeElement(el) {
  if (confirm("Tem certeza que vai apagar?")) el.parentNode.remove();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let { value } = input;
  if (!value) alert("preencha a porra do campo");

  const [name, url] = value.split(","); //valor do input, separado por virgulas
  if (!url) return alert("formate o texto da maneira correta");

  if (!/^http/.test(url)) return alert("Digite a url da maneira correta");

  addElement({ name, url });

  input.value = "";
});
