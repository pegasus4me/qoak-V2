import axios, { AxiosResponse } from 'axios';


export const userInfos = async (sessionemail : string) => {
    let email: string = sessionemail;
    try {
      let res: AxiosResponse = await axios.get("/api/userInfos", {
        params: {
          email,
        },
      });
      return res;
    } catch (error: any) {
      return error
    }
  };


