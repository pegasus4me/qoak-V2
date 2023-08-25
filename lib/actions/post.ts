import axios, { AxiosResponse } from 'axios';


interface Strucuture {
    getAllPosts : () => [],

}
export class Posts {
    async getAllPosts() {
        try {
            const res = await axios.get('/api/posts/findAll');
            return res
        } catch (error: any) {
            return error
        }
    }
}