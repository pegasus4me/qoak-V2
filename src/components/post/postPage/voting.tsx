'use client'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

type Vote = {
    up : () => void,
    down : () => void,
    count : number
}
const Voting  = ({up , down, count = 0}:Vote) => {
    return <div className="flex gap-1 flex-col items-center border">
        <FaArrowUp onClick={up}/>
            <p>{count}</p>
        <FaArrowDown onClick={down}/>
    </div>
}

export default Voting