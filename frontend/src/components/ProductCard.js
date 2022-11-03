import React from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'

function truncate(str) {
  return str.length > 100 ? str.substring(0, 94) + "..." : str;
}

function ProductCard({ product }) {
  return (
    <div className="w-96 flex justify-center items-center relative ">

      <span
        className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-slate-600 rounded-md left-11 top-7"
      >
        <StarRating starCount={product.avg_rating} text={`${product.avg_rating} FROM ${product.rating_count} REVIEWS`} />
      </span>
      
      <div className="w-full p-4">
        <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-xl">
          <div className="prod-title">
            <Link to={`/product/${product.slug}`} className="text-xl uppercase text-gray-900 font-bold hover:underline">
              {product.name}
            </Link>
            <p className="uppercase text-sm text-gray-400">
              {truncate(product.description)}
            </p>
          </div>
          <Link to={`/product/${product.slug}`} className="prod-img">
            <img src={product.image} alt="..." className="w-full object-cover object-center h-64" />
          </Link>
          <div className="prod-info grid gap-5">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900 mt-4">
              <p className="font-bold text-xl mb-2">
                $ {product.price}
              </p>
              <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                Add to cart <i className="fas fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default ProductCard