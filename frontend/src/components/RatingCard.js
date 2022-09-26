import React from 'react'

function RatingCard() {
    return (
        <div className='px-4'>
            <thead class="text-xs text-gray-700 uppercase ">
                <tr>
                    <th scope="col" class="py-3  text-sm">
                        Ratings:
                    </th>
                </tr>
            </thead>
            <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p class="ml-2 text-sm font-bold text-gray-900">3</p>
                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                <a href="#reviewsA" class="text-sm font-medium text-gray-900 underline hover:no-underline ">45 reviews</a>
            </div>
            <div class="flex items-center mt-4 md:mt-2">
                <span class="text-sm font-medium text-blue-900">5</span>
                <div class="mx-4 w-4/5 md:w-1/2 h-4 bg-gray-200 rounded">
                    <div class="h-4 bg-yellow-400 rounded" style={{ width: "70%" }}></div>
                </div>
                <span class="text-sm font-medium text-blue-900">70%</span>
            </div>
            <div class="flex items-center mt-4 md:mt-2">
                <span class="text-sm font-medium text-blue-900">4</span>
                <div class="mx-4 w-4/5 md:w-1/2 h-4 bg-gray-200 rounded">
                    <div class="h-4 bg-yellow-400 rounded" style={{ width: "17%" }}></div>
                </div>
                <span class="text-sm font-medium text-blue-900">17%</span>
            </div>
            <div class="flex items-center mt-4 md:mt-2">
                <span class="text-sm font-medium text-blue-900">3</span>
                <div class="mx-4 w-4/5 md:w-1/2 h-4 bg-gray-200 rounded">
                    <div class="h-4 bg-yellow-400 rounded" style={{ width: "8%" }}></div>
                </div>
                <span class="text-sm font-medium text-blue-900">8%</span>
            </div>
            <div class="flex items-center mt-4 md:mt-2">
                <span class="text-sm font-medium text-blue-900">2</span>
                <div class="mx-4 w-4/5 md:w-1/2 h-4 bg-gray-200 rounded">
                    <div class="h-4 bg-yellow-400 rounded" style={{ width: "4%" }}></div>
                </div>
                <span class="text-sm font-medium text-blue-900">4%</span>
            </div>
            <div class="flex items-center mt-4 md:mt-2">
                <span class="text-sm font-medium text-blue-900">1</span>
                <div class="mx-4 w-4/5 md:w-1/2 h-4 bg-gray-200 rounded">
                    <div class="h-4 bg-yellow-400 rounded" style={{ width: "1%" }}></div>
                </div>
                <span class="text-sm font-medium text-blue-900">1%</span>
            </div>
        </div>
    )
}

export default RatingCard