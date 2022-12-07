import React from 'react'
import StarRating from './StarRating'


function Reviews({ review }) {
    return (
        <div className='py-5'>
            <div className="flex items-center mb-4 space-x-4">
                <img className="w-10 h-10 rounded-full" src='/images/avatar.png' alt="" />
                <div className="space-y-1 font-medium ">
                    <p>{review.by} <span className="block text-sm text-gray-500 ">Added on {review.created_time}</span></p>
                </div>
            </div>
            <div className="flex items-center mb-1">
                <StarRating starCount={review.rating} />
                <h3 className=" text-sm font-semibold text-gray-900 dark:text-white">{review.heading} !</h3>
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>
                    Reviewed on {review.created_time}
                </p>
            </footer>
            <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{review.description}</p>
            {/* <a href="/" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a> */}
            <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {review.helpful_count ? review.helpful_count : "No"} people found this review helpful
                </p>
                <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                    <a href="/" className="border focus:outline-none font-medium rounded-lg text-xs px-2 py-1.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">Helpful</a>
                    <a href="/" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                </div>
            </aside>
        </div>
    )
}

export default Reviews