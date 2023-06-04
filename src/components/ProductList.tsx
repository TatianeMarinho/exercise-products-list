type ProductListProps = {
  children: React.ReactNode;
};

function ProductList({ children }: ProductListProps) {
  return (
    <section>
      <h1>Lista de produtos</h1>
      <ul className="productslist">
        {children}
      </ul>
    </section>
  );
}

export default ProductList;
