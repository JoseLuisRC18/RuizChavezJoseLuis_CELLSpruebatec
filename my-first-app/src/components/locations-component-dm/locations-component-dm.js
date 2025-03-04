import { LitElement , html } from 'lit';
import '../locations-component-dp/index.js';

export class LocationsComponentDm extends LitElement {
    
    async getLocationsByType(){
        const dp = this.shadowRoot.querySelector('locations-component-dp');
        const locations = await dp.getLocations();
        
        const groupByType = Object.groupBy(locations, location => location.type)
        return groupByType;
    }

    render() {
        return html`<locations-component-dp></locations-component-dp>`;
    }
}

