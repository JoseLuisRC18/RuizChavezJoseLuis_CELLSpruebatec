import { LitElement, html } from 'lit';
import { Styles } from "./character-card-list-component-styles.js";
import '../character-card-component/index.js'
export class CharacterCardListComponent extends LitElement {
  static properties = {
    species: { type: String },
    data: { type: Array },
  };

  static styles = [Styles];

  constructor() {
    super();
    this.species = "";
    this.data = [];
  }

  render() {
    return html`
      <h1>Specie: ${this.species}</h1>
      <div class="grid-container">
        ${this.data.map((characterAlien) => {
          return html`<character-card-component
            id=${characterAlien.id}
            name=${characterAlien.name}
            status=${characterAlien.status}
            species=${characterAlien.species}
            type=${characterAlien.type}
            gender=${characterAlien.gender}
            origin=${characterAlien.origin}
            location=${characterAlien.location}
            image=${characterAlien.image}
          />`;
        })}
      </div>
    `;
  }
}
