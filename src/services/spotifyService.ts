import { api as apiService, ApiService } from './api';

const defaultUrl: string = 'https://api.spotify.com/v1';

interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

class SpotifyService {
    constructor(private readonly api: ApiService) {}

    public PostToken = async (
        client_id: string,
        client_secret: string
    ): Promise<TokenResponse> => {
        return this.api.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'client_credentials',
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa(
                        `${client_id}:${client_secret}`
                    )}`,
                },
            }
        );
    };

    public GetArtist = async () => {
        return this.api.get(`${defaultUrl}/artists/05fG473iIaoy82BF1aGhL8`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('BearerToken')}`,
            },
        });
    };
}

export const spotifyService = new SpotifyService(apiService);
