import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

const Conditions = () => {
    return <div className="bg-white rounded-md p-3 max-w-fit border border-slate-200 shadow-sm">
            <div className="p-1 font-light flex items-center">
            <BsFillEmojiHeartEyesFill className="text-purple-500"/>
                <h3 className="ml-3 text-md">Posting to qoak</h3>
            </div>
            <div className="p-2">
                <ul>
                    <li className="p-2 font-medium text-sm"><p>1.Remember the human</p></li>
                    <hr />
                    <li className="p-2 font-medium text-sm"><p>2.Behave like you would in real life</p></li>
                    <hr />
                    <li className="p-2 font-medium text-sm"><p>3.Look for the original source of content</p></li>
                    <hr />
                    <li className="p-2 font-medium text-sm"><p>4.Search for duplicates before posting</p></li>
                    <hr />
                    <li className="p-2 font-medium text-sm"><p>5.Read the community’s rules</p></li>
                    <hr />
                </ul>
            </div>
    </div>
}

export default Conditions