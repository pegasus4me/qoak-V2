import axios, { AxiosResponse } from 'axios';


interface Strucuture {
    getAllPosts : () => [],

}
export class Posts {
    async getAllPosts() {
        try {
            const res:AxiosResponse = await axios.get('/api/posts/findAll');
            return res
        } catch (error: any) {
            return error
        }
    }

    async getPostbyPostId(id : string){
        try {
            const res:AxiosResponse = await axios.get('/api/posts/findOne',{
                params : {
                    id
                }
            })
            return res
        } catch (error :any) {
            return error
        }
    }

    async getAllPostsByUserId(){}
    async getAllPostsByCommunityId(){}
}