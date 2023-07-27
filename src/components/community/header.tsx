import react from 'react'
import { FC } from 'react'

interface Tools {
    community : string,
    join? : () => void
}
const Header:FC<Tools>  = ({community, join})=> {
    return (
        <div className=''>
            <div className='bg-white w-full p-2 flex justify-between mt-3 shadow-sm'>
                <h1 className='text-xl text-gray-700 font-medium'>q/{community}</h1>
                <button className="bg-slate-900 rounded-full text-white px-3 hover:bg-slate-800">Join</button>
            </div>
        </div>
    )
}

export default Header