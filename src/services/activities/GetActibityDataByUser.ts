import { api } from "../../components/utils/api/api";

export const getactivitiesdata = async (userId: any) => {

    const {data}  = await api.get(`/v1/activity/getactivitiesdata/${userId}`);

      return data;

}