import { ArtistAlbumsResponse } from 'types/spotifyArtist';
import { api as apiService, ApiService, defaultUrl } from './api';

class SpotifyArtistService {
    constructor(private readonly api: ApiService) {}

    public GetArtist = async (id: string) => {
        return this.api.get(`${defaultUrl}/artists/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('BearerToken')}`,
            },
        });
    };

    public GetArtistAlbums = async (
        id: string,
        params?: any
    ): Promise<ArtistAlbumsResponse> => {
        return this.api.get(`${defaultUrl}/artists/${id}/albums`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('BearerToken')}`,
            },
            params,
        });
    };
}

export const spotifyArtistService = new SpotifyArtistService(apiService);
