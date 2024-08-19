import React, { useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../../contexts/DataProvider';
import Carousel from '../../components/CarouselComponent/Carousel';
import Product from '../../components/ProductComponent/Product';
import './HomePage.css';

const HomePage = () => {
  const { state, dispatch } = useDataContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch({ type: 'SET_PRODUCTS', payload: response.data });
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="home">
      <Carousel />
      <div className="product-list">
        {state.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;



























// import React, { useContext } from 'react';
// import { DataContext } from '../contexts/DataProvider';
// import LoaderComponent from '../../components/LoaderComponent/LoaderComponent';
// import ProductComponent from '../../components/ProductComponent/ProductComponent';
// import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
// import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
// // import './HomePage.css';

// const HomePage = () => {
//   const { products, loading } = useContext(DataContext);

//   if (loading) return <LoaderComponent />;

//   return (
//     <div className="home-page">
//       <CarouselComponent />
//       <CategoryComponent />
//       <div className="products">
//         {products.map(product => (
//           <ProductComponent key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
