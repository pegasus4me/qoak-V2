'use client'
import React,{useEffect, useState} from "react"
import { FC } from "react"
import Header from "@/components/community/header"
import Check from "@/components/community/check"

interface PropsParams {
    params : 
    {
        url: string
        commuName :string
    }
}

const Community:FC<PropsParams> = ({params}) => {

   

    return (
        <div>
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