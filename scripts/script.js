let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image/html5.png") {
    myImage.setAttribute("src", "image/html52.png");
  } else {
    myImage.setAttribute("src", "image/html5.png");
  }
};

//mensagem de boas vindas personalizada
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Por favor, digite seu nome: ");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `JavaScript é muito legal, ${myName}`;
  }
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = `JavaScript é muito legal, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
