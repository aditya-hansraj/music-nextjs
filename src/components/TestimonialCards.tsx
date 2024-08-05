import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import jsonData from '@/data/jsonData.json';

const TestimonialCards = () => {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear Our Harmony: Voices of Success</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'> 
        <div className='w-full max-w-6xl'>
            <InfiniteMovingCards items={jsonData.testimonials} direction='right' speed='normal' />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards
