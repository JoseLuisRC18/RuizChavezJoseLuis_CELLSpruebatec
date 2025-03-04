import { LitElement, html } from 'lit';
import { Styles } from "./locations-card-list-component-styles.js";
import '../locations-card-component/index.js'

export class LocationsCardListComponent extends LitElement {
    static properties = {
        type: { type: String },
        data: { type: Array },
    };      

      static styles = [Styles];

    static styles = [Styles];
    constructor() {
        super();
        this.type = "";
        this.data = [];
    }   


    render() {
        return html`
            <h1>Type: ${this.type}</h1>
            <div class="grid-container">
                ${this.data.map((location) => {
                    return html`<locations-card-component
                        id=${location.id}
                        name=${location.name}
                        type=${location.type}
                        dimension=${location.dimension}
                        residents=${location.residents}
                    />`;
                })}
            </div>
        `;
    }
}

