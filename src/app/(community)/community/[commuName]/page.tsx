import React from "react"
import { FC } from "react"
import Header from "@/components/community/header"
interface PropsParams {
    params : {url: string}
}

const community:FC<PropsParams> = ({params}) => {

    
    return (
        <div>
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

export default community