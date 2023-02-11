import { api } from "../../components/utils/api/api";

export const getActibitiesByUser = async (userId: any) => {

    const {data}  = await api.get(`/v1/activity/getuseractivities/${userId}`);

      return data.userActivities;

}