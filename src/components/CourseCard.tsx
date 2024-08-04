'use client'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

type CourseCardProps = {
    title: string
    description: string
    slug: string
}

const CourseCard = ({ title, description, slug } : CourseCardProps) => {
  return (
    <div className='flex justify-center'>
        <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{title}</p>
                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{description}</p>
                <Link href={`/courses/${slug}`}>
                    Learn More 
                </Link>
            </div>
        </BackgroundGradient>
    </div>
    
  )
}

export default CourseCard
