import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:3333`
});

api.defaults.withCredentials = true;

let refresh = false;

api.interceptors.response.use(response => response, async (error) => {
    if(error.response.status === 401 && !refresh) {
        refresh = true;
        const response = await api.post('/v1/auth/refreshtoken', {})

        if (response.status === 200) {
            return api(error.config)
        }
    }

    refresh = false;
    return error;
});