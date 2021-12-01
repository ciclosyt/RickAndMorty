
export interface APIResponse<T> {
    results: T;
}

export interface DataResponse {
    characters: APIResponse<Personajes[]>;
    episodes: APIResponse<Episodios[]>;
}




export interface Episodios {
    name: string;
    episode: string;
}



export interface Personajes {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    isFavorite?: boolean;
}