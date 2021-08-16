import { useParams } from "react-router-dom";
import { Shelf } from "../../components/Shelf";

const getProducts = (category) => {
  if (category === "shoes") {
    return [
      {
        sku: "3238923",
        name: "Nice Shoes",
        price: 200.0,
      },
      {
        sku: "55555555",
        name: "Jordan Shoes",
        price: 230.0,
      },
    ];
  }

  if (category === "shirts") {
    return [
      {
        sku: "3238923444",
        name: "Nice Shirt",
        price: 50.0,
      },
      {
        sku: "55555555777",
        name: "Jordan Shirt",
        price: 70.0,
      },
    ];
  }

  return [];
};

export const Category = () => {
  const { category } = useParams();

  return (
    <main>
      <h1>Category: {category}</h1>
      <Shelf title="Products" products={getProducts(category)}></Shelf>
    </main>
  );
};
