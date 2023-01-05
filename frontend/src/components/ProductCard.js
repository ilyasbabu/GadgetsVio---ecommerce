import React from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSuccessMessage } from '../features/commonSlice'

function truncate(str) {
  return str.length > 88 ? str.substring(0, 85) + "..." : str;
}

function truncate24(str) {
  return str.length > 20 ? str.substring(0, 20) + ".." : str;
}

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToCartHandler = () => {
    dispatch(addToCart(product.slug, 1));
    dispatch(showSuccessMessage("Item added to cart Successfully"))
    setTimeout(function () {
      navigate(`/cart/${product.slug}?qty=${1}`);
    }, 2300);
  }
  return (
    <div className="w-96 flex justify-center items-center relative">
      <span
        className="absolute inline-flex items-center px-3 py-1 text-xs font-semibold text-slate-600 rounded-md left-11 top-7"
      >
        <StarRating starCount={product.avg_rating} text={`${product.avg_rating} FROM ${product.rating_count} REVIEWS`} />
      </span>
      <div className="w-full p-4">
        <div className=
          "card flex flex-col justify-center rounded-lg shadow-2xl p-10 \
          dark:bg-gradient-to-tl dark:from-zinc-900  dark:to-black bg-gradient-to-tl from-blue-50 via-white to-white \
          dark:shadow-black dark:hover:shadow-zinc-800 hover:shadow-zinc-500 transition ease-in-out duration-500"
        >
          <div className="prod-title">
            <Link to={`/product/${product.slug}`} className="text-xl uppercase text-slate-900 dark:text-zinc-200 font-bold hover:underline">
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
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900 dark:text-zinc-200 mt-4">
              <p className={`font-bold text-xl  p-1 ${product.in_stock ? "" : "text-slate-400 dark:text-zinc-500"}`}>
                $ {product.price}
              </p>
              <div className={`${product.in_stock ? "from-red-600 via-blue-600 to-red-600 bg-size-200 bg-pos-0 hover:bg-pos-100" : "dark:from-red-900 from-red-400 dark:to-blue-900 to-blue-400"} p-0.5 bg-gradient-to-l transition-all ease-in-out duration-500 rounded-full`}>
                <button
                  className={`px-6 py-2 transition ease-in duration-200 uppercase rounded-full dark:bg-black bg-white  focus:outline-none ${product.in_stock ? " dark:text-white" : "bg-slate-200 dark:bg-zinc-700 text-gray-400"}`}
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
    </div>
  )
}

export default ProductCard