import { api } from "../../components/utils/api/api";

interface IActivity {
  date?: string | null;
  category?: string | null;
  description?: string | null;
  cash?: number | null;
  }

export const createActivity = async (activity: IActivity, id: {}) => {

    const {data}  = await api.post(`/v1/activity/create/${id}`, {
      date: activity.date,
      category: activity.category,
      description: activity.description,
      cash: activity.cash
    });

      return data.message;
}