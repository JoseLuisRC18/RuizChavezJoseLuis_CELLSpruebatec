import { LitElement} from 'lit';

export class LocationsComponentDp extends LitElement {
    
    async getLocations() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/location');
            const data = await response.json();
            console.log(data);
            return data.results;
        } catch (error) {
            console.error(error);
    }
    return [];
    }
}
