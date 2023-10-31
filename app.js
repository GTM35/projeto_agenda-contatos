const form = document.getElementById("form-agenda");
const inputName = document.getElementById("input-name");
const inputTel = document.getElementById("input-tel");
const dataForm = document.getElementById("data-form");
let templateDataAgenda = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    renderTable();
  }
});

function renderTable() {
  let inputNameData = inputName.value;
  let inputTelData = inputTel.value;

  templateDataAgenda += `<tr>`;
  templateDataAgenda += `<td>${inputNameData}</td>`;
  templateDataAgenda += `<td>${inputTelData}</td>`;
  templateDataAgenda += `</tr>`;

  inputName.value = "";
  inputTel.value = "";

  dataForm.innerHTML = templateDataAgenda;
}

function validateForm() {
  let inputNameData = inputName.value;
  let inputTelData = inputTel.value;

  if (inputNameData === "") {
    alert("Insira um nome!");
    inputName.value = "";
    inputTel.value = "";
    return false;
  }

  if (inputTelData === "") {
    alert("Insira um número válido!");
    inputName.value = "";
    inputTel.value = "";
    return false;
  }

  return true;
}
