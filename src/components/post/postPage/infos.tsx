'use client'
import {useEffect, useState} from 'react'
import { useSession } from "next-auth/react"
import { userInfos } from "../../../../lib/actions/user"

{/* recuper la date de creation du post */}
{/* recuper le nom de la commuanuté */}
const Infos = ({name, creationDate} : {name : string, creationDate : Date}) => {
    const { data: session, status } = useSession();
    const [username, setUserName] = useState<string>('')
    useEffect(() => {
        fetch()
    }, [session])
    
    const fetch = async() => {
        const res =  await userInfos(session?.user?.email as string);
        setUserName(res?.data.user?.name)
    }
    return <div >
         
         <div className="w-full bg-violet-300 h-10 flex items-center mt-2">
            <p className='text-lg font-semibold ml-6 p-1'>q/{name}</p>
         </div>
        <p className='text-xs font-light mt-2'>Posted by <span className='text-xs font-medium'>u/{username} </span>
        <span className='text-xs font-light'>{creationDate.toString().substring(0,31)}</span></p>
    </div>
}

export default Infos 