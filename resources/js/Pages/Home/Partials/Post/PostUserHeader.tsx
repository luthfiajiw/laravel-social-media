import { Link } from '@inertiajs/react'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

export default function PostUserHeader() {
  return (
    <div className='flex items-center gap-2'>
      <Link href="#">
        <img
          src="https://picsum.photos/200"
          className="w-[40px] rounded-full border-2 transition-all hover:border-blue-500"
        />
      </Link>

      <div>
        <h4 className='flex items-center font-bold gap-1'>
          <Link href="#" className="hover:underline">
            User Name
          </Link>
          <FaChevronRight size={12} className=' text-gray-500'/>
          <Link href="#" className="hover:underline">
            Group Name
          </Link>
        </h4>

        <small className="text-gray-400">6 Feb 19.23</small>
      </div>
    </div>
  )
}
