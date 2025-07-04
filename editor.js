const runCodeBtn = document.getElementById("run-code");
const darkModeToggler = document.getElementById("toggle-dark-mode");
const ideContainer = document.getElementById("ide-container");

runCodeBtn.addEventListener("click", applyChanges);

function applyChanges() {
  const code = document.getElementById("code-editor").value;
  const outputFrame = document.getElementById("output");
  outputFrame.srcdoc = code;
}
