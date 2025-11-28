import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, courseId, isLoggedIn }) => {
    // Destructure all properties from the course object for easier use
    const {
        image,
        icon,
        title,
        description,
        lectures,
        duration,
        originalPrice,
        discountedPrice,
        discount,
    } = course;

    return (
        <article className="relative flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[384px] max-sm:w-[90%] max-sm:max-w-[320px] max-sm:mx-auto">
            {/* Image Header */}
            <header className="relative w-full h-[200px] bg-gray-100">
                <img src={image.src} alt={title.text || title.line1} className="w-full h-full object-cover" />
                {image.isSpecial && (
                    <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-[#9411a8] rounded text-white shadow-md">
                        SPECIAL OFFER
                    </div>
                )}
            </header>

            <div className="p-6 flex flex-col flex-grow">
                {/* Icon */}
                <div dangerouslySetInnerHTML={{ __html: icon }} className="[&>svg>path]:fill-[#9411a8]" />

                {/* Title */}
                <h2 className="mb-3 text-lg font-bold leading-6 text-gray-800 min-h-[48px]">
                    {title.isMultiLine ? (
                        <>
                            {title.line1}
                            <br />
                            {title.line2}
                        </>
                    ) : (
                        title.text
                    )}
                </h2>

                {/* Description */}
                <p className="mb-5 text-sm leading-5 text-gray-500">
                    {description.join(' ')}
                </p>

                <hr className="border-t border-gray-100 mb-5" />

                {/* Features */}
                <div className="flex items-center justify-between mb-6 text-gray-500 text-sm">
                    <span className="flex items-center gap-2">
                        <img src="/video.png" alt="lectures" className="w-4 h-4 opacity-60" />
                        {lectures} Lectures
                    </span>
                    <span className="flex items-center gap-2">
                        ⏰ {duration}
                    </span>
                </div>

                <div className="mt-auto">
                    {/* Pricing */}
                    {isLoggedIn ? (<div className="flex gap-3 items-center mb-5">
                        <span className="text-2xl font-bold text-gray-800">{discountedPrice}</span>
                        <span className="text-md line-through text-gray-400">{originalPrice}</span>
                        <span className="text-xs font-semibold text-[#9411a8] bg-[#9411a8]/10 px-2 py-1 rounded">
                            {discount}
                        </span>
                    </div>) : (
                        <p className="text-sm text-gray-500 mb-5">Log in to view pricing</p>
                    )}
                    <Link
                        to={`/courses/${courseId}`}
                        className="block w-full text-center p-3 text-base font-semibold rounded-lg cursor-pointer bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd] transition-colors"
                    >
                        View Course
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default CourseCard;