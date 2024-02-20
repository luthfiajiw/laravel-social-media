import React from 'react'
import PostItem from './PostItem'
import { Post } from '@/types/post'

const post1: Post = {
  id: 1,
  user: {
    id: 1,
    avatar: 'https://picsum.photos/200',
    name: "John Doe"
  },
  group: null,
  attachments: [
    {
      id: 1,
      name: 'test.png',
      mime: 'image/png',
      url: 'https://picsum.photos/1000'
    },
    {
      id: 2,
      name: 'CV-Luthfi.docx',
      mime: 'application/msword',
      url: '#'
    },
  ],
  body: `
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  `,
  created_at: '2024-02-19 15:23'
}

export default function PostList() {
  return (
    <div className='overflow-auto'>
      <PostItem post={post1}/>
    </div>
  )
}
