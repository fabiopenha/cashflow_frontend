import { api } from "../../components/utils/api/api";

interface IcodeLogin {
    id?: string;
    secret?: string;
    code?: string;
  }

export const authCode = async (dataCode: IcodeLogin) => {

    const data  = await api.post('/v1/auth/twofactor', {
        id: dataCode.id,
        secret: dataCode.secret,
        code: dataCode.code
      });

      return data;

}