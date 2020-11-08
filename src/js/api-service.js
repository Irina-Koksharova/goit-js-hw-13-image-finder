const PUBLIC_URL = 'https://pixabay.com/api/';
const KEY = '19018418-5cf416ff9d3b144c810bafa25';

class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchImages() {
        return fetch(`${PUBLIC_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
            .then(response => {
                if (response.status !== 200) {
                    return Promise.reject(new Error(response.statusText))
                };
                return Promise.resolve(response)
            })
            .then(response => response.json())
            .then(({hits}) => {
                this.incrementPage();
                return hits;
    })
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
}

export { ImageApiService };

