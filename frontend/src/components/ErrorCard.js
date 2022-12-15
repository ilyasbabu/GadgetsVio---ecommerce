import React from 'react'
import { useState, useEffect } from 'react';

function ErrorCard({ message }) {
  const [show, setShow] = useState(true)
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 300)
  }, [])
  const handleXClick = () => {
    setFade(false);
    setTimeout(() => {
      setShow(false);
    }, 500)
  }
  console.log(message);
  return (
    <div className={`transition-all duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
      {
        show &&
        <aside className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-lg bg-red-500 px-5 py-3 text-white">
          <p className="text-sm font-medium">{message}</p>
          <button className="ml-3 rounded bg-white/20 p-1 hover:bg-white/10" onClick={handleXClick}>
            <span className="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </aside>
      }
    </div>
  )
}

export default ErrorCard