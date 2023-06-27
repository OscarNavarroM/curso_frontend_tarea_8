export class Character {
  #name;
  #species;
  #image;
  constructor(name, species, image) {
    this.#name = name;
    this.#species = species;
    this.#image = image;
  }
  getName() {
    return this.#name;
  }
  setName(name) {
    this.#name = name;
  }
  getSpecies() {
    return this.#species;
  }
  setSpecies(species) {
    this.#species = species;
  }
  getImage() {
    return this.#image;
  }
  setImage(image) {
    this.#image = image;
  }
}
