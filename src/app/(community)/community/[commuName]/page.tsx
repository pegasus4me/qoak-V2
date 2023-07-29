import React from "react"
import { FC } from "react"
import Header from "@/components/community/header"
import Check from "@/components/community/check"
import Link from "next/link";
interface PropsParams {
    params : {
        url: string
        commuName :string
    }
}

const Community:FC<PropsParams> = ({params}) => {

   

    return (
        <div>
                
            <div>
                <Link href='/' className="text-sm font-light border-b hover:text-slate-600">hub</Link>
            </div>
            <Check verify={params.commuName}/>
                <div>
                    <Header community={params.commuName}/>
                    {/* banner de base */}
                </div>

                <div>
                    {/* create post component */}
                </div>

                <div>
                    {/* posts dans la communauté (seulement le titre + debut texte ) + upvotes component */}
                </div>
        </div>
    )
}

export default Community