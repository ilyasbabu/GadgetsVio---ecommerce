import React from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSuccessMessage } from '../features/commonSlice'

function truncate(str) {
  return str.length > 100 ? str.substring(0, 94) + "..." : str;
}

function truncate24(str) {
  return str.length > 26 ? str.substring(0, 20) + ".." : str;
}

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToCartHandler = () => {
    console.log("add to cart", product.slug);
    dispatch(addToCart(product.slug, 1));
    dispatch(showSuccessMessage("Item added to cart Successfully"))
    setTimeout(function () {
      navigate(`/cart/${product.slug}?qty=${1}`);
    }, 1500);
  }
  return (
    <div className="w-96 flex justify-center items-center relative">
      <span
        className="absolute inline-flex items-center px-3 py-1 text-xs font-semibold text-slate-600 rounded-md left-11 top-7"
      >
        <StarRating starCount={product.avg_rating} text={`${product.avg_rating} FROM ${product.rating_count} REVIEWS`} />
      </span>
      <div className="w-full p-4">
        <div className="card flex flex-col justify-center p-10 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
          <div className="prod-title">
            <Link to={`/product/${product.slug}`} className="text-xl uppercase text-gray-900 dark:text-white font-bold hover:underline">
              {truncate24(product.name)}
            </Link>
            <p className="uppercase text-sm text-gray-400">
              {truncate(product.description)}
            </p>
          </div>
          <Link to={`/product/${product.slug}`} className="prod-img overflow-hidden">
            <img src={product.image} alt="..." className="w-full object-cover object-center h-64 transition duration-500 hover:scale-105 sm:h-[250px]" />
          </Link>
          <div className="prod-info grid gap-5">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900 dark:text-white mt-4">
              <p className="font-bold text-xl mb-2">
                $ {product.price}
              </p>
              <button
                className={`px-6 py-2 transition ease-in duration-200 uppercase rounded-full focus:outline-none ${product.in_stock ? "hover:bg-gray-800 hover:text-white dark:text-white dark:border-white border-gray-900 border-2" : "bg-slate-400 dark:bg-slate-700 text-white"}`}
                onClick={addToCartHandler}
                disabled={product.in_stock ? false : true}
              >
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