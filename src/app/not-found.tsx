"use client"

import Link from "next/link";

export default function notFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 to-blue-950 text-white text-center relative overflow-hidden">
            {/* Bubbles (background decoration) */}
            <div className="absolute w-3 h-3 rounded-full bg-blue-400 opacity-50 top-1/4 left-1/3 animate-bounce"></div>
            <div className="absolute w-2 h-2 rounded-full bg-blue-300 opacity-40 top-1/3 right-1/4 animate-bounce delay-200"></div>
            <div className="absolute w-4 h-4 rounded-full bg-blue-500 opacity-30 bottom-1/4 left-1/2 animate-bounce delay-500"></div>

            {/* 404 Number */}
            <h1 className="text-[10rem] md:text-[12rem] font-extrabold text-blue-200 relative">
                404
                {/* Small bubble accent */}
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-blue-300 text-4xl animate-bounce">
                    ○
                </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-blue-100 opacity-90">
                Oops! Sei fuori rotta...
            </p>

            {/* Button */}
            <Link
                href="/"
                className="mt-8 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition shadow-lg text-white font-medium"
            >
                TORNA ALLA SUPERFICIE
            </Link>
        </div>
    )
}