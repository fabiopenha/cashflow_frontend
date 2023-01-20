import { api } from "../../components/utils/api/api";

interface IUserId {
    id?: string;
  }

export const getactivitiesdata = async (userId: IUserId) => {

    const {data}  = await api.get(`/v1/activity/getactivitiesdata/${userId}`);

      return data;

}