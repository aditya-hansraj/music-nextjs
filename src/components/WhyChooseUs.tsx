"use client"
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import jsonData from '@/data/jsonData.json'
import '@/app/globals.css'

const WhyChooseUs = () => {
  return (
    <div className="hide-scroll">
      <StickyScroll content={jsonData.content} />
    </div>
  )
}

export default WhyChooseUs
