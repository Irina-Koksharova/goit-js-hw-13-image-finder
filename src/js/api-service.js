class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchImages() {
        const PUBLIC_API = 'https://pixabay.com/api/';
        const KEY = '19018418-5cf416ff9d3b144c810bafa25';
        return fetch(`${PUBLIC_API}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
            .then(response => response.json())
            .then(data => {
                this.incrementPage();
                return data.hits;
    })
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get() {
        return this.searchQuery;
    }
    set(newSearchQuery) {
        this.searchQuery = newSearchQuery;
    }
}

export { ImageApiService };

