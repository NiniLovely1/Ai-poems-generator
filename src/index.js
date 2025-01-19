function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Dame la mano y danzaremos; dame la mano y me amaras",
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
