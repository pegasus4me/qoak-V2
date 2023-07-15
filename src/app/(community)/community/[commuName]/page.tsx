import React from "react"
import { FC } from "react"

interface PropsParams {
    params : {name: string}
}

const community:FC<PropsParams> = ({params}) => {

    return (
        <div>
                <p>je suis sur la communauté {params.name}</p>
        </div>
    )
}

export default community