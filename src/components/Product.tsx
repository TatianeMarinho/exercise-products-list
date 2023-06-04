type ProductProp = {
  productInfo : {
    id?: number;
    title: string;
    price: number;
    image: string;
  }
};

/* id: 2,
    title: 'iPhone X',
    description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg', */

function Product({ productInfo } : ProductProp) {
  const { title, price, image } = productInfo;

  return (
    <ul>
      <li className="product">
        <div>
          <p>{ title }</p>
          <p>
            R$
            {' '}
            { price }
          </p>
        </div>
        <img src={ image } alt={ title } />
      </li>
    </ul>
  );
}

export default Product;
