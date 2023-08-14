'use client'
import react,{useState, useEffect} from 'react'
import { FC } from 'react'
import { useSession } from "next-auth/react";
import axios, { AxiosResponse } from 'axios'
interface Tools {
    community : string,
}
interface UserData {
    // user data structure from api response
}
const Header:FC<Tools>  = ({community})=> {

    const { data: session, status } = useSession();
    const[data, setData] = useState<any>()
    const [joined, setJoined] = useState<Boolean>(false)

    const join = async() => {
        try {
            
            const data:AxiosResponse<any, any> = await axios.post('/api/community/join',{
                id: session?.user?.id as string,
                commu : community as string
            })
            if(data.status === 200) {
                setData(data.data.user)
                setJoined(true)
            }

        } catch (error : any) {
            console.error('erreur', error)
        }
    }
    return (
        <div className=''>
            <div className='bg-white w-full p-2 flex justify-between mt-3 shadow-sm'>
                <h1 className='text-xl text-gray-700 font-medium'>q/{community}</h1>
                {/* si il est abbo mettre le button en gris et changer le text en joined */}
                {!joined ? <button className="bg-slate-900 rounded-full text-white px-3 hover:bg-slate-800" 
                onClick={join}
                >Join</button> :
                <button className="bg-slate-200 rounded-full text-black px-3 hover:bg-slate-800" 
                onClick={join}
                >Joined</button>
                }
                
            </div>
        </div>
    )
}

export default Header