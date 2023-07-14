import Image from 'next/image'
import Feed from '@/components/feed'
export default function Home() {
  return (
    <div className='flex justify-between mt-4 p-2'>
      <div className='border'>
       {/* feed post random de toutes communautés */}
       <p>feed</p>
      </div>
      <div>
      <Feed/>
      </div>
    </div>
  )
}
