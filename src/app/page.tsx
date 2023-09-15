import Image from 'next/image'
import Feed from '@/components/feed'
import AllPosts from '@/components/allPosts'

export default function Home() {
  return (
    <div className='flex justify-between mt-4 p-2'>
      <div className='p-2'>
       <AllPosts/>
      </div>
      <div>
      <Feed/>
      </div>
    </div>
  )
}
