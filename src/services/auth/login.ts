import { api } from "../../components/utils/api/api";

interface IUserLogin {
    email?: string;
    password?: string;
  }

export const login = async (user: IUserLogin) => {

    const data = api.post('/v1/auth/login', {
        email: user.email,
        password: user.password
      });

      return data;
      
}