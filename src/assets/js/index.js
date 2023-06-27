import { Character } from "./Character.js";
const URL = "https://rickandmortyapi.com/api/character";
(async function main() {
  const characters = await getData();
  show(characters);
})();
async function getData() {
  try {
    const response = await axios(URL);
    const data = response.data.results;
    const characters = [];
    for (let char of data) {
      characters.push(new Character(char.name, char.species, char.image));
    }
    return characters;
  } catch (error) {
    console.error(error);
    return [];
  }
}
function show(characters) {
  const charactersTable = document.getElementById("characters-table");
  let charactersTableHTML = "";
  for (let char of characters) {
    charactersTableHTML += `<div class="card" style="width: 18rem">
        <img class="card-img-top" src=${char.getImage()} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">
            <strong>Nombre</strong>: ${char.getName()}
          </p>
          <p class="card-text">
          <strong>Especie</strong>: ${char.getSpecies()}
          </p>
        </div>
      </div>`;
  }
  charactersTable.innerHTML = charactersTableHTML;
}
