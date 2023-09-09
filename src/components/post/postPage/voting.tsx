'use client'
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import axios, {AxiosResponse} from "axios";
import { useSession } from "next-auth/react";
type Vote = {

    count : number
    up : () => void,
    down : () => void,
}

type VoteData  = {
    id: string, 
    postId : string,
    type  : string, 
    userId : string
  }
  

const Voting  = ({postId} : {postId : string}) => {

    
    const [userVote, setUserVote] = useState<string | null>(null);
    const [voteData, setVoteData] = useState<VoteData[]>([])
    const [count, setCount]=  useState(0)
    const {data : session}  = useSession()
    

    useEffect(() => {
            // recuperer les votes par id
            // si up + 1 si down - 1
    },[])
    const up = async() => {
    
        if (userVote === "UP") {
          setUserVote(null);
        } else {
          setUserVote("UP");
          await send("UP"); 
        }
        
    };
    
      // downvote un post 
    const down = async() => {
        if (userVote === "DOWN") {
          setUserVote(null);
        } else {
          setUserVote("DOWN");
    
          await send("DOWN"); 
        }
      };
      
      const send = async (type: "UP" | "DOWN") => {
        try {
          const sendData: AxiosResponse<any, any> = await axios.post(
            "/api/posts/vote",
            
            {
              postId: postId,
              userId: session?.user?.id,
              type,
            
            }
          );
            
          console.log(sendData.data)
        } catch (error: any) {
          console.log("error content", error);
        }
        // increment / decrement
      };
    
    
    return <div className="flex gap-1 flex-col items-center opacity-30">
        <FaArrowUp onClick={up}/>
            <p>{count}</p>
        <FaArrowDown onClick={down}/>
    </div>
}

export default Voting