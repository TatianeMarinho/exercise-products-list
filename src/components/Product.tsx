import ProductProp from './types';

type ProductProdProps = {
  productInfo : ProductProp;
};

function Product({ productInfo } : ProductProdProps) {
  const { title, price, image } = productInfo;

  return (
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
  );
}

export default Product;
