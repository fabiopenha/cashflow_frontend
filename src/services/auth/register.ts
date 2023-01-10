import { api } from "../../components/utils/api/api";

interface IUser {
    name?: string;
    email?: string;
    phone?: string;
    occupation?: string;
    password?: string;
    passwordConfirm?: string;
  }

export const register = async (user: IUser) => {

    const data = api.post('/v1/auth/register', {
        name: user.name,
        email: user.email,
        phone: user.phone,
        occupation: user.occupation,
        password: user.password,
        passwordConfirm: user.passwordConfirm
      });

      return data;

}