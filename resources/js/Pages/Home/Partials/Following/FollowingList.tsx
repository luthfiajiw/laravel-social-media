import { Disclosure } from '@headlessui/react'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import FollowingListItem from './FollowingListItem'

export default function FollowingList() {
  return (
    <div className='px-3 bg-white dark:bg-slate-950 dark:border-slate-900 dark:text-gray-100  rounded border py-3 overflow-hidden'>
      {/* MOBILE */}
      <div className="block lg:hidden">
        <Disclosure>
          {({ open }) => (
            <>
            <Disclosure.Button className="w-full">
              <div className='flex justify-between items-center'>
                <h2 className="text-xl font-bold">My Followings</h2>
                <div className={`transition-transform transform ${open ? 'rotate-180 ' : 'rotate-0'} delay-100`}>
                  <FaChevronDown />
                </div>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel>
              <FollowingListItem />
            </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      {/* DESKTOP */}
      <div className="overflow-hidden flex-col hidden lg:flex">
        <h2 className="text-xl font-bold">My Followings</h2>
        <FollowingListItem />
      </div>
    </div>
  )
}
