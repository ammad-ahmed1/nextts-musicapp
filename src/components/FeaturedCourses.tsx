import React from "react";
import coursesData from "@/data/music_courses.json";
interface Course {
  id: 1;
  title: number;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
function FeaturedCourses() {
  // const featuredCourses = coursesData?.courses.filter((course: Course) => course.isFeatured)
  const featuredCourses = coursesData.courses.filter(
    (course: Course) => course.isFeatured
  );
  console.log(featuredCourses, "..........................fc");
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
