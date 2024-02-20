import { Group } from "./group"
import { User } from "./user"

export interface Post {
  id: number
  user: User
  group?: Group | null
  body: string
  attachments: Attachment[]
  created_at: string
}

export interface Attachment {
  id: number
  name: string
  mime: string
  url: string
}