import { api } from "../../components/utils/api/api";

interface IUserId {
    id?: string | undefined;
  }

export const deleteActivity = async (id: IUserId) => {

    const {data}  = await api.delete(`/v1/activity/${id}`);

      return data.message;

}