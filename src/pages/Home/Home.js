import { Shelf } from "../../components/Shelf";

export const Home = () => {
  const products = [
    {
      sku: "3238923",
      name: "Nice Shoes",
      price: 200.0,
    },
    {
      sku: "4444444",
      name: "Nice Shirt",
      price: 80.0,
    },
    {
      sku: "233333",
      name: "Great Jacket",
      price: 120.0,
    },
  ];

  return (
    <main>
      <h1>E-commerce</h1>
      <Shelf title="Offers" products={products}></Shelf>
    </main>
  );
};
