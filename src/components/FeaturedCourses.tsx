import courseData from "@/data/jsonData.json";
import Link from "next/link";
import CourseCard from "./CourseCard";

interface Course {
    id: number,
    slug: string,
    title: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

const FeaturedCourses = () => {

    const featuredCourses = courseData.courses.filter((course :Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With The Best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {
                featuredCourses.map((course :Course) => (
                    <CourseCard key={course.id} title={course.title} description={course.description} slug={course.slug}></CourseCard>
                ))
            } 
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-white bg-blend-darken hover:bg-gray-100 transition duration-200 hover:text-neutral-700"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
