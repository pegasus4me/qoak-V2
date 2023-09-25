'use client'
import { useRouter } from "next/navigation"

type Post ={
    creator : string | (() => Promise<string | undefined>),
    title : string, 
    content : string , 
    date : Date,
    postId : string,
    subreddit : string
}


const PostStructure = ({creator, date, content, title, postId, subreddit} : Post):JSX.Element => {
    
    
    const router = useRouter()
    
    

   
    
    return (
        <div className="max-w-[900px] min-h-[200px] bg-white rounded-md p-3 mt-6 border cursor-pointer"
             onClick={() => router.push(`/community/${subreddit}/${postId}`)}
        >
            <div>    
            <p className="text-xs opacity-40 mb-3">created by {creator} at {date.toString().slice(4,31)}</p>
            </div>
            <div>
                <h2 className="text-lg font-light ">{title}</h2>
            </div>
            <div className="mt-5">
                <div
                className="text-md"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            </div>
            {/* COMMENTS */}
        </div>
    )
}

export default PostStructure