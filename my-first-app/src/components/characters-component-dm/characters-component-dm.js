import { LitElement, html } from 'lit';
import '../characters-component-dp/index.js';

export class CharactersComponentDm extends LitElement {

    async getCharactersBySpecie(){
      const dp = this.shadowRoot.querySelector('characters-component-dp');
      const characters = await  dp.getCharacters();
      /** ACA VA LOS CALCULOS, HOMOLOGACIONES, ETC QUE QUERAMOS HACER CON LA DATA ADQUIRIDA DEL DP (Data Provider) */
      const groupBySpecie = Object.groupBy(characters, character => character.species)
      return groupBySpecie;
    }

    render() {
      return html`<characters-component-dp></characters-component-dp>`;
    }
}
