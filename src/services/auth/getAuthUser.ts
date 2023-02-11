import { api } from "../../components/utils/api/api";

export const getAuthUser = async () => {

    const {data}  = await api.get('/v1/auth/authenticatedUser');

      return data._id;

}