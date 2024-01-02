export const refreshToken = async () => {
    try {
        localStorage.removeItem('BearerToken');
    } catch (err) {
        console.log(err);
    }
};
