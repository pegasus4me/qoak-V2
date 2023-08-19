import axios, { AxiosResponse } from 'axios';
type Infos = {
    id : string, 
    name: string
}
export const subs = async(id : string, name : string) => {

    try {
        let res: AxiosResponse= await axios.get('/api/community/joined', {
            params : {
                id, 
                name
            }
        })
        return res
    } catch (error : any) {
        console.log(error)
    }
}