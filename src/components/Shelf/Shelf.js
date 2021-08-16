import { ShelfItem } from "../ShelfItem";
import "./styles.css";

export const Shelf = (props) => {
  const { title, products } = props;

  return (
    <section className="shelf-wrapper">
      <h2>{title}</h2>
      <article className="shelf">
        {products.map((product) => (
          <ShelfItem key={product.sku} {...product} />
        ))}
      </article>
    </section>
  );
};
