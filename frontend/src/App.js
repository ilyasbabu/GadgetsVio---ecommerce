import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import TestPage from './pages/TestPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <main className='bg-gradient-to-t dark:from-black dark:via-zinc-900 dark:to-zinc-900 from-slate-100 via-white to-white '>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/product/:slug' element={<ProductPage />} />
          <Route path='/cart/' element={<CartPage />} />
          <Route path='/cart/:slug' element={<CartPage />} />
          <Route path='/test/' element={<TestPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
