import { spotifyService } from '@services/spotifyService';

export const refreshToken = async () => {
    try {
        const response = await spotifyService.GetRefreshToken();

        localStorage.setItem('RefreshToken', response.refresh_token);
        localStorage.setItem('BearerToken', response.access_token);

        console.log(response);
    } catch (err) {
        console.log(err);
    }
};
