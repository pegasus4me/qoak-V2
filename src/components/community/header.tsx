import react from 'react'
import { FC } from 'react'

interface Tools {
    community : string,
    join? : () => void
}
const Header:FC<Tools>  = ({community, join})=> {
    return (
        <div className=''>
            <div className='bg-white w-full p-2'>
                <h1 className='text-xl text-gray-700 font-medium'>q/{community}</h1>
            </div>
            <div>
                <button>Join</button>
            </div>
        </div>
    )
}

export default Header