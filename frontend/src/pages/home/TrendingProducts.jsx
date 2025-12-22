import React, { useState } from 'react';
import products from '../../data/products.json'
import ProductCards from '../shop/ProductCards';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts(preCount => preCount + 4)
    }
    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader'>Discover the Hottest Picks: Elevate your style with our Curated Collection of Trending Women's Fation Products.</p>
       
        {/* products Card */}
        <div className='mt-8'>
            <ProductCards products={products.slice(0, visibleProducts)}/>
        </div>

        {/* load more button */}
        <div className='product__btn'>
            {
                visibleProducts < products.length && <button onClick={loadMoreProducts} className='btn'>Load More</button>
            }
        </div>
        </section>
    );
};

export default TrendingProducts;