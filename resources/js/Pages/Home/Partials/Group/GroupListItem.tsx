import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function GroupListItem() {
  return (
    <>
    <div className='flex gap-2 mt-4'>
      <TextInput
        className='w-full'
        placeholder='Type to search'
      />
      <PrimaryButton className='w-[120px]'>
        New Group
      </PrimaryButton>
    </div>
    <div className="mt-3 lg:flex-1 overflow-auto max-h-52">
      {/* <div className="text-gray-400 text-center p-3">
        You are not joined to any groups
      </div> */}

      {/* GROUP ITEM */}
      <div className='cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-800'>
        <Link href='#' className='flex items-center gap-1 py-2 px-2'>
          <img 
            src='https://picsum.photos/200'
            className='w-[32px] rounded-full'
          />
          <div className='flex-1 ml-2'>
            <h3 className="font-black">Group Name</h3>
            <span className="text-xs">
              Approved
            </span>
          </div>
        </Link>
      </div>

    </div>
    </>
  )
}
