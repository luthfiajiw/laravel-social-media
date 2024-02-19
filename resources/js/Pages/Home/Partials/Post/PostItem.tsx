import React from 'react'
import PostUserHeader from './PostUserHeader'

export default function PostItem() {
  return (
    <div className='bg-white border dark:bg-slate-950 dark:border-slate-900 dark:text-gray-100 rounded p-4 mb-3'>
      <div className='flex items-center justify-between mb-3'>
        <PostUserHeader />

        
      </div>
    </div>
  )
}
