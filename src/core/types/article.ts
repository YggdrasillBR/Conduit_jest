import { Profile } from '/core/types/profile.ts'

export type article = {
    slug: string
    title: string
    description: string
    body: string
    tags: string
    createdat: string
    updatedat: string
    favorited: boolean
    favoritedNumber: number
    author: Profile
}

