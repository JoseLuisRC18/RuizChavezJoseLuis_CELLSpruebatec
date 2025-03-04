import { LitElement, html } from 'lit';
import { Styles } from "./character-card-component-styles.js";

export class CharacterCardComponent extends LitElement {
  static properties = {
    id: { type: Number },
    name: { type: String },
    status: { type: String },
    species: { type: String },
    type: { type: String },
    gender: { type: String },
    origin: { type: Object },
    location: { type: Object },
    image: { type: String },
  };

  static styles = [Styles];

  constructor() {
    super();
    this.id = NaN;
    this.name = "";
    this.status = "";
    this.species = "";
    this.type = "";
    this.gender = "";
    this.origin = {};
    this.location = {};
    this.image = "";
  }

  render() {
    return html`
      <div class="card">
        <h1 class="card__title">${this.name}</h1>
        <span class="card__body">
          <h2 class="card__body--status">Status: ${this.status}</h2>
          <h2 class="card__body--specie">Specie: ${this.species}</h2>
          <h2 class="card__body--type">${this.type.length ? this.type : ""}</h2>
          <h3 class="card__body--gender">Gender ${this.gender}</h3>
        </span>
        <img class="card__img" alt="Image of ${this.name}" src="${this.image}" />
      </div>
    `;
  }
}
