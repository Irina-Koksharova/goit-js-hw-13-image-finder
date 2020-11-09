const PUBLIC_URL = 'https://pixabay.com/api/';
const KEY = '19018418-5cf416ff9d3b144c810bafa25';

class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchImages() {

        const url = `${PUBLIC_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const newImages = ({hits}) => {
            this.incrementPage();
                return hits;
            }
            return newImages(data); 
        } catch {
            return Promise.reject(new Error(response.statusText))
        } 
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
}

export { ImageApiService };

