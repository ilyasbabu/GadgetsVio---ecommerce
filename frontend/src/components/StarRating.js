import React from 'react'

function StarRating({ starCount, reviewCount }) {
    return (
        <span
            className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-slate-600  bg-white rounded-md left-10 top-7"
        >
            <ul className="flex items-center">
                <li>
                    <i className={`w-4 h-4 text-yellow-300 hover:text-yellow-400 ${starCount >= 1 ? "fas fa-star" : starCount >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
                </li>
                <li>
                    <i className={`w-4 h-4 text-yellow-300 hover:text-yellow-400 ${starCount >= 2 ? "fas fa-star" : starCount >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
                </li>
                <li>
                    <i className={`w-4 h-4 text-yellow-300 hover:text-yellow-400 ${starCount >= 4 ? "fas fa-star" : starCount >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
                </li>
                <li>
                    <i className={`w-4 h-4 text-yellow-300 hover:text-yellow-400 ${starCount >= 4 ? "fas fa-star" : starCount >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
                </li>
                <li>
                    <i className={`w-4 h-4 text-yellow-300 hover:text-yellow-400 ${starCount >= 5 ? "fas fa-star" : starCount >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
                </li>
                <li className="ml-2 text-xs text-gray-600">{reviewCount}</li>
            </ul>
        </span>
    )
}

export default StarRating