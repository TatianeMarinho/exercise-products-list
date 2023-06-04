import ProductList from './components/ProductList';
import products from './data';
import Product from './components/Product';

import './App.css';

function App() {
  return (
    <main className="App">
      <ProductList>
        {
          products.map((product) => {
            return <Product key={ product.id } productInfo={ product } />;
          })
        }
      </ProductList>
    </main>
  );
}

export default App;
