import TextInput from '@/Components/TextInput'
import UserListItem from '@/Components/UserListItem'
import React from 'react'

export default function FollowingListItem() {
  return (
    <div>
      <TextInput
        placeholder="Type to search"
        className="w-full mt-3"
      />

      <div className="mt-3 lg:flex-1 overflow-auto">
        {/* <div className="text-gray-400 text-center p-3">
          You are not joined to any groups
        </div> */}

        {/* FOLLOWING ITEM */}
        <UserListItem />
      </div>
    </div>
  )
}
