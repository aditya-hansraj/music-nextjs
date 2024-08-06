export type Course = {
    id: number,
    slug: string,
    title: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

export type CourseCardProps = {
    title: string
    description: string
    slug: string
}