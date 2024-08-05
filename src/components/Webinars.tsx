import Link from "next/link"
import jsonData from '@/data/jsonData.json'
import { HoverEffect } from "./ui/card-hover-effect"

const Webinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
            <HoverEffect items={jsonData.webinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: '/'
                }
            ))} />
        </div>
        <div className="mt-7 text-center">
        <Link
          href="/webinars"
          className="px-4 py-2 rounded border border-neutral-600 text-white bg-blend-darken hover:bg-gray-100 transition duration-200 hover:text-neutral-700"
        >
          View All Webinars 
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Webinars
