import { api } from "../../components/utils/api/api";


export const logOut = async () => {

    await api.post('/v1/auth/logout', {});
    localStorage.removeItem('page_local');
}