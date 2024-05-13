import React from 'react'
import Products from '../../components/product/Products'


function Shop() {
  return (
    <section className='shop'>
      <div className="container">
        <h1 className='shop__title'>Shop All Products</h1>
        <Products/>
      </div>
    </section>
  )
}

export default Shop
