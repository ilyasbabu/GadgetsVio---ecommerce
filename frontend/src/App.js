import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import TestPage from './pages/TestPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <main className='bg-gradient-to-t dark:from-black dark:via-zinc-900 dark:to-zinc-900  '>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/product/:slug' element={<ProductPage />} />
          <Route path='/cart/' element={<CartPage />} />
          <Route path='/cart/:slug' element={<CartPage />} />
          <Route path='/test/' element={<TestPage />} />
          <Route path='/login/' element={<LoginPage />} />
          <Route path='/signup/' element={<SignUpPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
