import React from 'react'

function StarRating({ starCount, text }) {
    return (
        <ul className="flex items-center">
            <li>
                <i className={`w-full h-full text-yellow-400 hover:text-yellow-500 ${starCount >= 1 ? "fas fa-star" : starCount >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
            </li>
            <li>
                <i className={`w-full h-full text-yellow-400 hover:text-yellow-500 ${starCount >= 2 ? "fas fa-star" : starCount >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
            </li>
            <li>
                <i className={`w-full h-full text-yellow-400 hover:text-yellow-500 ${starCount >= 3 ? "fas fa-star" : starCount >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
            </li>
            <li>
                <i className={`w-full h-full text-yellow-400 hover:text-yellow-500 ${starCount >= 4 ? "fas fa-star" : starCount >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
            </li>
            <li>
                <i className={`w-full h-full text-yellow-400 hover:text-yellow-500 ${starCount >= 5 ? "fas fa-star" : starCount >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}`}></i>
            </li>
            <li className="ml-2 text-xs text-gray-600">{text && text}</li>
        </ul>
    )
}

export default StarRating