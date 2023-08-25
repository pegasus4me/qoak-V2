'use client'
import {useEffect, useState} from 'react'
import { useSession } from "next-auth/react"
import { userInfos } from "../../../../lib/actions/user"

{/* recuper la date de creation du post */}
{/* recuper le nom de la commuanuté */}
const Infos = () => {
    const { data: session, status } = useSession();
    const [username, setUserName] = useState<string>('')
    useEffect(() => {
        fetch()
    }, [session])
    
    const fetch = async() => {
        const res =  await userInfos(session?.user?.email as string);
        setUserName(res?.data.user?.name)
    }
    return <div>
        <p>{username}</p>
    </div>
}

export default Infos 