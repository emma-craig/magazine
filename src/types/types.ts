type TNavigation = {
    categories: TCategory[]
    pages: TPage[]
  }
  
  type TToast = {
    id: number
    content: string
  }
  
  type TArticle = {
    id: number
    title: string
    slug: string
    author: TContributor
    content: string
    category: TCategory
    description: string
    published_at: Date | string
    created_at: Date | string
    updated_at: Date | string
    cover: any
  }
  
  type TCategory = {
    id: number
    title: string
    slug: string
    description: string
    published_at: Date | string
    created_at: Date | string
    updated_at: Date | string
    cover: any
  }
  
  type TPage = {
    id: number
    title: string
    slug: string
    description: string
    content: string
    published_at: Date
    created_at: Date
    updated_at: Date
    cover?: any
  }

  type TContributor = {
    id: number
    name: string
    slug: string
    role: string
    published_at: Date | string
    created_at: Date | string
    updated_at: Date | string
    urls?: {
      id: number
      twitter?: string
      instagram?: string
      facebook?: string
      linkedin?: string
    }
    featured?: {
      id: number
      description: string
      profile_image: any
    }
  }