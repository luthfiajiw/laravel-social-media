import { Disclosure } from '@headlessui/react'
import React from 'react'

interface PostBodyProps {
  body: string
}

export default function PostBody({ body }: PostBodyProps) {
  return (
    <div className='my-3'>
      <div
        dangerouslySetInnerHTML={{
          __html: body.length > 200 ? body.substring(0, 200) : body
        }}
      />
      
      {body.length > 200 && (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Panel>
                <div dangerouslySetInnerHTML={{__html: body.substring(200)}} />
              </Disclosure.Panel>
              <Disclosure.Button className="text-blue-500">
                {open ? "Read Less" : "Read More"}
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
      )}
    </div>
  )
}
