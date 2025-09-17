import React from 'react'
import courses from '@/json/courses.json'
import Link from 'next/link'
import CardComponent from '@/components/CardComponent'

export default function page() {


    return (
        <div className='flex flex-col gap-4 p-8'>
            {courses.map((course) => (
                <Link key={course.id} href={`/corsi/${course.link}`} className='p-4 border rounded-lg'>
                    <CardComponent
                        title={course.title}
                        subtitle={course.subtitle}
                        description={course.description[0]}
                        src={`/images/courses/${course.id}.webp`}
                        text="Scopri di più"
                    />
                </Link>
            ))}
        </div>
    )
}