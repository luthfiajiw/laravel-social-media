import { Link } from '@inertiajs/react'
import React from 'react'

export default function UserListItem() {
  return (
    <div className='bg-white dark:bg-slate-900 dark:text-gray-100 transition-all hover:bg-gray-100'>
      <div className='flex items-center gap-2 py-2 px-2'>
        <Link href='#'>
          <img src="https://picsum.photos/200" className="w-[32px] rounded-full"/>
        </Link>
        <div className='flex justify-between flex-1'>
          <Link href="#">
            <h3 className="font-black hover:underline">User Name</h3>
          </Link>

          <div className='flex gap-1'>
            <button className="text-xs py-1 px-2 rounded bg-emerald-500 hover:bg-emerald-600 text-white">
              Approve
            </button>
            <button className="text-xs py-1 px-2 rounded bg-red-500 hover:bg-red-600 text-white">
              Reject
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}
