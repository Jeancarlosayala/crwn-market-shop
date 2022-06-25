import { Routes, Route } from 'react-router-dom';

import '../styles/shop.styles.scss'
import CategoriesPreview from './categories-preview.component';
import Category from './category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={ <CategoriesPreview /> } /> 
      <Route path=':category' element={<Category />} />
    </Routes>    
  )
}

export default Shop;