import { LitElement, html } from 'lit';
import { Styles } from "./my-first-app-styles.js";

const logo = new URL('../assets/rick-sanchez-200.svg', import.meta.url).href;

class MyFirstApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = [Styles];

  constructor() {
    super();
    this.header = 'Ricky and Morty';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>PRUEBA TECNICA  CELLS</p>
        <a href="/src/pages/characters-page/index.html">CHARACTERS</a>
        <a href="/src/pages/locations-page/index.html">LOCATIONS</a>
       
      </main>

      <p class="app-footer">
        🚀 contruido por
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JoseLuisRC18"
          >José Luis Ruiz</a
        >.
      </p>
    `;
  }
}

customElements.define('my-first-app', MyFirstApp);
