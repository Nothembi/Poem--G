function displayPoem(response) {
  let namesElement = document.querySelector("#names");
  namesElement.innerHTML = response.data.answer;
}


function generateNames(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f64efat845cf1c91ffbed0bbbc30bao4";
  let context = "You are an expert baby name consultant with extensive knowledge of names from various cultures, origins, and meanings. Your role is to generate creative, meaningful, and diverse baby name suggestions based on user-provided themes, styles, or preferences. Provide 5-7 name suggestions in a simple, bulleted HTML list (<ul><li>...</li></ul>), where each name includes a short description (e.g., origin, meaning, or why it fits the theme). Keep responses concise, positive, and family-friendly. Do not include titles, introductions, or signatures.";
  let prompt = `Generate baby name suggestions based on the following user input: ${instructionsInput.value}. Ensure the names are unique, culturally diverse, and relevant to the theme.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#names");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating baby name suggestions for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#baby-names-generator-form");
poemFormElement.addEventListener("submit", generateNames);