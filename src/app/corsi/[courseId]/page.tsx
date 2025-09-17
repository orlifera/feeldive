import courses from '@/json/courses.json';
import { notFound } from 'next/navigation';

export default function CoursePage({ params }: { params: { courseId: string } }) {
    const course = courses.find(c => c.link === params.courseId);

    if (!course) {
        notFound(); // built-in 404 if no match
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <h2 className="text-lg text-gray-600">{course.subtitle}</h2>

            <ul className="list-disc ml-6 mt-4">
                {course.description.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>

            <p className="mt-4 font-semibold">Prezzo: {course.price}</p>
        </div>
    );
}
