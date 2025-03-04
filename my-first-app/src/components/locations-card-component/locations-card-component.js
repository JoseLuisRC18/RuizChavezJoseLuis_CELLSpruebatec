import { LitElement, html} from 'lit';
import { Styles } from "./locations-card-component-styles.js";

export class LocationsCardComponent extends LitElement {
    static properties = {
        id: { type: Number },
        name: { type: String },
        type: { type: String },
        dimension: { type: String },
    };
     static styles = [Styles];

    constructor() {
        super();
        this.id = NaN;
        this.name = "";
        this.type = "";
        this.dimension = "";
    }
    render() {
        return html`
            <div class="card">
                <h1 class="card__title">${this.name}</h1>
                <span class="card__body">
                    <h2 class="card__body--type">Type: ${this.type}</h2>
                    <h2 class="card__body--dimension">Dimension: ${this.dimension}</h2>
                </span> 
                </div>
                `;
    }
}

