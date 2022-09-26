import React from 'react'
import StarRating from './StarRating'


function Reviews() {
    return (
        <div>
            <thead class="text-xs text-gray-700 uppercase ">
                <tr>
                    <th scope="col" class="py-3  text-sm">
                        Reviews:
                    </th>
                </tr>
            </thead>
            <div class="flex items-center mb-4 space-x-4">
                <img class="w-10 h-10 rounded-full" src='' alt="" />
                <div class="space-y-1 font-medium ">
                    <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 ">Joined on August 2014</time></p>
                </div>
            </div>
            <div class="flex items-center mb-1">
                <StarRating starCount={3.5} />
                <h3 class=" text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
            </div>
            <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
            <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
            <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
            <a href="/" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
            <aside>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                    <a href="/" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                    <a href="/" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                </div>
            </aside>
            </div>
    )
}

export default Reviews