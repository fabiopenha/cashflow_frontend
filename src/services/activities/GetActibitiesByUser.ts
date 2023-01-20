import { api } from "../../components/utils/api/api";

interface IUserId {
    id?: string;
  }

export const getActibitiesByUser = async (userId: IUserId) => {

    const {data}  = await api.get(`/v1/activity/getuseractivities/${userId}`);

      return data.userActivities;

}