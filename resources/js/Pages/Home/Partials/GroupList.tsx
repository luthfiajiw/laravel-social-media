import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { PageProps } from '@/types'
import React from 'react'
import GroupListItem from './GroupListItem'

export default function GroupList() {
  return (
    <div className='px-3 bg-white dark:bg-slate-950 rounded border dark:border-slate-900 dark:text-gray-100 h-full py-3 overflow-hidden'>
      <div className="h-full overflow-hidden flex-col hidden lg:flex">
        <h2 className="text-xl font-bold">My Groups</h2>

        <GroupListItem />
      </div>
    </div>
  )
}
