import ProductsList from './components/ProductsList';
import products from './data';
import Product from './components/Product';

import './App.css';

function App() {
  return (
    <main className="App">
      <ProductsList>
        {
          products.map((product) => {
            return <Product key={ product.id } productInfo={ product } />;
          })
        }
      </ProductsList>
    </main>
  );
}

export default App;
