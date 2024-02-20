import { FaChevronDown } from "react-icons/fa6";
import GroupListItem from './GroupListItem'
import { Disclosure } from '@headlessui/react'

export default function GroupList() {
  return (
    <div className='px-3 bg-white dark:bg-slate-950 rounded-md border dark:border-slate-900 dark:text-gray-100 py-3 overflow-hidden'>
      {/* MOBILE */}
      <div className="block lg:hidden">
        <Disclosure>
          {({ open }) => (
            <>
            <Disclosure.Button className="w-full">
              <div className='flex justify-between items-center'>
                <h2 className="text-xl font-bold">My Groups</h2>
                <div className={`transition-transform transform ${open ? 'rotate-180 ' : 'rotate-0'} delay-100`}>
                  <FaChevronDown />
                </div>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel>
              <GroupListItem />
            </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      
      {/* DESKTOP */}
      <div className="overflow-hidden flex-col hidden lg:flex">
        <h2 className="text-xl font-bold">My Groups</h2>

        <GroupListItem />
      </div>
    </div>
  )
}
