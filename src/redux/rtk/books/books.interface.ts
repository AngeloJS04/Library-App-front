
export interface BooksResponseI {
    data: BooksDataI[]
    pagination: PaginationI
}

export interface BooksDataI {
    author: string
    coverImage: string
    createdAt: string
    genre: string[]
    id: string
    rating: string
    isFavorite: boolean
    title: string
    updatedAt: string
    year: number
}

export interface PaginationI {
    currentPage: number
    pageSize: number
    totalItems: number
    totalPages: number
}