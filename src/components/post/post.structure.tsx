"use client"
import { useRouter } from "next/navigation"

type Post ={
    creator : string,
    title : string, 
    content : string , 
    date : Date,
    postId : string,
    subreddit : string
}


const PostStructure = ({creator, date, content, title, postId, subreddit} : Post) => {
    const router = useRouter()
    return (
        <div className="max-w-[900px] min-h-[200px] bg-white rounded-md p-6 mt-6 shadow-sm"
         onClick={() => router.push(`/community/${subreddit}/${postId}`)}
        >
            <div>    
            <p>created by {creator} at {date.toString()}</p>
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