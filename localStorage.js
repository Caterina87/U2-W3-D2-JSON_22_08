window.addEventListener("DOMContentLoaded", () => {
  const btnaggiungiNome = document.getElementById("saveName");
  btnaggiungiNome.onclick = addName;
  const btncancellaNome = document.getElementById("deleteName");
  btncancellaNome.onclick = removeName;
});

const addName = (event) => {
  const nome = document.getElementById("Nome").value;
  localStorage.setItem("NomeUtente", nome);
};
const removeName = (event) => {
  localStorage.removeItem("NomeUtente");
};
