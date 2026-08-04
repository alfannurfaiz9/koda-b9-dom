const header = document.querySelector("header");

const form = document.createElement("form");

const containerNama = document.createElement("div");

const labelInputNama = document.createElement("label");
labelInputNama.setAttribute("for", "nama");
labelInputNama.innerText = "Nama";

const inputNama = document.createElement("input");
inputNama.setAttribute("type", "text");
inputNama.setAttribute("id", "nama");
inputNama.setAttribute("placeholder", "Masukkan nama...");

containerNama.append(labelInputNama, inputNama);

const containerUmur = document.createElement("div");

const labelInputUmur = document.createElement("label");
labelInputUmur.setAttribute("for", "umur");
labelInputUmur.innerText = "Umur";

const inputUmur = document.createElement("input");
inputUmur.setAttribute("type", "text");
inputUmur.setAttribute("id", "umur");
inputUmur.setAttribute("placeholder", "Masukkan umur...");

containerUmur.append(labelInputUmur, inputUmur);

const containerJenisKelamin = document.createElement("div");

const pharJK = document.createElement("p");
pharJK.innerText = "Jenis kelamin";

const inputL = document.createElement("input");
inputL.setAttribute("type", "radio");
inputL.setAttribute("name", "kelamin");
inputL.setAttribute("id", "laki-laki");

const labelL = document.createElement("label");
labelL.innerText = "Laki-laki";
labelL.setAttribute("for", "laki-laki");

const inputP = document.createElement("input");
inputP.setAttribute("type", "radio");
inputP.setAttribute("name", "kelamin");
inputP.setAttribute("id", "perempuan");

const labelP = document.createElement("label");
labelP.innerText = "perempuan";
labelP.setAttribute("for", "perempuan");

containerJenisKelamin.append(pharJK, inputL, labelL, inputP, labelP);

const containerHobi = document.createElement("div");

const pharHobi = document.createElement("p");
pharHobi.innerText = "Apakah anda hobi menonton film?";

const selectHobi = document.createElement("select");
selectHobi.setAttribute("id", "hobi");

const optionDisable = document.createElement("option");
optionDisable.setAttribute("id", "hobi");
optionDisable.setAttribute("value", "");
optionDisable.setAttribute("disabled", true);
optionDisable.setAttribute("selected", true);
optionDisable.innerText = "Apakah anda hobi menonton film?";

const optionYa = document.createElement("option");
optionYa.setAttribute("id", "hobi");
optionYa.setAttribute("value", "ya");
optionYa.innerText = "Ya";

const optionTidak = document.createElement("option");
optionTidak.setAttribute("id", "hobi");
optionTidak.setAttribute("value", "tidak");
optionTidak.innerText = "Tidak";

selectHobi.append(optionDisable, optionYa, optionTidak);
containerHobi.append(pharHobi, selectHobi);

const containerGenre = document.createElement("div");

const pharCG = document.createElement("p");
pharCG.innerText = "Genre film yang disukai";

const actionInput = document.createElement("input");
actionInput.setAttribute("type", "checkbox");
actionInput.setAttribute("id", "action");
actionInput.setAttribute("value", "action");

const actionLabel = document.createElement("label");
actionLabel.setAttribute("for", "action");
actionLabel.innerText = "Action";

const horrorInput = document.createElement("input");
horrorInput.setAttribute("type", "checkbox");
horrorInput.setAttribute("id", "horror");
horrorInput.setAttribute("value", "horror");

const horrorLabel = document.createElement("label");
horrorLabel.setAttribute("for", "horror");
horrorLabel.innerText = "Horror";

const comedyInput = document.createElement("input");
comedyInput.setAttribute("type", "checkbox");
comedyInput.setAttribute("id", "comedy");
comedyInput.setAttribute("value", "comedy");

const comedyLabel = document.createElement("label");
comedyLabel.setAttribute("for", "comedy");
comedyLabel.innerText = "Comedy";

const skiFiInput = document.createElement("input");
skiFiInput.setAttribute("type", "checkbox");
skiFiInput.setAttribute("id", "ski-fi");
skiFiInput.setAttribute("value", "ski-fi");

const skiFiLabel = document.createElement("label");
skiFiLabel.setAttribute("for", "ski-fi");
skiFiLabel.innerText = "Ski-Fi";

containerGenre.append(
  pharCG,
  actionInput,
  actionLabel,
  horrorInput,
  horrorLabel,
  comedyInput,
  comedyLabel,
  skiFiInput,
  skiFiLabel,
);

const button = document.createElement("button");
button.setAttribute("type", "button");
button.innerText = "Submit";

const h1 = document.createElement("h1");
h1.innerText = "Survey - Minitask 3";

form.append(
  h1,
  containerNama,
  containerUmur,
  containerJenisKelamin,
  containerHobi,
  containerGenre,
  button,
);

header.insertAdjacentElement("afterend", form);
