import { spotifyService } from '@services/spotifyService';

export const getToken = async () => {
    const savedToken = localStorage.getItem('BearerToken');

    if (savedToken) {
        return;
    } else {
        try {
            const response = await spotifyService.PostToken();

            localStorage.setItem('BearerToken', response.access_token);
        } catch (err) {
            console.log(err);
        }
    }
};
