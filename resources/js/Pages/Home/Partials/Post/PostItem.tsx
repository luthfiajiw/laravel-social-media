import PostUserHeader from './PostUserHeader'
import { Post } from '@/types/post'
import PostBody from './PostBody'
import PostAttachments from './PostAttachments'

interface PosItemProps {
  post: Post
}

export default function PostItem({ post } : PosItemProps) {

  return (
    <div className='bg-white border dark:bg-slate-950 dark:border-slate-900 dark:text-gray-100 rounded p-4 mb-3'>
      <PostUserHeader
        user={post.user}
        group={post.group}
        created_at={post.created_at}
      />
      <PostBody body={post.body} />
      <PostAttachments attachments={post.attachments} />
    </div>
  )
}
