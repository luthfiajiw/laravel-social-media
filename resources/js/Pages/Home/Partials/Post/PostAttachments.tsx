import { Attachment } from '@/types/post'
import { FaPaperclip } from 'react-icons/fa6'
import { MdDownload } from 'react-icons/md'

interface PostAttachmentsProps {
  attachments: Attachment[]
}

export default function PostAttachments({ attachments } : PostAttachmentsProps) {
  function isImage(attachment: Attachment) {
    const mime = attachment.mime.split('/')
    return mime[0].toLocaleLowerCase() === 'image'
  }

  return (
    <div className={`grid gap-3 mb-3 ${attachments.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
      {attachments.map((att, i) => {
        return (
          <div className='group aspect-square bg-blue-100 flex flex-col items-center justify-center text-gray-500 relative cursor-pointer'>
            {/* Download */}
            <a
              href='#'
              className='z-20 opacity-0 group-hover:opacity-100 transition-all w-8 h-8 flex items-center justify-center text-gray-100 bg-gray-700 rounded absolute right-2 top-2 cursor-pointer hover:bg-gray-800'
            >
              <MdDownload className="w-4 h-4" />
            </a>
            {/* Download */}

            {isImage(att) && (
              <img
                src={att.url}
                className='object-contain aspect-square max-h'
              />
            )}

            {!isImage(att) && (
              <div className='flex flex-col justify-center items-center'>
                <FaPaperclip className='w-10 h-10 mb-3'/>
                <small> {att.name} </small>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
