import { LitElement, html} from 'lit';
import { Styles } from "./locations-page-styles.js";
import "../../components/locations-component-dm/index.js";
import "../../components/locations-card-list-component/index.js";

export class LocationsPage extends LitElement {
    static styles = [Styles];

    static properties = {
        _data: { type: Object },
        
    };

    constructor() {
        super();
        this._data = {
            Planet: [],
            Cluster: [],
            Microverse: [],
            TV: [],
            Dream : [],
            Resort : [],
            "Space station": [],  //utilice comillas para que me aceptara el espacio tanto como para staion como para fantasy
            "Fantasy town": [],
            
            
            
        };
    }

    async firstUpdated() {
        await this.updateComplete;
    
    
    await new Promise(resolve => setTimeout(resolve, 0));

    const dm = this.shadowRoot.querySelector("locations-component-dm");

    if (!dm) {
        console.error("El componente locations-component-dm no se encontró en el DOM.");
        return;
    }

    const _data = await dm.getLocationsByType();
    this._data = _data;
    }

    render() {
        return html`<h1></h1>
            <locations-component-dm></locations-component-dm>
            <div class="content">
                ${this._data.Planet.length
                    ? html`<locations-card-list-component
                        type="Planet"
                        .data=${this._data.Planet}
                    />`
                    : html`<p>No hay planetas a la vista!</p>`}
            </div>

            <div class="content">
             ${this._data["Space station"].length
                ? html`<locations-card-list-component           //igual aqui utilice comillas para que me aceptara el espacio
            type="Space station"
            .data=${this._data["Space station"]}
                    />`
                : html`<p>No queda ninguna Space station</p>`}
            </div>


            <div class="content">
                ${this._data.Cluster.length
                    ? html`<locations-card-list-component
                        type="Cluster"
                        .data=${this._data.Cluster}
                    />`
                    : html`<p>No queda ningún cluster</p>`}
            </div>
             <div class="content">
                ${this._data.Microverse.length
                    ? html`<locations-card-list-component
                        type="Microverse"
                        .data=${this._data.Microverse}
                    />`
                    : html`<p>No queda ningún microverse</p>`}
            </div>

              <div class="content">
                ${this._data.TV.length
                    ? html`<locations-card-list-component
                        type="TV"
                        .data=${this._data.TV}
                    />`
                    : html`<p>No queda ninguno</p>`}
            </div>

            <div class="content">
             ${this._data["Fantasy town"].length
                   ? html`<locations-card-list-component
            type="Fantasy town"
            .data=${this._data["Fantasy town"]}
                     />`
                    : html`<p>No queda ninguna Fantasy town</p>`}
            </div>

              <div class="content">
                ${this._data.Dream.length
                    ? html`<locations-card-list-component
                        type="Dream"
                        .data=${this._data.Dream}
                    />`
                    : html`<p>No queda ningún Dream</p>`}
            </div>

            <div class="content">
                ${this._data.Resort.length
                    ? html`<locations-card-list-component
                        type="Resort"
                        .data=${this._data.Resort}
                    />`
                    : html`<p>No queda ningún Resort</p>`}
            </div>
            

            
        `;
    }
}
customElements.define('locations-page', LocationsPage);
