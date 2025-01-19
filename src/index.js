function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let specificsInput = document.querySelector("#user-specifics");
  let apiKey = "46a7o7054af22ba1t49c85122b081838";
  let context =
    "You are an expert Poet that loves to write beautiful and short love poems. Please generate a 4 line poem in basic HTML including a space between each line. Make sure to follow the user specifics. Do not inclde the words `HTML` before and after the poem.";
  let prompt = `User specifics: Generate a love poem about ${specificsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemFormElement = document.querySelector("#poem");
  poemFormElement.classList.remove("hide");
  poemFormElement.innerHTML = `<div class="blink"> Creating love poem about ${specificsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
