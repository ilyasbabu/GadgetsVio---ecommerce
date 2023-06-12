import React from 'react'

function ProductListCard({ item }) {
    console.log(item);
    return (
        <>
            <div className=''>
                <div className="flex ">
                    <div className='w-2/5 md:w-2/6 lg:w-1/6 flex justify-start items-start'>
                        <img src={item.image} alt="product image"
                            className='w-full h-48 object-contain' />
                    </div>
                    <div className='w-3/5 md:w-full py-3 relative'>
                        <div className='flex justify-between items-start'>
                            <h3 className='font-medium text-base dark:text-white'>{item.name}</h3>
                            <button
                                type='button'
                                className='px-4 transition ease-in-out duration-200 text-xl w-1/8 text-red-600 group'>
                                <i className="fa-regular fa-heart group-hover:font-bold"></i>
                            </button>
                        </div>
                        <p>
                            <span className='text-xs text-blue-700 pr-1'>{item.avg_rating}</span>
                            <span className='text-xs text-yellow-500 font-bold'>★★★★☆</span>
                            <span className='text-xs text-zinc-400 pl-1'>({item.rating_count})</span>
                        </p>
                        <p>
                            <span className='text-xs relative -top-[0.25rem] dark:text-white'>$ </span>
                            <span className='font-medium text-xl pr-1 dark:text-white'>{item.price}</span>
                            <span className='text-sm text-zinc-400 line-through pr-1'>MRP {item.price}</span>
                            <span className='text-xs font-medium text-green-600'>({"12% off"})</span>
                        </p>
                        {/* <p class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                            </svg>
                            Tutorial
                            </p> */}
                        {item.in_stock ?
                            <p class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"></path>
                                </svg>
                                In-Stock
                            </p>
                            :
                            <p class="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-red-400 mb-2">
                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"></path>
                                </svg>
                                Out-of-Stock
                            </p>
                        }
                        <br />
                        {/* product features */}
                        <p class="mr-1 bg-zinc-100 border-zinc-700 border text-zinc-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5  dark:bg-gray-700 dark:text-zinc-400 mb-2">
                            4BG Ram
                        </p>
                        <p class="mr-1 bg-zinc-100 border-zinc-700 border text-zinc-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5  dark:bg-gray-700 dark:text-zinc-400 mb-2">
                            128GB Internal
                        </p>
                        <p class="bg-zinc-100 border-zinc-700 border text-zinc-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5  dark:bg-gray-700 dark:text-zinc-400 mb-2">
                            128GB Internal
                        </p>
                        <br />
                        <div className='flex'>
                            <div className={`${item.in_stock ? "from-red-600 via-blue-600 to-red-600 bg-size-200 bg-pos-0 hover:bg-pos-100" : "dark:from-red-900 from-red-400 dark:to-blue-900 to-blue-400"} pt-[0.090rem] pb-[0.100rem] px-[0.100rem] bg-gradient-to-l transition-all ease-in-out duration-500 rounded w-fit`}>
                                <button
                                    className={`px-2 py-2 text-xs transition  ease-in duration-200 uppercase  dark:bg-black bg-white  focus:outline-none ${item.in_stock ? " dark:text-white" : "bg-slate-200 dark:bg-zinc-700 text-gray-400"}`}
                                    onClick={true}
                                    disabled={item.in_stock}
                                >
                                    Add to cart <i className="fas fa-cart-shopping"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' border-zinc-200 dark:border-zinc-600 ' />
            </div>
        </>
    )
}

export default ProductListCard