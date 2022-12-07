import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <main className='dark:bg-gray-800'>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/product/:slug' element={<ProductPage />} />
          <Route path='/cart/' element={<CartPage />} />
          <Route path='/cart/:slug' element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
